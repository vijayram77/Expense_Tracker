import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap, { Power2, Power4 } from 'gsap'
import Createbudget from './Createbudget'
import Balancecard from './Balancecard'
import Card from './Card'
import Barchart from './Barchart'

const Herosection = () => {
  const tl = gsap.timeline()


  useGSAP(()=>{
    tl.from(".animh1",{
      y:100 ,
      duration: 1 ,
      delay : 0.1 ,
      stagger : 0.3 ,
      ease : Power4
    })
    tl.from(".box",{
      x : 2000 ,
      ease : Power2 ,
      duration : 1 ,
      stagger : 0.2
    })
    tl.from(".getstarted",{
      scale : 0 ,
      duration : 1.5 ,
      ease : "elastic.inOut(1,0.3)"
    })
  })

  return (
    <div className='w-full bg-[#0B0B0B] flex flex-col items-center justify-center py-6 px-2 gap-6 '>
      <div className=' overflow-hidden '>
      <h1 className='text-[4vmax] animh1 font-semibold text-white leading-none'>Control Your Money</h1>
      </div>
      <div className=' overflow-hidden'>
      <h1 className='text-[4vmax] animh1 font-semibold text-purple-400 leading-none'>Manage Your Expenses</h1>
      </div>
      <div className=' overflow-hidden'>
      <h1 className='text-zinc-300 animh1 capitalize px-8 text-center'>start creating your budget and start saving your money</h1>
      </div>
      <a href="/Main/Dashboard" className='px-4 py-2 getstarted bg-purple-300 font-semibold rounded-full text-black'>Get Started</a>
      <div className='w-full flex gap-2 flex-wrap justify-center'>
      <div className="box">
        <Barchart />
      </div>
      <div className="box">
      <Card title="Shopping" firstcolor="green" secondcolor="red" thirdcolor="green" transaction1money="2600" transaction1="Total Budget" transaction2money="1000" transaction2="Total Spent" transaction3money="1600" transaction3="Remaining Budget" />
      </div>
      <div className="box">
      {<Balancecard />}
      </div>
      <div className="box">
      {<Createbudget />}
      </div>
      <div className="box">
      <Card title="Tranaction History" firstcolor="green" secondcolor="red" thirdcolor="red" transaction1money="2600" transaction1="Robert Downey Jr" transaction2money="1000" transaction2="Karl Urban" transaction3money="1600" transaction3="Peter Parker" />
      </div>
      </div>
    </div>
  )
}

export default Herosection
