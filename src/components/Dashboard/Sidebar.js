// src/components/Dashboard/Sidebar.js
import React from 'react';
import '../../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="sidebar__links">
                <li>Dashboard</li>
                <li>Kunder</li>
                <li>Bestillinger</li>
                <li>Rapporter</li>
            </ul>
        </div>
    );
};

export default Sidebar;
