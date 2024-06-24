import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2><span className="headerLeft">North</span><span className="headerRight">eastern</span></h2>      
      </div>
      <ul className="sidebar-menu">
      <li><NavLink to="/">Dashboard</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/sensors">Sensors</NavLink></li>
      <li><NavLink to="/reports">Reports</NavLink></li>
      <li><NavLink to="/notifications">Notifications</NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
