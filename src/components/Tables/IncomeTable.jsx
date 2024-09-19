import {useState} from "react"
import EditData from "../EditData";

function IncomeTable ({sendIncome}) {

  

  const [edit, setEdit] = useState({typeofData: "", id: 0});

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
      <button className="button is-danger" onClick={console.log(items.id)}>Delete</button>
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
</>
    )
}
export default IncomeTable;