import React from 'react';
import EmployeeNavbar from './EmployeeNavbar'; // Navbar component for employee-related navigation
import EmployeeCard from './EmployeeCard';     // Card component for displaying employee details or summary
import EmployeeTable from './EmployeeTable';   // Table component for listing employees

const Employee = () => {
  return (
    <>
      {/* Render the navigation bar for employee management */}
      <EmployeeNavbar />
      
      {/* Render the card that may display employee-related information */}
      <EmployeeCard/>
      
      {/* Render the table to show a list of employees */}
      <EmployeeTable/>
    </>
  );
};

export default Employee;
