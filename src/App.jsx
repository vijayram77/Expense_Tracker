import React from 'react'
import Landingpage from './components/Landingpage'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './components/Functional-components/LoginSignup'
import Sidebar from './components/Functional-components/Sidebar'
import D_board from './components/Functional-components/D_board'
import Budgets from './components/Functional-components/Budgets'
import Expenses from './components/Functional-components/Expenses'
import AbsoluteSidebar from './components/Functional-components/AbsoluteSidebar'

const App = () => {
  return (
    <div className='w-full h-screen bg-[#101010]'>
      
      <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/Home' element={<Landingpage />} />
        <Route path="/Main/Dashboard" element={<D_board />} />
        <Route path="/Main/Budgets" element={<div  className='w-[100vw] bg-[#000000] flex overflow-x-hidden relative'><Sidebar  state="Budgets" /><Budgets /><AbsoluteSidebar tate="Budgets"/></div>} />
        <Route path="/Main/Expenses" element={<div  className='w-[100vw] bg-[#000000] flex overflow-x-hidden relative'><Sidebar  state="Expenses" /><Expenses /><AbsoluteSidebar state="Expenses"/></div>} />
        {/* <Route path="/Main/Reminders" element={<Reminders />} /> */}
      </Routes>
    </div>
  )
}

export default App
