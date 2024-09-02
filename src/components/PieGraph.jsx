import React, {useState, useEffect} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Table from "./Table";

function PieGraph () {

    const [data, setData] = useState([{ name: "", value: 0 }])

    const [incomeTableData, setIncomeTableData] = useState([{date: 0, type: "", value: 0}]);

    const [expenseTableData, setExpenseTableData] = useState([{date: 0, type: "", value: 0}]);

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
    }, []);
    
    useEffect(() => {           // this route will server the data for the table
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/data/period/month/table`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          var {resExp, resInc} = result;
          setIncomeTableData(resInc);
          setExpenseTableData(resExp);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(); 
    }, []);


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
    <p className="title">Your Past Month</p>
    <div className="box">
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
    <Table income={incomeTableData} expese={expenseTableData}/>
    </div>
    </div>
  );
}

export default PieGraph;