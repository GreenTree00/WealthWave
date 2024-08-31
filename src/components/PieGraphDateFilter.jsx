import React, {useState} from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

function BarGraphDateFilter () {

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
               } catch (error) {
               console.error('Error:', error);
               alert("There was a problem adding this data. Please try again later");
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
       setFormData({type: "", firstdate: "", seconddate: ""});
       const data = await response.json();
       } catch (error) {
       console.error('Error:', error);
       alert("There was a problem adding this data. Please try again later");
   }} else if (formData.type == "Both Income & Expense") {
       try {
           const response = await fetch(`${import.meta.env.VITE_API_URL}/data/income-expense/period`, {     
               method: "POST",
               body: JSON.stringify(formData),
               headers: {
                   "Content-Type": "application/json",
               },
           });
           setFormData({type: "", firstdate: "", seconddate: ""});
           const data = await response.json();
           } catch (error) {
           console.error('Error:', error);
           alert("There was a problem adding this data. Please try again later");
       }};
   }

   const data = [{
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  }];

    return (
    <form className="box">
    <label for="type">Which data do you want to see:</label>
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
    <input className="button is-primary" type="submit" onClick={handleClick}/>
    <BarChart width={400} height={200} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
    </form>
    )
}

export default BarGraphDateFilter;