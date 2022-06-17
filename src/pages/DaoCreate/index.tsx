import { ethers } from 'ethers';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DaoCreator from '../../components/DaoCreator';
import useDeployDAO, { TokenAllocation } from '../../hooks/useDeployDAO';

function DaoCreate() {
  const navigate = useNavigate();

  const [pending, setPending] = useState<boolean>(false);
  const [daoName, setDAOName] = useState<string>('');
  const [tokenName, setTokenName] = useState<string>('');
  const [tokenSymbol, setTokenSymbol] = useState<string>('');
  const [tokenSupply, setTokenSupply] = useState<string>('');
  const [tokenAllocations, setTokenAllocations] = useState<TokenAllocation[]>([
    { address: '', amount: 0 },
  ]);
  const [proposalThreshold, setProposalThreshold] = useState<string>('0');
  const [quorum, setQuorum] = useState<string>('4');
  const [executionDelay, setExecutionDelay] = useState<string>('6545');
  const [lateQuorumExecution, setLateQuorumExecution] = useState<string>('0');
  const [voteStartDelay, setVoteStartDelay] = useState<string>('6545');
  const [votingPeriod, setVotingPeriod] = useState<string>('45818');

  const successCallback = (daoAddress: ethers.utils.Result) => {
    setPending(false);
    setDAOName('');
    setTokenName('');
    setTokenSymbol('');
    setTokenSupply('');
    setTokenAllocations([]);
    setProposalThreshold('');
    setQuorum('');
    setExecutionDelay('');
    setLateQuorumExecution('');
    setVoteStartDelay('');
    setVotingPeriod('');

    navigate(`/daos/${daoAddress}`);
  };

  const deploy = useDeployDAO({
    daoName,
    tokenName,
    tokenSymbol,
    tokenSupply,
    tokenAllocations,
    proposalThreshold,
    quorum,
    executionDelay,
    lateQuorumExecution,
    voteStartDelay,
    votingPeriod,
    setPending,
    successCallback,
  });

  return (
    <DaoCreator
      pending={pending}
      daoName={daoName}
      setDAOName={setDAOName}
      tokenName={tokenName}
      setTokenName={setTokenName}
      tokenSymbol={tokenSymbol}
      setTokenSymbol={setTokenSymbol}
      tokenSupply={tokenSupply}
      setTokenSupply={setTokenSupply}
      tokenAllocations={tokenAllocations}
      setTokenAllocations={setTokenAllocations}
      proposalThreshold={proposalThreshold}
      setProposalThreshold={setProposalThreshold}
      quorum={quorum}
      setQuorum={setQuorum}
      executionDelay={executionDelay}
      setExecutionDelay={setExecutionDelay}
      lateQuorumExecution={lateQuorumExecution}
      setLateQuorumExecution={setLateQuorumExecution}
      voteStartDelay={voteStartDelay}
      setVoteStartDelay={setVoteStartDelay}
      votingPeriod={votingPeriod}
      setVotingPeriod={setVotingPeriod}
      nextLabel="Deploy"
      nextTrigger={deploy}
    />
  );
}

export default DaoCreate;
