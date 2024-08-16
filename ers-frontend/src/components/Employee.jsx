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
      <div className="md:flex md:flex-wrap">
        <EmployeeCard className='cursor-pointer hover:bg-[#8064A2] hover:text-white' heading="Pending Task"  main="Pending Approval" Expense="Unreported Expenses" advances="Unreported Advances"/>
        <EmployeeCard className='cursor-pointer hover:bg-[#77933C] hover:text-white' heading="Approval Task" main="Total Approved" Expense="Unreported Expenses" advances="Unreported Advances" />
        <EmployeeCard className='cursor-pointer hover:bg-[#C0504D] hover:text-white' heading="Decline Task"  main="Total Declined" Expense="Unreported Expenses" advances="Unreported Advances"/>
        <EmployeeCard 
          className='cursor-pointer hover:bg-[#0096C8] hover:text-white' 
          heading='Create Expense'
          subHeading='Create Expense'
          iconSrc="https://cdn.lordicon.com/depeqmsz.json"
          isReadMore
        />
      </div>
     
    </>
  );
};

export default Employee;
