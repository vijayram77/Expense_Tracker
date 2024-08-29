import React from 'react'

const Balancecard = () => {
  return (
    <div className='w-[280px] h-[260px] bg-[#212121] rounded-2xl px-6 py-12 flex flex-col justify-between gap-2 text-zinc-400'>
      <h1>Available Balance  </h1>
      <h1 className='text-white text-5xl'>$9600</h1>
      <div className='flex justify-between px-2'>
      <button className='px-4 py-2 rounded-3xl font-semibold'>History</button>
      <button className='px-4 py-2 rounded-3xl bg-zinc-100 text-black font-semibold'>Borrow</button>
      </div>
    </div>
  )
}

export default Balancecard
