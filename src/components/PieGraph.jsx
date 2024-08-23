import React, {useState, useEffect} from "react";
import { PieChart, Pie, Cell } from "recharts";

function PieGraph () {

    const [income, setIncome] = useState({row: ""});
    const [expense, setExpense] = useState({row: ""});
      
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

     
     useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/data/period/month`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          var {resExp, resInc} = result;
          setIncome(resInc[0].total_income);
          setExpense(resExp[0].total_expense);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(); 
    }, []);

    


    //here is where i need to map the useState object for both income and expense and find how to place them into the data array so that the piegraph can render them
    /*const data = [
      { name: "Income", value: income[0].total_income },
      { name: "Expense", value:  }
    ];*/
    


      const data  = [
      { name: "Income", value: 100 },
      { name: "Expense", value: 100 },
      //{ name: "Group C", value: 100 },
      //{ name: "Group D", value: 100 }
    ];
         

  return (    
    <div>
    <p>Your Past Month</p>
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
    </div>
  );
}

export default PieGraph;