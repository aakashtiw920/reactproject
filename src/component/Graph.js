import {Bar,BarChart,ResponsiveContainer,XAxis, YAxis,  CartesianGrid} from 'recharts';
import React from 'react';

const data2 = [
    {
      Month: "Jan",
      value: 100, 
    },
    {
      Month: "Feb",
      value: 200, 
    },
    {
      Month: "March",
      value: 300, 
    },
    {
      Month: "April",
      value: 100, 
    },
    {
      Month: "May",
      value: 500, 
    },
    {
      Month: "June",
      value: 200, 
    },
    {
      Month: "July",
      value: 600, 
    },
    {
      Month: "Aug",
      value: 800, 
    },
    {
      Month: "Sept",
      value: 200, 
    },
    {
      Month: "Oct",
      value: 500, 
    },
    {
      Month: "Nov",
      value: 600, 
    },
    {
      Month: "Dec",
      value: 400, 
    },
  ];

 const Graph = () => {
  return (
    <div class="bg-white" >
      <ResponsiveContainer width="100%" aspect={3}>
          <BarChart data={data2} width={400} height={400}>
            <XAxis dataKey="Month" axisLine={false} tickLine={false} padding={{bottom:10}} fontSize={10}/>
            <CartesianGrid stroke="white" vertical={false} /> 
            <Bar dataKey="value" fill="	#C9F6FF"  radius={[4, 4, 4, 4]}/>
          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Graph;
