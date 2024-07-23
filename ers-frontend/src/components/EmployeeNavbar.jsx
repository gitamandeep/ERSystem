import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const EmployeeNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        const token = data.token;
        localStorage.removeItem('token');
        navigate('/login');
    };
  return (
    <>
    <div className="box w-full bg-white h-[68px] md:h-[78px] top-0 border-5 border-y-2 absolute">
            </div>
            <nav className='bg-[#ffffff] mb-7 w-full relative shadow-md bg-opacity-50 border-2 border-x-6 text-black flex items-center justify-between'>
                <div className="logo flex items-center gap-2 p-3">
                    <span className='hidden md:block m-2'>
                    <lord-icon 
                        src="https://cdn.lordicon.com/depeqmsz.json"
                        trigger="hover">
                    </lord-icon>
                    </span>
                    <h1 className='text-black text-2xl md:text-2xl m-2 md:m-0 font-custom hidden md:block font-bold'>&lt;ERSystem/&gt;</h1>
                    <h1 className='text-black text-2xl md:text-2xl md:hidden block m-0 md:m-0 font-custom font-bold'>&lt;ERS/&gt;</h1>
                </div>
                <div>
                    <ul className='text-black flex md:gap-7 gap-4 md:text-xl text-lg font-semibold m-0 md:m-4 font-custom'>
                        <NavLink to="#"><li className='cursor-pointer hover:text-blue-700'>Employes</li></NavLink>
                        <NavLink to="#"><li className='cursor-pointer hover:text-blue-700'>Profile</li></NavLink>
                    </ul>
                </div>
                <div className="btn gap-[10px]">
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
                </div>
            </nav>
            </>
  )
}

export default EmployeeNavbar
