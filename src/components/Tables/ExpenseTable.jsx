import {useState} from "react";
import EditData from "../EditData";

function ExpenseTable ({sendExpense}) {

  const [edit, setEdit] = useState({typeofData: "", id: 0});

  let expense = sendExpense;

  let errorMessage = "";
    if (!Array.isArray(expense) || !expense.length) {
    errorMessage = "There is no current expenses for this period. Please add some, or make sure your specified dates are correct";
    }

    return (
      <>
        <table className="table is-striped is-fullwidth">
  <thead>
  {errorMessage === "" && (
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
  )}
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
      <td>
      <button className="button is-warning" onClick={(event) => {event.preventDefault(); setEdit({typeofData: "Edit Expense", id: items.id});}}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="submit" onClick={console.log(items.id)}>Delete</button>
      </td>
    </tr>
      )
    })}
    {errorMessage === "There is no current expenses for this period. Please add some, or make sure your specified dates are correct" && (
      <tr>
        <td>{errorMessage}</td>
      </tr>
    )}
  </tbody>
</table>
{(edit.typeofData === "Edit Income" || edit.typeofData === "Edit Expense") ? <EditData typeofData={edit.typeofData} id={edit.id}/> : null}
</>
    )
}
export default ExpenseTable;