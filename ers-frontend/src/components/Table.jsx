import React from 'react'  // Importing the React library to use JSX syntax
import Reports from './Reports'  // Importing the Reports component from a local file
import Table1 from './Table1'  // Importing the Table1 component from a local file

// Functional component named Table
const Table = () => {
  return (
    <>
      {/* Main container for the table section */}
      <main className="table w-[90vw] bg-white text-black mx-auto h-auto mb-10 rounded-xl shadow-xl border-2 border-gray-100">
        
        {/* Header section of the table */}
        <div className='header p-3 w-full bg-slate-200 rounded-t-lg text-gray-700'>
          REPORTS SUMMARY
        </div>
        
        {/* Container for the reports sections */}
        <div className="reports md:flex flex-wrap w-[85%] md:w-[95%]">
          {/* Individual report summaries */}
          <Reports className='cursor-pointer hover:text-blue-600 hover:underline' title="Most Recent" para="Reports"/>
          <Reports className='cursor-pointer hover:text-blue-600 hover:underline' title="Unsubmitted Reports" para="1 Report"/>
          <Reports className='cursor-pointer hover:text-blue-600 hover:underline' title="Awaiting Approval" para="0 Reports"/>
          <Reports className='cursor-pointer hover:text-blue-600 hover:underline' title="Awaiting Reimbursement" para="1 Report (Rs.200.00)"/>
        </div>
        
        {/* Divider line */}
        <div className='w-[95%] h-[1px] bg-gray-300 mx-auto'></div>
        
        {/* Table1 component rendering */}
        <Table1/>
      </main>
    </>
  )
}

export default Table  // Exporting the Table component for use in other parts of the application
