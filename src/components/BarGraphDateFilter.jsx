import React, {useState} from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import IncomeTable from "./Tables/IncomeTable";
import ExpenseTable from "./Tables/ExpenseTable";
import IncomeExpenseTable from "./Tables/IncomeExpenseTable";

function BarGraphDateFilter () {

    const [formData, setFormData] = useState({
        type: "", firstdate: "", seconddate: ""
     })

     const [data, setData] = useState([{
        name: '',
        value: 0
     }])

     const [tableData, setTableData] = useState([{}]);

     const [tableName, setTableName] = useState("");

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
               const serverData = await response.json();
               setData(serverData);
               try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/data/income/period/table`, {     
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const serverData = await response.json();
                setTableData(serverData);
                setTableName("Income")
                    } catch (err) {
                    console.log(err);
                    }
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
       const serverData = await response.json();
       setData(serverData);
       try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/data/expense/period/table`, {     
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const serverData = await response.json();
        setTableData(serverData);
        setTableName("Expense");
            } catch (err) {
            console.log(err);
            }
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
           const {resInc, resExp} = await response.json();
           setData([...resInc, ...resExp]);
           try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/data/income-expense/period/table`, {     
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const serverData = await response.json();
            setTableData(serverData);
            setTableName("Income-Expense");
            } catch (error) {
            console.error('Error:', error);
            alert("There was a problem adding this data. Please try again later");
            }
        } catch (error) {
        console.error('Error:', error);
        alert("There was a problem adding this data. Please try again later");
       }};
   }

   

    return (
        <div>
            <p className="title">Look Up By Specific Date</p>
        <div>
    <form className="box custom-box">
    <label for="type">Which data do you want to see:</label>
    <div className="select">
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
    <br />
    <br />
    <br />
    <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
    <BarChart width={400} height={200} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
    </ResponsiveContainer>
    </div>
    {tableName=="Income"? <IncomeTable sendIncome={tableData}/>:""}
    {tableName=="Expense"? <ExpenseTable sendExpense={tableData}/>:""}
    {tableName=="Income-Expense"? <IncomeExpenseTable sendIncomeExpense={tableData}/>:""}
    </form>
    </div>
    </div>
    )
}

export default BarGraphDateFilter;