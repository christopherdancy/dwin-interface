import { useState, useEffect } from 'react';
import { useWeb3Provider } from '../web3Data/hooks/useWeb3Provider';
import use165Contracts from '../../hooks/use165Contracts';
import useSupportsInterfaces from '../../hooks/useSupportsInterfaces';
import { IModuleBase__factory } from '@fractal-framework/core-contracts';
import {
  ClaimSubsidiary,
  ClaimSubsidiary__factory,
  IClaimSubsidiary__factory,
} from '../../assets/typechain-types/votes-token';

const useClaimModule = (moduleAddresses: string[] | undefined) => {
  const [claimModule, setClaimModule] = useState<ClaimSubsidiary>();
  console.log('🚀 ~ file: useClaimModule.ts ~ line 14 ~ claimModule', claimModule);
  const {
    state: { signerOrProvider },
  } = useWeb3Provider();

  const [contracts] = use165Contracts(moduleAddresses);
  const [interfaces] = useState([
    IModuleBase__factory.createInterface(),
    IClaimSubsidiary__factory.createInterface(),
  ]);

  const [potentialClaim] = useSupportsInterfaces(contracts, interfaces);

  useEffect(() => {
    if (potentialClaim === undefined || !signerOrProvider) {
      setClaimModule(undefined);
      return;
    }

    const claim = potentialClaim.find(g => g.match === true);
    if (!claim) {
      setClaimModule(undefined);
      return;
    }

    setClaimModule(ClaimSubsidiary__factory.connect(claim.address, signerOrProvider));
  }, [potentialClaim, signerOrProvider]);

  return claimModule;
};

export default useClaimModule;
