import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

function PieGraph () {

const [formData, setFormData] = useState({
    type: "", firstdate: "", seconddate: ""
 })

    const data = [
        { name: "Income", value: 100 },
        { name: "Expense", value: 100 },
        //{ name: "Group C", value: 100 },
        //{ name: "Group D", value: 100 }
      ];
      
      const COLORS = ["#00FF00", "#FF0000", /*"#FFBB28", "#FF8042"*/];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
      }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

         
     // This is related to the sending of data to the api for the date not related to the graph

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
                    await fetch("http://localhost:3000/api/data/income/period", {   
                      method: "POST",
                      body: JSON.stringify(formData),
                      headers: {
                          "Content-Type": "application/json",
                        }
                    });
                    
              } catch (err) {
                  console.log("There was a problem with the fetch operation:", error);
              }
             } else if (formData.type == "Expense") {
             try {
                 await fetch("http://localhost:3000/api/data/expense/period", {     
                   method: "POST",
                   body: JSON.stringify(formData),
                   headers: {
                       "Content-Type": "application/json",
                     }
                 });
                 
           } catch (err) {
               console.log("There was a problem with the fetch operation:", error);
           }
         } else if (formData.type == "Both Income & Expense") {
            await fetch("http://localhost:3000/api/data/income-expense/period", {  
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                  }
              });
         }
        } 

  return (
    <>
    <form>
    <label for="type">Which data do you want to see?:</label>
    <select id="type" name="type" value={formData.type} onChange={handleChange}>
    <option value="Income">Income</option>
    <option value="Expense">Expense</option>
    <option value="Both Income & Expense">Both Income & Expense</option>
    </select>
    <label for="startingDate">Starting Date:</label>
    <input type="date" id="firstdate" name="firstdate" value={formData.firstdate} onChange={handleChange}/>
    <label for="endingDate">Ending Date:</label>
    <input type="date" id="seconddate" name="seconddate" value={formData.seconddate} onChange={handleChange}/>
    <input type="submit" onClick={handleClick}/>
    </form>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </>
  );
}

export default PieGraph;