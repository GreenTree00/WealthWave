import {useState} from "react"
import EditData from "../EditData";
import DeleteData from "../DeleteData";

function IncomeTable ({sendIncome, refresh}) {

  const [edit, setEdit] = useState({typeofData: "", id: 0});

  const [deleteitem, setDeleteItem] = useState({typeofData: "", id: 0});

  let income = sendIncome;

  let errorMessage = "";
    if (!Array.isArray(income) || !income.length) {
    errorMessage = "There is no current income for this period. Please add some, or make sure your specified dates are correct";
    }

    return (
      <>
        <table className="table is-striped is-fullwidth">
  <thead>
    {errorMessage === "" && (
      <tr>
      <th>Date</th>
      <th>Job Income</th>
      <th>Side Hustle Income</th>
      <th>Stock Income</th>
      <th>Other</th>
      <th>Total Income</th>
      </tr>
    )}
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
      <td>
      <button className="button is-warning" onClick={(event) => {event.preventDefault(); setEdit({typeofData: "Edit Income", id: items.id});}}>Edit</button>
      </td>
      <td>
      <button className="button is-danger" type="button" onClick={() => {setDeleteItem({typeofData: "Delete Income", id: items.id});refresh();}}>Delete</button>
      </td>
    </tr>
      )
    })}
    {errorMessage === "There is no current income for this period. Please add some, or make sure your specified dates are correct" && (
      <tr>
        <td>{errorMessage}</td>
      </tr>
    )}
  </tbody>
</table>
{(edit.typeofData === "Edit Income") ? <EditData typeofData={edit.typeofData} id={edit.id}/> : null}
{(deleteitem.typeofData === "Delete Income") ? <DeleteData typeofData={deleteitem.typeofData} id={deleteitem.id}/> : null}
</>
    )
}
export default IncomeTable;