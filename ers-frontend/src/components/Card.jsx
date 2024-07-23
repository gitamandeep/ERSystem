import React from 'react'
import { NavLink } from 'react-router-dom'

// Define a functional component named "Card"
const Card = (props) => {
    return (
        <>
            {/* Card section with dynamic classes and props */}
            <section className={`card mb-10 lg:w-[45%] w-[85%] mx-auto text-black border-2 border-gray-100 shadow-lg rounded-lg bg-white min-h-[260px] ${props.className}`}>
                {/* Card heading */}
                <h1 className={`m-2 text-xl font-custom font-semibold ${props.className}`}>{props.heading}</h1>
                <hr />
                {/* Conditional rendering based on isReadMore prop */}
                {props.isReadMore ? (
                    <div className='flex justify-center flex-col items-center h-52'>
                        {/* Lordicon element for the icon */}
                        <lord-icon
                            src={props.iconSrc}
                            trigger="hover"
                            style={{ width: '80px', height: '80px'}}
                        ></lord-icon>
                        {/* Subheading with hover effects */}
                        <NavLink to="/reimbursement"><h1 className='font-custom font-semibold text-2xl hover:font-bold hover:text-blue-700 text-blue-900 hover:uppercase cursor-pointer'>
                            {props.subHeading}
                        </h1></NavLink>
                    </div>
                ) : (
                    <>
                        {/* Section for Pending Approval */}
                        <div className='flex items-start lg:mt-6 mt-4 p-1 lg:p-2 lg:gap-1 gap-[22px]'>
                            <div className="logo lg:w-[35px] w-[15px]">
                                <lord-icon
                                    src="https://cdn.lordicon.com/lomfljuq.json"
                                    trigger="hover">
                                </lord-icon>
                            </div>
                            <div className="approve font-custom text-lg font-light">
                                Pending Approval
                            </div>
                            <div className='font-semibold text-xl ml-auto mr-3 md:mr-6'>0</div>
                        </div>
                        <div className='w-[95%] h-[1px] bg-gray-300 mx-auto'></div>
                        {/* Section for Unreported Expenses */}
                        <div className='flex items-start lg:mt-6 p-1 lg:p-2 mt-2 lg:gap-1 gap-[20px]'>
                            <div className="logo lg:w-[35px] w-[15px]">
                                <lord-icon
                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                    trigger="hover">
                                </lord-icon>
                            </div>
                            <div className="approve font-custom text-lg font-light">
                                Unreported Expenses
                            </div>
                            <div className='font-semibold text-xl ml-auto mr-3 md:mr-6'>0</div>
                        </div>
                        {/* Section for Unreported Advances */}
                        <div className='flex items-start mt-1 p-1 lg:p-2 lg:gap-1 gap-[20px]'>
                            <div className="logo lg:w-[35px] w-[15px]">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gjjvytyq.json"
                                    trigger="hover">
                                </lord-icon>
                            </div>
                            <div className="approve font-custom text-lg font-light">
                                Unreported Advances
                            </div>
                            <div className='font-semibold text-xl ml-auto mr-3 md:mr-6'>Rs.0.00</div>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}

// Export the Card component for use in other parts of the application
export default Card
