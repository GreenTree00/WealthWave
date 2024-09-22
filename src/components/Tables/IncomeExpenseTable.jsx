import {useState} from "react";
import EditData from "../EditData";
import DeleteData from "../DeleteData";

function IncomeExpenseTable ({sendIncomeExpense, refresh}) {

  const [edit, setEdit] = useState({typeofData: "", id: 0});

    const {resInc, resExp} = sendIncomeExpense;

  const [deleteitem, setDeleteItem] = useState({typeofData: "", id: 0});

    let errorMessage = "";
    if ((!Array.isArray(resInc) || !resInc.length) && (!Array.isArray(resExp) || !resExp.length)) {
    errorMessage = "To see data on the graph, please enter either Income or Expenses.";
    }
  
    return (
      <>
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
      <button className="button is-warning" onClick={(event) => {event.preventDefault(); setEdit({typeofData: "Edit Income", id: items.id});}}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="button" onClick={() => {setDeleteItem({typeofData: "Delete Income", id: items.id});refresh();}}>Delete</button>
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
      <button className="button is-warning" onClick={(event) => {event.preventDefault(); setEdit({typeofData: "Edit Expense", id: items.id});}}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="button" onClick={() => {setDeleteItem({typeofData: "Delete Expense", id: items.id});refresh();}}>Delete</button>
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
{(edit.typeofData === "Edit Expense") ? <EditData typeofData={edit.typeofData} id={edit.id}/> : null}
{(deleteitem.typeofData === "Delete Income" || deleteitem.typeofData === "Delete Expense") ? <DeleteData typeofData={deleteitem.typeofData} id={deleteitem.id}/> : null}
</>
    )
}
export default IncomeExpenseTable;