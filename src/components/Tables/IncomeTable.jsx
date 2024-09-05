function IncomeTable ({sendIncome}) {

  let income = sendIncome;

    return (
        <table className="table is-striped is-fullwidth">
  <thead>
    <tr>
      <th>Date</th>
      <th>Job Income</th>
      <th>Side Hustle Income</th>
      <th>Stock Income</th>
      <th>Other</th>
      <th>Total Income</th>
    </tr>
  </thead>
  <tbody>
    {income.map((items) => {
      return (
        <tr key={items.id}>
      <td>{new Date(items.date).toLocaleDateString()}</td>
      <td>${items.job_income}</td>
      <td>${items.side_hustle_income}</td>
      <td>${items.stock_income}</td>
      <td>${items.other}</td>
      <td>${items.total_income}</td>
    </tr>
      )
    })}
  </tbody>
</table>
    )
}
export default IncomeTable;