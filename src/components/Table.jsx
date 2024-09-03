import {useState, useEffect} from "react";

function Table () {

    const [incomeTableData, setIncomeTableData] = useState([{date: 0, type: "", value: 0}]);

    const [expenseTableData, setExpenseTableData] = useState([{date: 0, type: "", value: 0}]);

    useEffect(() => {           // this route will server the data for the table
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

    return (
        <table class="table is-striped is-fullwidth">
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
      <tr>
      <td>{new Date(income.date).toLocaleDateString()}</td>
      <td>{income.type}</td>
      <td>${income.value}</td>
    </tr>
      )
    })}
    {expenseTableData.map((expense) => {
      return (
      <tr>
      <td>{new Date(expense.date).toLocaleDateString()}</td>
      <td>{expense.type}</td>
      <td>${expense.value}</td>
    </tr>
      )
    })}
  </tbody>
</table>
    )
}
export default Table;