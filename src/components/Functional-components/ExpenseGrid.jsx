import React from 'react'
import { RiDeleteBin7Line } from '@remixicon/react'

const ExpenseGrid = ({data , id , onDelete}) => {
  return (

    <div className='ExGrid w-[95%] py-2 px-2 flex justify-between flex-wrap items-center rounded m-2 bg-[#101010]'>
        <div className='flex w-[70%] justify-center flex-col items-start'>
            <div className=" text-zinc-300 font-md text-[20px]  px-6 py-1">{data.name} </div>
          <div className="flex px-4">
            <h1 className=" text-zinc-500 w-fit px-1 py-1 text-[14px]"> {data.type} </h1>  
            <h1 className=" text-zinc-500 w-fit px-1 py-1 text-[14px]">{data.date}</h1>
          </div>
        </div>
      <div className='flex px-2 w-[30%] gap-1 justify-end items-center'>
        <div 
        style={{color : data.type == "credit" ? '#77DD77' : '#FF6961'}}
        className={` text-white text-2xl font-light w-fit rounded-3xl px-2  py-1 ${data.type == "credit" ? "text-green-200" : "text-red-200" } `} >{data.type == "credit" ? "" : "-" }${data.amount}</div>
        <div hii className='p-2 flex items-center justify-center'><RiDeleteBin7Line onClick={() => {onDelete(id)}}  fill='#FCA5A5' size="20px"/></div>
      </div>
    </div>

  )
}

export default ExpenseGrid
