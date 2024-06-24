import React from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar';  // Import Sidebar component
//import './Dashboard.css';  // Import your dashboard CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        {/* Add any additional navbar items or components here */}
      </nav>

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="main-content">
        {/* Your dashboard content goes here */}
        <h1>Welcome to the Dashboard!</h1>
        {/* Add more dashboard components and content here */}
      </main>
    </div>
  );
};

export default Dashboard;
