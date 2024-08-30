import React, {useState, useEffect} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function PieGraph () {

    const [income, setIncome] = useState({total_income: 0});      //change this so that type is income and the value is space there also
    const [expense, setExpense] = useState({total_expense: 0});
      
      const COLORS = ["#00FF00", "#FF0000", "#FFBB28", "#FF8042"];
      
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

     
     useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/data/period/month`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          var {resExp, resInc} = result;
          setIncome(resInc);
          setExpense(resExp);
          console.log(resInc);   
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(); 
    }, []);
    
    const data = []

      /*const data = [
      { name: "Income", value:  inc },  //income.total_income
      { name: "Expense", value: exp }, //expense.total_expense
      //{ name: "Group C", value: 100 },
      //{ name: "Group D", value: 100 }
    ];*/


  return (    
    <div>
    <p>Your Past Month</p>
    <PieChart width={400} height={400}>
      <Tooltip />
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
    </div>
  );
}

export default PieGraph;