import {useState, useEffect} from "react";
import EditData from "../EditData";
import DeleteData from "../DeleteData";

function MonthTable ({refresh}) {

    const [incomeTableData, setIncomeTableData] = useState([{id: 0, date: 0, type: "", value: 0}]);

    const [expenseTableData, setExpenseTableData] = useState([{id: 0, date: 0, type: "", value: 0}]);

    const [edit, setEdit] = useState({typeofData: "", id: 0});

    const [deleteitem, setDeleteItem] = useState({typeofData: "", id: 0});

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
    }, [refresh]);

    let errorMessage = "";
    if ((!Array.isArray(incomeTableData) || !incomeTableData.length) && (!Array.isArray(expenseTableData) || !expenseTableData.length)) {
    errorMessage = "To see data on the graph, please enter either Income or Expenses.";
    }

    return (
      <>
        <table className="table is-striped is-fullwidth">
  <thead>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Total Value</th>
    </tr>
  </thead>
  <tbody>
    {incomeTableData.map((income) => {
      return (
      <tr key={income.id}>
      <td>{new Date(income.date).toLocaleDateString()}</td>
      <td>{income.type}</td>
      <td>${income.value}</td>
      <td>
      <button className="button is-warning" type="submit" onClick={() => setEdit({typeofData: "Edit Income", id: income.id})}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="submit" onClick={() => {setDeleteItem({typeofData: "Delete Income", id: income.id});refresh();}}>Delete</button>
      </td>
    </tr>
      )
    })}
    {expenseTableData.map((expense) => {
      return (
      <tr key={expense.id}>
      <td>{new Date(expense.date).toLocaleDateString()}</td>
      <td>{expense.type}</td>
      <td>${expense.value}</td>
      <td>
      <button className="button is-warning" type="submit" onClick={() => setEdit({typeofData: "Edit Expense", id: expense.id})}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="submit" onClick={() => {setDeleteItem({typeofData: "Delete Expense", id: expense.id}); refresh();}}>Delete</button>
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
{(edit.typeofData === "Edit Income" || edit.typeofData === "Edit Expense") ? <EditData typeofData={edit.typeofData} id={edit.id}/> : null}
{(deleteitem.typeofData === "Delete Income" || deleteitem.typeofData === "Delete Expense") ? <DeleteData typeofData={deleteitem.typeofData} id={deleteitem.id}/> : null}
</>
    )
}
export default MonthTable;