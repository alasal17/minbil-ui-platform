// src/components/Dashboard/AnalyticsSection.js
import React, { useState } from 'react';
import '../../styles/AnalyticsSection.css';
import OrdersPieChart from './OrdersPieChart';
import VisitorsLineChart from './VisitorsLineChart';
import ClicksTable from './ClicksTable';

const AnalyticsSection = () => {
  const [activeTab, setActiveTab] = useState('chart'); // 'chart' or 'table'

  return (
    <div className="analytics-section">
        <h3>Målinger</h3>
      <div className="charts-container">
        {/* Left Side: Pie Chart */}
        <div className="chart-item">
          <OrdersPieChart />
        </div>

        {/* Right Side: Tabs for Line Chart and Table */}
        <div className="chart-item">
          <div className="analytics-tabs">
            <button
              className={`tab-button ${activeTab === 'chart' ? 'active' : ''}`}
              onClick={() => setActiveTab('chart')}
            >
              Besøkende
            </button>
            <button
              className={`tab-button ${activeTab === 'table' ? 'active' : ''}`}
              onClick={() => setActiveTab('table')}
            >
              Klikk
            </button>
          </div>
          {activeTab === 'chart' ? (
            <VisitorsLineChart />
          ) : (
            <ClicksTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
