import { useState, useEffect } from 'react';
import { CreatorState, CreatorSteps } from './../types';

/**
 * This hook updates the next page button's disable state for each form
 * @param state
 * @returns
 */
export function useNextDisabled(state: CreatorState) {
  const [isNextDisbled, setIsDisabled] = useState(true);

  useEffect(() => {
    switch (state.step) {
      case CreatorSteps.ESSENTIALS:
        if (!!state.essentials.daoName.trim()) {
          setIsDisabled(false);
          break;
        }
        setIsDisabled(true);
        break;
      case CreatorSteps.FUNDING:
        setIsDisabled(false);
        break;
      case CreatorSteps.TREASURY_GOV_TOKEN:
        if (state.govToken) {
          if (!state.govToken.tokenAllocations || !state.govToken.tokenSupply) {
            setIsDisabled(true);
            break;
          }
          const isAllocationsValid =
            state.govToken.tokenAllocations
              .map(tokenAllocation => Number(tokenAllocation.amount))
              .reduce((prev, curr) => prev + curr, 0) +
              (!state.govToken.parentAllocationAmount
                ? 0
                : Number(state.govToken.parentAllocationAmount)) <=
            Number(state.govToken.tokenSupply);

          setIsDisabled(!isAllocationsValid);
          break;
        }
        setIsDisabled(true);
        break;
      case CreatorSteps.GOV_CONFIG:
        setIsDisabled(false);
        break;
      case CreatorSteps.GOV_CONFIG: {
        const { govModule, govToken, essentials } = state;

        const isEssentialsComplete = !!essentials.daoName.trim();
        const isGovTokenComplete =
          !!govToken.tokenName.trim() &&
          !!govToken.tokenSymbol.trim() &&
          Number(govToken.tokenSupply) > 0 &&
          govToken.tokenAllocations
            .map(tokenAllocation => Number(tokenAllocation.amount))
            .reduce((prev, curr) => prev + curr, 0) <= Number(govToken.tokenSupply);
        const isGovModuleComplete =
          Number(govModule.proposalThreshold) >= 0 &&
          Number(govModule.quorum) >= 0 &&
          Number(govModule.quorum) <= 100 &&
          Number(govModule.executionDelay) >= 0 &&
          Number(govModule.lateQuorumExecution) >= 0 &&
          Number(govModule.voteStartDelay) >= 0 &&
          Number(govModule.votingPeriod) > 0 &&
          govModule.proposalThreshold.trim() !== '' &&
          govModule.quorum.trim() !== '' &&
          govModule.executionDelay.trim() !== '' &&
          govModule.lateQuorumExecution.trim() !== '' &&
          govModule.voteStartDelay.trim() !== '' &&
          govModule.votingPeriod.trim() !== '';
        setIsDisabled(!isEssentialsComplete && !isGovModuleComplete && !isGovTokenComplete);
        break;
      }
      case CreatorSteps.GNOSIS_GOVERNANCE: {
        const {
          gnosis: { trustedAddresses, signatureThreshold },
        } = state;

        const isTrustedAddressValid =
          !trustedAddresses.some(trustee => trustee.error || !trustee.address.trim()) &&
          !!trustedAddresses.length;

        const isSignatureThresholdValid =
          Number(signatureThreshold) > 0 && Number(signatureThreshold) <= trustedAddresses.length;

        setIsDisabled(!isTrustedAddressValid || !isSignatureThresholdValid);
        break;
      }
    }
  }, [state]);

  return isNextDisbled;
}