

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import EmployeeMenu from './EmployeeMenu';
import EmployeeDashboard from './EmployeeDashboard';
import Leave from './Leave';
import EmployeeProfile from './EmployeeProfile';
import CheckInOut from './CheckInOut';
import EmployeeScreenTime from "./EmployeeScreenTime";


export default function EmployeeRoutes() {
  const navigate = useNavigate(); // This function controls URL navigation

  const handleLogout = () => {
    // 1. Clear session data so the user can't click back to return
    localStorage.clear(); 
    
    // 2. Instantly redirect the browser to the login page route
    navigate('/', { replace: true }); 
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Pass the handleLogout function down to your sidebar menu component */}
      <EmployeeMenu onLogout={handleLogout} />

      <main style={{ flexGrow: 1, padding: '40px', overflowY: 'auto', backgroundColor: '#ffffff' }}>
        <Routes>
          <Route path="/" element={<EmployeeDashboard />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="leave" element={<Leave />} />
          <Route path="profile" element={<EmployeeProfile/>} />
          <Route path="attendance" element={<CheckInOut />} />
          <Route path="screening-time" element={<EmployeeScreenTime />}/>
          
        </Routes>
      </main>
    </div>
  );
}