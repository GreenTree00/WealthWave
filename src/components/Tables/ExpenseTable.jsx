function ExpenseTable ({sendExpense}) {

  let expense = sendExpense;

    return (
        <table className="table-layout:fixed">
  <thead>
    <tr>
      <th>Date</th>
      <th>Housing</th>
      <th>Food</th>
      <th>Transportaion</th>
      <th>Insurance</th>
      <th>Entertainment</th>
      <th>Other</th>
      <th>Total Expense</th>
    </tr>
  </thead>
  <tbody>
    {expense.map((items) => {
      return (
        <tr key={items.id}>
      <td>{new Date(items.date).toLocaleDateString()}</td>
      <td>${items.housing}</td>
      <td>${items.food}</td>
      <td>${items.transportation}</td>
      <td>${items.insurance}</td>
      <td>${items.entertainment}</td>
      <td>${items.other}</td>
      <td>${items.total_expense}</td>
    </tr>
      )
    })}
  </tbody>
</table>
    )
}
export default ExpenseTable;