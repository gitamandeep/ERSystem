import React from 'react'

// Define the Reports component
const Reports = (props) => {
  return (
    <>
      {/* Container for the report item with dynamic classes */}
      <div className={`cursor-pointer report ml-7 m-4 ${props.className}`}>
        {/* Title of the report, using dynamic class and props for content */}
        <h1 className='font-custom text-[16px] font-semibold'>{props.title}</h1>
        {/* Paragraph of the report, using dynamic class and props for content */}
        <p className='font-custom text-xl font-medium'>{props.para}</p>
      </div>
    </>
  );
}

export default Reports;
