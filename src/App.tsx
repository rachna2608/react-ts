import React, { Suspense, useState } from 'react';

// Lazy-load MFEs
const InvestorTable = React.lazy(() => import('investorListMfe/InvestorTable'));
const CommitmentTable = React.lazy(() => import('commitmentTableMfe/CommitmentTable'));

export default function App() {
  const [selectedInvestorId, setSelectedInvestorId] = useState<number | null>(null);

  return (
    <div style={{ padding: 24 }}>
      <h1>Investor Dashboard</h1>

      <Suspense fallback={<div>Loading Investor Table...</div>}>
        <InvestorTable onSelectInvestor={(id: number) => {
          console.log('Investor selected:', id);
          setSelectedInvestorId(id)
        }} />
      </Suspense>

      {selectedInvestorId !== null && (
        <>
          <h2>Commitments for Investor #{selectedInvestorId}</h2>
          <Suspense fallback={<div>Loading Commitment Table...</div>}>
            <CommitmentTable investorId={selectedInvestorId} />
          </Suspense>
        </>
      )}
    </div>
  );
}
