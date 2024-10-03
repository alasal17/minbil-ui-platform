// src/components/Dashboard/VisitorsLineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VisitorsLineChart = () => {
  const lineData = [
    { name: 'Mandag', Besøkende: 200 },
    { name: 'Tirsdag', Besøkende: 300 },
    { name: 'Onsdag', Besøkende: 250 },
    { name: 'Torsdag', Besøkende: 400 },
    { name: 'Fredag', Besøkende: 350 },
    { name: 'Lørdag', Besøkende: 500 },
    { name: 'Søndag', Besøkende: 450 },
  ];

  return (
    <div>
      <h3>Besøkende på siden denne uken</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Besøkende" stroke="#1A7CFF" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorsLineChart;
