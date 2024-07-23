import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  // Function to handle logout click
  const handleClick = async () => {
    // Making a POST request to the dummy login endpoint
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    
    // Parsing the response to JSON
    const data = await response.json();
    
    // Assuming the token is included in the response
    const token = data.token;
    
    // Removing the token from local storage (though this example does not store it in the first place)
    localStorage.removeItem('token', token);
    
    // Navigate to the login page
    navigate('/login');
  }

  return (
    <>
      {/* Background container for the navigation bar */}
      <div className="box w-full bg-white h-[68px] md:h-[78px] top-0 border-5 border-y-2 absolute">
      </div>
      
      {/* Navigation bar */}
      <nav className='bg-[#ffffff] mb-7 w-full relative shadow-md bg-opacity-50 border-2 border-x-6 text-black flex items-center justify-between'>
        
        {/* Logo section */}
        <div className="logo flex items-center gap-2 p-3">
          {/* Icon displayed on hover */}
          <span className='hidden md:block m-2'>
            <lord-icon 
              src="https://cdn.lordicon.com/depeqmsz.json"
              trigger="hover">
            </lord-icon>
          </span>
          {/* Full logo text for larger screens */}
          <h1 className='text-black text-2xl md:text-2xl m-2 md:m-0 font-custom hidden md:block font-bold'>&lt;ERSystem/&gt;</h1>
          {/* Shortened logo text for smaller screens */}
          <h1 className='text-black text-2xl md:text-2xl md:hidden block m-0 md:m-0 font-custom font-bold'>&lt;ERS/&gt;</h1>
        </div>
        
        {/* Navigation links */}
        <div>
          <ul className='text-black flex md:gap-7 gap-4 md:text-xl text-xs font-semibold m-0 md:m-4 font-custom'>
            <NavLink
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
              to="/reimbursement"
            >
              <li className='cursor-pointer hover:text-blue-700'>Reimbursement</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
              to="/employe"
            >
              <li className='cursor-pointer hover:text-blue-700'>Employees</li>
            </NavLink>
          </ul>
        </div>
        
        {/* Logout button */}
        <div className="btn gap-[10px]">
          <button 
            type="button" 
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
