import React from 'react'
import Reports from './Reports'
import Table1 from './Table1'

const Table = () => {
  return (
    <>
      <main className="table w-[90vw] bg-white text-black mx-auto h-auto mb-10 rounded-xl shadow-xl border-2 border-gray-100">
        <div className='header p-3 w-full bg-slate-200 rounded-t-lg text-gray-700'>REPORTS SUMMERY</div>
        <div className="reports flex">
          <Reports title="Most Recent" para="Reports"/>
          <Reports title="Unsubmitted Reports" para="1 Reports"/>
          <Reports title="Awaiting Approval" para="0 Reports"/>
          <Reports title="Awaiting Reimbursement" para="1 Reports (Rs.200.00)"/>
        </div>
        <div className='w-[95%] h-[1px] bg-gray-300 mx-auto '></div>
        <Table1/>
      </main>
    </>
  )
}

export default Table
