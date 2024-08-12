import React from 'react'  // Importing the React library to use JSX syntax
import Navbar from './Navbar'  // Importing the Navbar component from a local file
import Table from './Table'  // Importing the Table component from a local file

// Functional component named Reimbursement
const Reimbursement = () => {
  return (
    <>
      {/* Rendering the Navbar component */}
      <Navbar/>
      {/* Rendering the Table component */}
      <Table/>
    </>
  )
}

export default Reimbursement  // Exporting the Reimbursement component for use in other parts of the application
