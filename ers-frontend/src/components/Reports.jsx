import React from 'react'
import { useRef } from 'react'

const Reports = (props) => {
 const ref = useRef();
  
 const handleclick = () => {
   ref.current.style.color = 'blue'
 }
 

  return (
    <>
      <div onClick={handleclick} ref={ref} className="cursor-pointer report ml-7 m-4">
       <h1 className='font-custom text-[16px] font-semibold'>{props.title}</h1>
       <p className='font-custom text-xl font-medium'>{props.para}</p>
      </div>
    </>
  )
}

export default Reports
