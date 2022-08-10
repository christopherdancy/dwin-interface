import { useMemo, useState } from 'react';
import ContentBox from '../ui/ContentBox';
import { PrimaryButton } from '../ui/forms/Button';
import useClaimToken from '../../hooks/useClaimToken';
import { ethers } from 'ethers';
import { useGovenorModule } from '../../providers/govenor/hooks/useGovenorModule';

function ClaimToken() {
  const [pending, setPending] = useState<boolean>(false);

  const {
    votingToken: {
      votingTokenData: { decimals, symbol, userClaimAmount },
    },
  } = useGovenorModule();

  const claimToken = useClaimToken({
    setPending,
  });

  const formattedValue = useMemo(
    () =>
      userClaimAmount && decimals
        ? ethers.utils.formatUnits(userClaimAmount.toString(), decimals)
        : undefined,
    [userClaimAmount, decimals]
  );

  if (!formattedValue || !Number(formattedValue)) {
    return null;
  }

  return (
    <ContentBox isLightBackground>
      <div className="flex justify-between items-center">
        <div className="text-gray-25">
          {`You have ${formattedValue} ${symbol} available to claim!`}
        </div>
        <PrimaryButton
          label="Claim"
          className="mr-0"
          onClick={claimToken}
          disabled={pending}
        />
      </div>
    </ContentBox>
  );
}

export default ClaimToken;
