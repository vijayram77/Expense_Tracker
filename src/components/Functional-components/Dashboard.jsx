import React , { useEffect, useState } from 'react'
import Balance from './Balance'
import BudgetSpent from './BudgetSpent'
import ExDashboard from './ExDashboard'
import BarChart from './BarChart'





const Dashboard = () => {
  const username = localStorage.getItem(`Current`)

  const [DashboardToggle, setDashboardToggle] = useState(false)
  useEffect(() => {
    const storedData = localStorage.getItem(`BudgetData${username}`)
    if (storedData) {
      try {
        var parsedData = JSON.parse(storedData)
        if (Array.isArray(parsedData)) {
          parsedData.length >0 ? setDashboardToggle(true) : null
        } else {
          // console.error("Parsed data is not an array:", parsedData)
        }
      } catch (error) {
        // console.error("Error parsing stored data:", error)
      }
    }
  }, [])
  return (
    <div className='Dashboard relative w-full  min-h-screen bg-[#000000] px-6 py-12'>
      <h1 className='font-semibold text-3xl text-white py-2'>My DashBoard</h1>
      <div>
        <h1 className='Heading hidden text-zinc-300 text-[16px] font-bold tracking-tighter'>Welcome back {username} !</h1>
        </div>
      <div className='flex gap-6 flex-wrap items-start'>
      {DashboardToggle ? <>{<Balance/>}
      {<BudgetSpent />}
      <ExDashboard />
      {<BarChart />}</> : <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 capitalize text-zinc-200 font-medium'>Dashboard Only Displayed When There exist any Budget and Expenses</h1>}

      </div>
      
    </div>
  )
}

export default Dashboard
