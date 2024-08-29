import React, { useState } from 'react'
import { RiDashboardLine ,RiLoginBoxLine,RiLogoutBoxLine,RiMoneyDollarBoxLine, RiNotificationLine, RiWallet2Line} from '@remixicon/react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({state}) => {
  const username = localStorage.getItem("Current")
  const Navigate = useNavigate()
  const [MenuActive, setMenuActive] = useState(state)
  return (
    <div className='sidebar w-[320px] min-h-screen bg-[#101010]'>
      <div  className='w-full px-[2.5vw] py-8 flex-col flex justify-between items-start text-white cursor-not-allowed '>
        <div>
        <h1 className='text-white text-[20px] font-bold tracking-tighter'>EX-Tracker</h1>
        </div>
        <div>
        <h1 className='text-zinc-300 text-[16px] font-bold tracking-tighter'>Welcome back {username} !</h1>
        </div>
      
      </div>
        <div className=''>
            <div onClick={()=>{Navigate("/Main/DashBoard") ; setMenuActive("Dashboard")}} className={ `sidebardiv  px-12  flex items-center gap-4  cursor-pointer ${MenuActive == "Dashboard" ? "bg-[#303030]" : "" }`}>
            <RiDashboardLine
            size={20}
            color="white" /><p className='text-zinc-300 text-left px-2 py-2 '>Dashboard</p>
            </div>
            <div onClick={()=>{Navigate("/Main/Budgets") ; setMenuActive("Budgets")}}  className={ `sidebardiv px-12  flex items-center gap-4  cursor-pointer ${MenuActive == "Budgets" ? "bg-[#303030]" : "" }`}>
            <RiWallet2Line
            size={20}
            color="white" /><p className='text-zinc-300 text-left px-2 py-2 '>Budgets</p>
            </div>
            <div onClick={()=>{Navigate("/Main/Expenses") ; setMenuActive("Expenses")}}  className={ `sidebardiv px-12  flex items-center gap-4  cursor-pointer ${MenuActive == "Expenses" ? "bg-[#303030]" : "" }`}>
            <RiMoneyDollarBoxLine
            size={20}
            color="white" /><p className='text-zinc-300 text-left px-2 py-2 '>Expenses</p>
            </div>
            <div  className={ `sidebardiv  px-12 flex items-center gap-4 cursor-pointer `}>
            <RiLogoutBoxLine
            size={20}
            color="white" /><a href={"../"} className='text-red-300 cursor-pointer text-left px-2 py-2 '>Log out</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
