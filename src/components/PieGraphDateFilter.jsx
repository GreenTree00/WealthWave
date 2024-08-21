import React, {useState} from "react";


function PieGraphDateFilter () {

    const [formData, setFormData] = useState({
        type: "", firstdate: "", seconddate: ""
     })

     const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClick = async (event) => {
        event.preventDefault()
        if (formData.type == "Income") {
           try {
               const response = await fetch(`${import.meta.env.VITE_API_URL}/data/income/period`, {     
                   method: "POST",
                   body: JSON.stringify(formData),
                   headers: {
                       "Content-Type": "application/json",
                   },
               });
               setFormData({type: "", firstdate: "", seconddate: ""});
               const data = await response.json();
               console.log(data[0].total_income);          //console.logs the data for total income
               } catch (error) {
               console.error('Error:', error);
           }
        } else if (formData.type == "Expense") {
      try {
       const response = await fetch(`${import.meta.env.VITE_API_URL}/data/expense/period`, {     
           method: "POST",
           body: JSON.stringify(formData),
           headers: {
               "Content-Type": "application/json",
           },
       });
       const data = await response.json();
       console.log(data[0].total_expense);                         // console.logs the data for total expense
       } catch (error) {
       console.error('Error:', error);
   }} else if (formData.type == "Both Income & Expense") {
       try {
           const response = await fetch(`${import.meta.env.VITE_API_URL}/data/income-expense/period`, {     
               method: "POST",
               body: JSON.stringify(formData),
               headers: {
                   "Content-Type": "application/json",
               },
           });
           const data = await response.json();
           console.log(data.resInc[0].total_income, data.resExp[0].total_expense);     // console.logs the data for total income and expense
           } catch (error) {
           console.error('Error:', error);
       }};
   }

    return (
    <form className="box">
    <label for="type">Which data do you want to see?:</label>
    <div class="select">
    <select id="type" name="type" value={formData.type} onChange={handleChange}>
    <option value="blank"></option>
    <option value="Income">Income</option>
    <option value="Expense">Expense</option>
    <option value="Both Income & Expense">Both Income & Expense</option>
    </select>
    </div>
    <div className="field">
    <label className="label" for="startingDate">Starting Date:</label>
    <div className="control">
    <input className="input" type="date" id="firstdate" name="firstdate" value={formData.firstdate} onChange={handleChange}/>
    </div>
    </div>
    <div className="field">
    <label className="label" for="endingDate">Ending Date:</label>
    <div className="control">
    <input className="input" type="date" id="seconddate" name="seconddate" value={formData.seconddate} onChange={handleChange}/>
    </div>
    </div>
    <input type="submit" onClick={handleClick}/>
    </form>
    )
}

export default PieGraphDateFilter;