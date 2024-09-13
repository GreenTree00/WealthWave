function IncomeExpenseTable ({sendIncomeExpense}) {

    const {resInc, resExp} = sendIncomeExpense;

    let errorMessage = "";
    if ((!Array.isArray(resInc) || !resInc.length) && (!Array.isArray(resExp) || !resExp.length)) {
    errorMessage = "To see data on the graph, please enter either Income or Expenses.";
    }
  
    return (
        <table className="table is-striped is-fullwidth">
  <thead>
  {errorMessage === "" && (
      <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Value</th>
    </tr>
    )}
  </thead>
  <tbody>
  {resInc.map((items) => {
      return (
        <tr key={items.id}>
      <td>{new Date(items.date).toLocaleDateString()}</td>
      <td>Income</td>
      <td>${items.total_income}</td>
      <td>
      <button className="button is-warning" onClick={console.log(items.id)}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="submit" onClick={console.log(items.id)}>Delete</button>
      </td>
    </tr>
      )
    })}
    {resExp.map((items) => {
      return (
        <tr key={items.id}>
      <td>{new Date(items.date).toLocaleDateString()}</td>
      <td>Expense</td>
      <td>${items.total_expense}</td>
      <td>
      <button className="button is-warning" onClick={console.log(items.id)}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="submit" onClick={console.log(items.id)}>Delete</button>
      </td>
    </tr>
      )
    })}
    {errorMessage === "To see data on the graph, please enter either Income or Expenses." && (
      <tr>
        <td>{errorMessage}</td>
      </tr>
    )}
  </tbody>
</table>
    )
}
export default IncomeExpenseTable;