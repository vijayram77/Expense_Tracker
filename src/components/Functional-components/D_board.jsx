import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import AbsoluteSidebar from './AbsoluteSidebar'


const D_board = () => {



  return (
    <div  className='w-[100vw] z-9999 bg-[#000000] flex overflow-x-hidden relative'>
        <Sidebar state="Dashboard" />
        <Dashboard />
        <AbsoluteSidebar state="Dashboard" />
    </div>
  )
}

export default D_board
