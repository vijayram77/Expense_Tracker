import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap, { Power3 } from 'gsap'

const Header = () => {
  useGSAP(()=>{
    gsap.from(".header",{
      y: -100 ,
      ease : Power3 ,
      duration : 1
    })
  })
  return (
    <div className='header w-full px-[2.7vw] py-8 flex justify-between items-center text-white bg-[#0B0B0B]'>
      <div>
        <h1 className='text-white ml-1 text-[20px] font-bold tracking-tighter'>EX-Tracker</h1>
      </div>
      <div className='flex gap-1'>
        <a href="/Main/Dashboard" className='px-4 py-2 font-semibold rounded-full text-[14px] tracking-tight dashboard'>Dashboard</a>
        <a href="/Main/Dashboard" className='px-4 py-2 bg-zinc-100 font-semibold text-[14px] tracking-tight rounded-full text-zinc-900'>Get Started</a>
      </div>
    </div>
  )
}

export default Header
