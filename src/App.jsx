import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import EmployeeRoutes from './Components/Employee/EmployeeRoutes';

// Temporary Admin placeholder until you create an Admin folder/component
const AdminDashboard = () => <h2>Admin Dashboard - Management Only</h2>;

export default function App() {
  return (
    <Routes>
      {/* Default route loads Login */}
      <Route path="/" element={<Login />} />
      
      {/* Route for Employees - links to your sub-router */}
      <Route path="/employee/*" element={<EmployeeRoutes />} />
      
      {/* Route for Admins */}
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Catch-all redirect to login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}