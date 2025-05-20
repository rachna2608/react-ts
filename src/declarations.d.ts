declare module 'investorListMfe/InvestorTable' {
  const InvestorTable: React.ComponentType<{ onSelectInvestor: (id: number) => void }>;
  export default InvestorTable;
}

declare module 'commitmentTableMfe/CommitmentTable' {
  const CommitmentTable: React.ComponentType<{ investorId: number }>;
  export default CommitmentTable;
}