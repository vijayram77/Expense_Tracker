import React from 'react'
import NewBudget from './NewBudget'

const Budgets = () => {
  const username = localStorage.getItem(`Current`)

  return (
    <div className='w-full min-h-screen bg-[#000000] flex flex-col gap-4  items-start justify-start px-6 py-12'>
      <h1 className='font-semibold text-3xl text-white'>My Budgets</h1>
      <div>
        <h1 className='Heading hidden text-zinc-300 text-[16px] font-bold tracking-tighter'>Welcome back {username} !</h1>
        </div>
      <NewBudget />

    </div>
  )
}

export default Budgets
