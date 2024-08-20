import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function PieGraph () {


/*useEffect( async () => {    // This will be used to fetch data to dispay a pie chart of this months data when pages is loaded
  await fetch(`${import.meta.env.VITE_API_URL}/data`);
  const newData = await response.json();
  console.log(newData);
}, [formData]);*/

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

         

  return (    
    <>
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