import React from 'react'

const Card = () => {
    return (
        <>
            <section className="card mb-10 lg:w-3/4 w-[85%] mx-auto text-black border-2 border-gray-100 shadow-lg rounded-lg bg-white min-h-[260px]">
                <h1 className='m-2 text-xl font-custom font-semibold'>Pending Task</h1>
                <hr />
                <div className='flex items-start lg:mt-6 lg:ml-6 mt-4 p-1 lg:gap-1 gap-[22px]'>
                    <div className="logo lg:w-[35px] w-[15px]">
                        <lord-icon
                            src="https://cdn.lordicon.com/lomfljuq.json"
                            trigger="hover">
                        </lord-icon>
                    </div>
                    <div className="approve font-custom text-lg font-light">
                        Pending Approval
                    </div>
                    <div className='font-semibold text-xl lg:ml-[75%] ml-[27%] md:ml-[59%] '>0</div>
                </div>
                <div className='w-[95%] h-[1px] bg-gray-300 mx-auto '></div>
                <div className='flex items-start lg:mt-6 lg:ml-6 p-1 lg:p-0 mt-2 lg:gap-1 gap-[20px]'>
                    <div className="logo lg:w-[35px] w-[15px]">
                        <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover">
                        </lord-icon>
                    </div>
                    <div className="approve font-custom text-lg font-light">
                        Unreported Expenses
                    </div>
                    <div className='font-semibold text-xl lg:ml-[72%] ml-[18%] md:ml-[55%]'>0</div>
                </div>
                <div className='flex items-start lg:ml-6 mt-1 p-1 lg:p-0 lg:gap-1 gap-[20px]'>
                    <div className="logo lg:w-[35px] w-[15px]">
                        <lord-icon
                            src="https://cdn.lordicon.com/gjjvytyq.json"
                            trigger="hover">
                        </lord-icon>
                    </div>
                    <div className="approve font-custom text-lg font-light">
                        Unreported Advances
                    </div>
                    <div className='font-semibold text-xl lg:ml-[67%] md:ml-[47%] ml-[1%]'>Rs.0.00</div>
                </div>
            </section>
        </>
    )
}

export default Card
