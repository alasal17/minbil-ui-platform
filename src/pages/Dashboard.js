// src/pages/Dashboard.js
import React, { useState } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import KPICards from '../components/Dashboard/KPICards';
import AnalyticsSection from '../components/Dashboard/AnalyticsSection';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample KPI data (replace with actual data from API or state)
  const kpiData = {
    ordersToday: 5,
    completedToday: 3,
    activeCampaigns: 2,
    totalSalesThisWeek: 24,
  };

  return (
    <div className="dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Sidebar isOpen={sidebarOpen} />
        <div className="dashboard__content">
          <h1></h1>
          <KPICards data={kpiData} />
          <AnalyticsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
