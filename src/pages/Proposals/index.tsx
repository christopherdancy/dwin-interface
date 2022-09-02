import { Routes, Route, Navigate } from 'react-router-dom';

import ProposalDetails from '../../components/Proposals/ProposalDetails';
import { useGovenorModule } from '../../providers/govenor/hooks/useGovenorModule';
import { useUserProposalValidation } from '../../providers/govenor/hooks/useUserProposalValidation';
import ProposalCreate from '../ProposalCreate';

function Proposals() {
  const {
    createProposal: { submitProposal, pendingCreateTx },
  } = useGovenorModule();
  const canUserCreateProposal = useUserProposalValidation();
  return (
    <Routes>
      <Route
        index
        element={
          <Navigate
            to="./.."
            replace={true}
          />
        }
      />
      <Route
        path="new"
        element={
          <ProposalCreate
            submitProposal={submitProposal}
            pendingCreateTx={pendingCreateTx}
            isUserAuthorized={canUserCreateProposal}
          />
        }
      />
      <Route
        path=":proposalNumber/*"
        element={<ProposalDetails />}
      />
    </Routes>
  );
}

export default Proposals;
