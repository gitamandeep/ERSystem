import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import { colors } from '../theame/color'
import { fonts } from '../theame/fontcolor'
import { useRef } from 'react'


const Login = () => {
  const [login, setLogin] = useState({})
  const ref = useRef()
  const passwordref = useRef()

  const naviget = useNavigate()

  const showPassword = () => {
    passwordref.current.type = "text"
    if(ref.current.src.includes ("closeeyes.svg")){
      ref.current.src = "eyes.svg"
      passwordref.current.type = "text"
  }
  else{
    ref.current.src = "closeeyes.svg"
    passwordref.current.type = "password"
  }
  }
  

  const handlechange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validata()) { // Assuming validate() is a function that checks the login inputs
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: login.username,
            password: login.password,
          })
        });

        if (!response.ok) {
          throw new Error('Login failed. Username or password is incorrect.');
        }

        const data = await response.json();
        const token = data.jwtToken;
        console.log(data);
      
        localStorage.setItem('token', token);

        localStorage.setItem('user', JSON.stringify(login));
        naviget('/'); // Redirect to home page on successful login

      } catch (error) {
        console.error('Error:', error);
       
        alert("Login failed. Username or password is incorrect.")
        // Handle error (e.g., show error message to user)
        // You can prevent navigation here if needed
      }
    }
  }

  const validata = () => {
    let result = true;
    if (login.username === '' || login.username === null) {
      result = false;
      alert("Enter User name")
    }
    if (login.password === '' || login.password === null) {
      result = false;
      alert("Enter password")
    }
    return result;
  }



  return (
    <>
<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <form onSubmit={handleLogin}>
        <div className={`form bg-white rounded-xl lg:rounded-e-xl text-${fonts.fontcolor} w-[85%] lg:w-[38%] h-[582px] p-4 lg:p-14 mt-3 lg:ml-[643px] m-auto`}>
          <div className="logo ml-[42%] lg:ml-[180px] ">
            <img width={50} height={50} src="Screenshot_2024-07-02_202426-removebg-preview.png" alt="" />
          </div>
          <div className='user md:w-[42%] w-[55%] mb-7 m-auto lg:ml-[31%] lg:mb-[23px]'>
            <h1 className='text-xl font-custom font-semibold pt-1 '>Welcome Back !</h1>
            <p className='font-custom font-extralight text-sm'>Please enter your detail</p>
          </div>

          <div className='lg:mb-4 mb-7'>
            <label htmlFor="phone" className={`block font-custom mb-2 text-sm font-bold text-${fonts.labelcolor} dark:text-white`}>Phone number</label>
            <input maxLength={10} type="tel" id="phone" name='username' value={login.username ? login.username : ""} onChange={handlechange} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9876543210" required />
          </div>
          <div className="mb-6 relative">
            <div className='pass'>
            <label htmlFor="password" className={`block mb-2 text-sm font-custom font-bold text-${fonts.labelcolor} dark:text-${fonts.whitecolor}`}>Password</label>
            <input ref={passwordref} type="password" id="password" name='password' value={login.password ? login.password : ""} onChange={handlechange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div>
            <div onClick={showPassword} className="svg absolute -mt-[29px] cursor-pointer ml-[90%] ">
              <img ref={ref} src="closeeyes.svg" alt="" />
            </div>
          </div>

          <div className="forget font-custom font-light text-sm cursor-pointer hover:font-bold lg:ml-[65%]">
            Forget Password?
          </div>
          <button type="submit" className={`login text-white bg-[#27DEBF] hover:bg-[#1a917d] focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium sm:w-auto text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800`}>Login &nbsp; &rarr;</button>
          <div className='font-custom text-xs ml-4 pr-8 font-medium'>
            <span>By creating an account,you agree to our</span> <NavLink to="#" className="link text-blue-600 hover:underline dark:text-blue-500">Terms of Service</NavLink> <span>and</span> <NavLink to="#" className="link text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</NavLink>
          </div>
        </div>
        <div className={`box hidden lg:block bg-[#27DEBF] rounded-s-xl w-[38%] h-[96%] absolute mt-3 ml-[134px] top-0`}>
          <div className={`absolute rounded-xl bg-[#455A64] ml-[50px] top-[47px]`}>
            <div className={`box1 text-${fonts.whitecolor} w-[400px] h-[500px] relative`}>
              <img className='img rounded-full absolute ml-[60px] top-[0px] ' width={250} src="Desktop - 1.png" alt="" />
              <h3 className='ml-[30px] mt-[390px] font-custom text-xl font-semibold'>Seamless work expreience</h3>
              <p className='ml-[30px] font-custom text-sm'>Everything you need in an easily customizable dashboard</p>
            </div>
          </div>
        </div>
      </form>

    </>
  )
}

export default Login
