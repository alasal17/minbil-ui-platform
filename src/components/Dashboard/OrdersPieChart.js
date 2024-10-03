// src/components/Dashboard/OrdersPieChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const OrdersPieChart = () => {
  const pieData = [
    { name: 'Denne måneden', value: 70 },
    { name: 'Forrige måned', value: 30 },
  ];

  const COLORS = ['#1A7CFF', '#FF971E'];

  return (
    <div>
      <h3>Bestillinger denne måneden vs. forrige måned</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#1A7CFF"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersPieChart;
