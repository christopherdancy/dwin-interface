import { useWeb3Provider } from './../contexts/web3Data/hooks/useWeb3Provider';
import { useState, useEffect } from 'react';

const useENSName = (account?: string | null) => {
  const {
    state: { provider },
  } = useWeb3Provider();

  const [ensName, setEnsName] = useState<string | null>(null);
  useEffect(() => {
    let isMounted = true;
    if (!provider || !account) {
      setEnsName(null);
      return;
    }

    provider
      .lookupAddress(account)
      .then((value: string | null) => {
        if (isMounted) {
          setEnsName(value);
        }
      })
      .catch(console.error);
    return () => {
      isMounted = false;
    };
  }, [account, provider]);

  return ensName;
};

export default useENSName;
