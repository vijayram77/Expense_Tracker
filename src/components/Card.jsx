import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[280px] h-[260px] bg-[#212121] rounded-2xl px-6 py-3 flex flex-col justify-evenly'>
      <h1 className='text-zinc-300 text-xl font-semibold'>{props.title}</h1>
      <div className='flex justify-between items-center'>
      <span className='text-zinc-400 '>{props.transaction1} </span>
      <span className={`text-[16px] ${props.firstcolor == "green" ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10" } rounded-3xl px-2 font-semibold`}>${props.transaction1money}</span>
      </div>
      <div className='flex justify-between items-center'>
      <p className='text-zinc-400 '>{props.transaction2}</p>
      <h1 className={`text-[16px] font-semibold ${props.secondcolor == "green" ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10" } rounded-3xl px-2 py-1`}>${props.transaction2money}</h1>
      </div>
      <div className='flex justify-between items-center'>
      <p className='text-zinc-400 '>{props.transaction3}</p>
      <h1 className={`text-[16px] font-semibold ${props.thirdcolor == "green" ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10" } rounded-3xl px-2 py-1`}>${props.transaction3money}</h1>
      </div>
    </div>
  )
}

export default Card
