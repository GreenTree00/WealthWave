import React, {useState, useEffect} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import MonthTable from "./Tables/MonthTable";

function PieGraph () {

    const [data, setData] = useState([{ name: "", value: 0 }])

    const [refresh, setRefresh] = useState(0);

    function DeleteItemRefresh () {
      setRefresh(refresh + 1);
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/data/period/month`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          var {resExp, resInc} = result;
          setData([...resExp, ...resInc]);  
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(); 
    }, [refresh]);

      const COLORS = ["#FF5722", "#2196F3", "#FFC107", "#9C27B0", "#03A9F4", "#03A9F4"];
      
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


  return (    
    <div>
    <p className="title">Home</p>
    <div className="box custom-box">
    <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
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
    </ResponsiveContainer>
    </div>
    <MonthTable refresh={DeleteItemRefresh}/>
    </div>
    </div>
  );
}

export default PieGraph;