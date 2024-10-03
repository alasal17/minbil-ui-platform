// src/components/Dashboard/ClicksTable.js
import React from 'react';
import '../../styles/ClicksTable.css';

const ClicksTable = () => {
  const tableData = [
    { tjeneste: 'Oljeskift', klikk: 120, bestillinger:  187 },
    { tjeneste: 'Bremseinspeksjon', klikk: 80, bestillinger:  23 },
    { tjeneste: 'EU-kontroll', klikk: 150, bestillinger:  102 },
    { tjeneste: 'Dekkbytte', klikk: 90, bestillinger:  12 },
    { tjeneste: 'Service', klikk: 110, bestillinger:  97 },
  ];

  return (
    <div>
      <h3>Antall klikk på tjenester</h3>
      <table className="clicks-table">
        <thead>
          <tr>
            <th>Tjeneste</th>
            <th>Antall klikk</th>
            <th>Bestillinger</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.tjeneste}</td>
              <td>{row.klikk}</td>
              <td>{row.bestillinger}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClicksTable;
