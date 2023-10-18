import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Used', value: 65 },
  { name: 'Remaining', value: 35 },
];

const COLORS = ['blue', 'white'];

const DonutChart = () => {
  return (
    <div >
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="50%"
          outerRadius="80%"
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
      <div className="centered-text">65%</div>
    </div>
  );
};

export default DonutChart;
