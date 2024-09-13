import {useState, useEffect} from "react";

function MonthTable () {

    const [incomeTableData, setIncomeTableData] = useState([{id: 0, date: 0, type: "", value: 0}]);

    const [expenseTableData, setExpenseTableData] = useState([{id: 0, date: 0, type: "", value: 0}]);

    useEffect(() => {           
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/data/period/month/table`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          var {resExp, resInc} = result;
          setIncomeTableData(resInc);
          setExpenseTableData(resExp);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(); 
    }, []);

    // logic to show notice to use user that not data will causes a blank data
    let errorMessage = "";
    if ((!Array.isArray(incomeTableData) || !incomeTableData.length) && (!Array.isArray(expenseTableData) || !expenseTableData.length)) {
    errorMessage = "To see data on the graph, please enter either Income or Expenses.";
    }

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
    {incomeTableData.map((income) => {
      return (
      <tr key={income.id}>
      <td>{new Date(income.date).toLocaleDateString()}</td>
      <td>{income.type}</td>
      <td>${income.value}</td>
    </tr>
      )
    })}
    {expenseTableData.map((expense) => {
      return (
      <tr key={expense.id}>
      <td>{new Date(expense.date).toLocaleDateString()}</td>
      <td>{expense.type}</td>
      <td>${expense.value}</td>
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
export default MonthTable;