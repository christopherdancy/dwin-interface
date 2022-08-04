import { DAO__factory, DAOAccessControl__factory } from '@fractal-framework/core-contracts';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWeb3Provider } from '../../contexts/web3Data/hooks/useWeb3Provider';
import useSearchDao from '../../hooks/useSearchDao';
import { FractalAction } from '../../providers/fractal/constants/enums';
import { useFractal } from '../../providers/fractal/hooks/useFractal';
import { ModuleActionRoleEvents } from '../../providers/fractal/types';

export function DAOController({ children }: { children: JSX.Element }) {
  const { dao, dispatch } = useFractal();
  const params = useParams();
  const {
    state: { signerOrProvider },
  } = useWeb3Provider();

  const { errorMessage, address, addressIsDAO, updateSearchString } = useSearchDao();

  const loadDAO = useCallback(() => {
    if (dao.isLoading || params.address !== dao.daoAddress) {
      updateSearchString(params.address!);
    }
  }, [dao.isLoading, params.address, dao.daoAddress, updateSearchString]);

  const retrieveDAO = useCallback(async () => {
    const daoAddress = address;
    const daoContract = DAO__factory.connect(daoAddress!, signerOrProvider!);
    const daoName = await daoContract!.name();
    const accessControlAddress = await daoContract.accessControl();
    const accessControlContract = DAOAccessControl__factory.connect(
      accessControlAddress,
      signerOrProvider!
    );

    // retrieves action roles added events
    const actionRoles = (
      await accessControlContract.queryFilter(accessControlContract.filters.ActionRoleAdded())
    )
      .filter(event => event.args.target !== daoContract.address)
      .map(event => event.args.target);

    // retrieves action roles removed events
    const actionRolesRemoved = (
      await accessControlContract.queryFilter(accessControlContract.filters.ActionRoleRemoved())
    )
      .filter(event => event.args.target !== daoContract.address)
      .map(event => event.args.target);

    const moduleEventsMapping = new Map<string, ModuleActionRoleEvents>();

    actionRoles.forEach(target => {
      const module = moduleEventsMapping.get(target);
      if (!module) {
        moduleEventsMapping.set(target, { address: target, moduleEnabled: 1 });
      } else {
        moduleEventsMapping.set(target, { ...module, moduleEnabled: module.moduleEnabled++ });
      }
    });

    actionRolesRemoved.forEach(target => {
      const module = moduleEventsMapping.get(target);
      if (!module) {
        console.error("shouldn't see this, trying to remove event that wasn't added");
      } else {
        moduleEventsMapping.set(target, { ...module, moduleEnabled: module.moduleEnabled-- });
      }
    });

    const moduleAddresses = Array.from(moduleEventsMapping.values())
      .filter(v => v.moduleEnabled)
      .map(v => v.address);

    return {
      daoAddress,
      daoContract,
      daoName,
      accessControlAddress,
      accessControlContract,
      moduleAddresses,
    };
  }, [address, signerOrProvider]);
  useEffect(() => loadDAO(), [loadDAO]);
  useEffect(() => {
    if (addressIsDAO && address && signerOrProvider) {
      (async () => {
        dispatch({
          type: FractalAction.SET_DAO,
          payload: await retrieveDAO(),
        });
      })();
    }
  }, [address, signerOrProvider, addressIsDAO, retrieveDAO, dispatch]);

  useEffect(() => {
    if (errorMessage) {
      (async () => {
        dispatch({
          type: FractalAction.INVALID,
        });
      })();
    }
  }, [errorMessage, dispatch]);
  return children;
}
