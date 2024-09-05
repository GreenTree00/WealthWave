function IncomeExpenseTable ({sendIncomeExpense}) {

    const {resInc, resExp} = sendIncomeExpense;
  
    return (
        <table className="table is-striped is-fullwidth">
  <thead>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
  {resInc.map((items) => {
      return (
        <tr key={items.id}>
      <td>{new Date(items.date).toLocaleDateString()}</td>
      <td>Income</td>
      <td>${items.total_income}</td>
    </tr>
      )
    })}
    {resExp.map((items) => {
      return (
        <tr key={items.id}>
      <td>{new Date(items.date).toLocaleDateString()}</td>
      <td>Expense</td>
      <td>${items.total_expense}</td>
    </tr>
      )
    })}
  </tbody>
</table>
    )
}
export default IncomeExpenseTable;