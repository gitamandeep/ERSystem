import React from 'react'
import { NavLink } from 'react-router-dom';

const EmployeeCard = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-md p-6 max-w-7xl mb-10 mx-auto">
        <h2 className="text-2xl text-black font-bold mb-4">Quick Add</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center rounded-md bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="logo lg:w-[35px] w-[15px]">
              <lord-icon
                src="https://cdn.lordicon.com/rmkahxvq.json"
                trigger="hover">
              </lord-icon>
            </div>
            <p className="mt-2 text-center text-gray-700">Drag Receipts</p>
            <a href="#" className="text-blue-500 hover:underline mt-2">or click here to attach</a>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="logo lg:w-[35px] w-[15px]">
              <lord-icon
                src="https://cdn.lordicon.com/depeqmsz.json"
                trigger="hover">
              </lord-icon>
            </div>
             <NavLink to="/CreateExpense" className="mt-4 hover:font-semibold hover:text-blue-700 text-center text-gray-700">Create Expense</NavLink>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="logo lg:w-[35px] w-[15px]">
              <lord-icon
                src="https://cdn.lordicon.com/vdjwmfqs.json"
                trigger="hover">
              </lord-icon>
            </div>
            <p className="mt-4 text-center text-gray-700">Create Report</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeCard
