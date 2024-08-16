import React from 'react'
import { NavLink } from 'react-router-dom'

const Proaside = () => {
  return (
   
    <aside className="w-1/4 bg-gray-200 p-6 rounded-s-3xl">
    <h2 className="text-2xl font-custom font-semibold mb-6">User profile management</h2>
    <nav>
      <ul className='font-custom'>
      <NavLink to="/profile" className={({ isActive }) => isActive ? "font-bold" : ""}>
        <li className="mb-3">
          <div className='flex items-center font-medium hover:font-semibold hover:bg-gray-300 p-2 rounded-full'>
            <lord-icon
              src="https://cdn.lordicon.com/hrjifpbq.json"
              trigger="hover"
              style={{ width: '24px', height: '32px' }} // Set width and height
            ></lord-icon>
            <button className="text-black pr-8 pl-2">
              Personal Info
            </button>
          </div>
        </li>
        </NavLink>
            <NavLink to="/changepass" className={({ isActive }) => isActive ? "font-bold" : ""}>  
        <li className="mb-3">
          <div className='flex items-center font-medium hover:font-semibold hover:bg-gray-300 p-2 rounded-full'>
            <lord-icon
              src="https://cdn.lordicon.com/xtzvywzp.json"
              trigger="hover"
              style={{ width: '24px', height: '32px' }} // Set width and height
            ></lord-icon>
            <button className="text-black pr-8 pl-2">
              Change Password
            </button>
          </div>
        </li>
            </NavLink>
      </ul>
    </nav>
  </aside>
  )
}

export default Proaside
