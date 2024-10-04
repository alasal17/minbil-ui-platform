// src/components/Dashboard/Sidebar.js
import React from 'react';
import '../../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <ul className="sidebar__links">
        {/* Profil Section */}
        {isOpen && <li className="sidebar__title">Profil</li>}
        <li>
          <i className="bi bi-calendar-fill sidebar__icon"></i>
          {isOpen && <span>Kalender</span>}
        </li>
        <li>
          <i className="bi bi-briefcase-fill sidebar__icon"></i>
          {isOpen && <span>Tjenester</span>}
        </li>
        <li>
          <i className="bi bi-building sidebar__icon"></i>
          {isOpen && <span>Bedriftprofil</span>}
        </li>

        {/* Bedrift Section */}
        {isOpen && <li className="sidebar__title">Bedrift</li>}
        <li>
          <i className="bi bi-graph-up sidebar__icon"></i>
          {isOpen && <span>Rapporter</span>}
        </li>
        <li>
          <i className="bi bi-tools sidebar__icon"></i>
          {isOpen && <span>Administrasjon</span>}
        </li>
        <li>
          <i className="bi bi-gear-fill sidebar__icon"></i>
          {isOpen && <span>Innstillinger</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
