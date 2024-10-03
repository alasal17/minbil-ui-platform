// src/components/Dashboard/KPICards.js
import React from 'react';
import '../../styles/KPICards.css';

const KPICards = ({ data }) => {
    return (
        <div className="kpi-cards">
            <div className="kpi-card">
                <h3>Bestillinger i dag</h3>
                <p>{data.ordersToday}</p>
            </div>
            <div className="kpi-card">
                <h3>Ferdige bestillinger i dag</h3>
                <p>{data.completedToday}</p>
            </div>
            <div className="kpi-card">
                <h3>Aktive kampanjer</h3>
                <p>{data.activeCampaigns}</p>
                <p className='p-changes'>+ 5% klikk </p>
            </div>
            <div className="kpi-card">
                <h3>Totalt salg denne uken</h3>
                <p>{data.totalSalesThisWeek}</p>
                <p className='p-changes'>+ 2% </p>
            </div>
        </div>
    );
};

export default KPICards;
