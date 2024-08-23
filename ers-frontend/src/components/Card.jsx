import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// Define a functional component named "Card"
const Card = (props) => {
    // State variables to store fetched numbers
    const [pendingApprovals, setPendingApprovals] = useState(0);
    // const [unreportedExpenses, setUnreportedExpenses] = useState(0);
    // const [unreportedAdvances, setUnreportedAdvances] = useState(0.00);

    useEffect(() => {
        // Assuming you store the token in localStorage
        const token = localStorage.getItem('token');

        // Configure axios with the token
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        // Function to fetch pending approvals
        const fetchPendingApprovals = async () => {
            try {
                const response = await axios.get('https://972d-2401-4900-1c2b-11c5-f185-9a92-1db3-fe21.ngrok-free.app/api/v1/admin/pending-reimbursement-count', axiosConfig);
                setPendingApprovals(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching pending approvals:', error);
            }
        };

        // // Function to fetch unreported expenses
        // const fetchUnreportedExpenses = async () => {
        //     try {
        //         const response = await axios.get('/api/unreported-expenses', axiosConfig);
        //         setUnreportedExpenses(response.data);
        //     } catch (error) {
        //         console.error('Error fetching unreported expenses:', error);
        //     }
        // };

        // // Function to fetch unreported advances
        // const fetchUnreportedAdvances = async () => {
        //     try {
        //         const response = await axios.get('/api/unreported-advances', axiosConfig);
        //         setUnreportedAdvances(response.data);
        //     } catch (error) {
        //         console.error('Error fetching unreported advances:', error);
        //     }
        // };

        // Call all fetch functions
        fetchPendingApprovals();
        // fetchUnreportedExpenses();
        // fetchUnreportedAdvances();
    }, []);

    return (
        <>
        <div className="absolute top-0 z-[-2] h-[120vh] w-[98vw] bg-gray-200 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
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
                                {props.main}
                            </div>
                            <div className='font-semibold text-xl ml-auto mr-3 md:mr-6'>{pendingApprovals}</div>
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
                                {props.Expense}
                            </div>
                            {/* <div className='font-semibold text-xl ml-auto mr-3 md:mr-6'>{unreportedExpenses}</div> */}
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
                                {props.advances}
                            </div>
                            {/* <div className='font-semibold text-xl ml-auto mr-3 md:mr-6'>Rs.{unreportedAdvances.toFixed(2)}</div> */}
                        </div>
                    </>
                )}
            </section>
        </>
    )
}

// Export the Card component for use in other parts of the application
export default Card;
