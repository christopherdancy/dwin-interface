import { useEffect, useState } from "react";
import ContentBoxTitle from "../../ui/ContentBoxTitle";
import CreateDAOInput from "../../ui/CreateDAOInput";
import Button from "../../ui/Button";
import { TokenAllocation } from "../../../daoData/useDeployDAO";
import { ethers } from "ethers";

const TokenAllocationInput = ({
  index,
  tokenAllocation,
  updateTokenAllocation,
  removeTokenAllocation,
}: {
  index: number;
  tokenAllocation: TokenAllocation;
  updateTokenAllocation: (
    index: number,
    tokenAllocation: TokenAllocation
  ) => void;
  removeTokenAllocation: (index: number) => void;
}) => {
  const updateAddress = (address: string) => {
    updateTokenAllocation(index, {
      address: address,
      amount: tokenAllocation.amount,
    });
  };

  const updateAmount = (amount: string) => {
    updateTokenAllocation(index, {
      address: tokenAllocation.address,
      amount: Number(amount),
    });
  };

  return (
    <>
      <input
        className="md:col-span-8 w-full border border-gray-200 bg-gray-400 rounded py-1 px-2 text-gray-50"
        type="string"
        value={tokenAllocation.address || ""}
        onChange={(event) => updateAddress(event.target.value)}
      />
      <input
        className="md:col-span-3 md:pt-0 border border-gray-200 bg-gray-400 rounded py-1 px-2 text-gray-50"
        type="number"
        value={tokenAllocation.amount || ""}
        onChange={(event) => updateAmount(event.target.value)}
      />
      <div className="md:col-span-1">
        <Button
          onClick={() => removeTokenAllocation(index)}
          addedClassNames="px-2 mx-1"
        >
          X
        </Button>
      </div>
    </>
  );
};

const TokenAllocations = ({
  tokenAllocations,
  setTokenAllocations,
  errorMessage,
}: {
  tokenAllocations: TokenAllocation[] | undefined;
  setTokenAllocations: React.Dispatch<
    React.SetStateAction<TokenAllocation[] | undefined>
  >;
  errorMessage: string | undefined;
}) => {
  const updateTokenAllocation = (
    index: number,
    tokenAllocation: TokenAllocation
  ) => {
    if (tokenAllocations === undefined) {
      setTokenAllocations(undefined);
      return;
    }

    const newTokenAllocations = [...tokenAllocations];
    newTokenAllocations[index] = tokenAllocation;

    setTokenAllocations(newTokenAllocations);
  };

  const addTokenAllocation = () => {
    if (tokenAllocations === undefined) {
      setTokenAllocations([{ address: "", amount: 0 }]);
      return;
    }

    setTokenAllocations([
      ...tokenAllocations,
      {
        address: "",
        amount: 0,
      },
    ]);
  };

  const removeTokenAllocation = (index: number) => {
    if (tokenAllocations === undefined) return;

    setTokenAllocations([
      ...tokenAllocations.slice(0, index),
      ...tokenAllocations.slice(index + 1),
    ]);
  };

  return (
    <div className="bg-gray-500 rounded-lg my-4">
      <div className="px-4 py-4">
        <div className="text-sm text-gray-50 pb-2">Token Allocations</div>
        <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col items-center">
          <div className="md:col-span-8 text-sm text-gray-50">Address</div>
          <div className="md:col-span-3 text-sm text-gray-50">Amount</div>
          {tokenAllocations &&
            tokenAllocations.map((tokenAllocation, index) => (
              <TokenAllocationInput
                key={index}
                index={index}
                tokenAllocation={tokenAllocation}
                updateTokenAllocation={updateTokenAllocation}
                removeTokenAllocation={removeTokenAllocation}
              />
            ))}
        </div>
        <div
          className="text-sm text-gray-50 underline cursor-pointer my-4"
          onClick={() => addTokenAllocation()}
        >
          Add Allocation
        </div>
        {errorMessage && (
          <div className="text-center text-sm text-white">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

const TokenDetails = ({
  setPrevEnabled,
  setNextEnabled,
  name,
  setName,
  symbol,
  setSymbol,
  supply,
  setSupply,
  tokenAllocations,
  setTokenAllocations,
}: {
  setPrevEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setNextEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  name: string | undefined;
  setName: React.Dispatch<React.SetStateAction<string | undefined>>;
  symbol: string | undefined;
  setSymbol: React.Dispatch<React.SetStateAction<string | undefined>>;
  supply: number | undefined;
  setSupply: React.Dispatch<React.SetStateAction<number | undefined>>;
  tokenAllocations: TokenAllocation[] | undefined;
  setTokenAllocations: React.Dispatch<
    React.SetStateAction<TokenAllocation[] | undefined>
  >;
}) => {
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    setPrevEnabled(true);
  }, [setPrevEnabled]);

  useEffect(() => {
    if (tokenAllocations === undefined) return;

    setNextEnabled(
      name !== undefined &&
        name.trim() !== "" &&
        symbol !== undefined &&
        symbol.trim() !== "" &&
        supply !== undefined &&
        supply !== 0 &&
        !tokenAllocations.some(
          (tokenAllocation) =>
            !ethers.utils.isAddress(tokenAllocation.address) ||
            tokenAllocation.amount === 0
        ) &&
        tokenAllocations
          .map((tokenAllocation) => tokenAllocation.amount)
          .reduce((prev, curr) => prev + curr, 0) <= supply
    );
  }, [name, setNextEnabled, supply, symbol, tokenAllocations]);

  useEffect(() => {
    if (tokenAllocations === undefined || supply === undefined) return;

    if (
      tokenAllocations.some(
        (tokenAllocation) =>
          tokenAllocation.address !== "" &&
          !ethers.utils.isAddress(tokenAllocation.address)
      )
    ) {
      setErrorMessage("Invalid address");
    } else if (
      tokenAllocations
        .map((tokenAllocation) => tokenAllocation.amount)
        .reduce((prev, curr) => prev + curr, 0) > supply
    ) {
      setErrorMessage("Invalid token allocations");
    } else {
      setErrorMessage(undefined);
    }
  }, [tokenAllocations, supply]);

  return (
    <div>
      <ContentBoxTitle>Mint a New Token</ContentBoxTitle>
      <CreateDAOInput
        dataType="text"
        value={name}
        onChange={setName}
        label="Token Name"
        helperText="What is your governance token called?"
        disabled={false}
      />

      <CreateDAOInput
        dataType="text"
        value={symbol}
        onChange={setSymbol}
        label="Token Symbol"
        helperText="Max: 5 chars"
        disabled={false}
      />

      <CreateDAOInput
        dataType="number"
        value={supply?.toString()}
        onChange={(e) => setSupply(Number(e))}
        label="Token Supply"
        helperText="Whole numbers only"
        disabled={false}
      />

      <TokenAllocations
        tokenAllocations={tokenAllocations}
        setTokenAllocations={setTokenAllocations}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default TokenDetails;
