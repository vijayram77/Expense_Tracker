import React from 'react'
import { AreaChart,Area } from 'recharts';

const Barchart = () => {
    const dataArray = [
        {
          name: "Alice",
          product1: 100,
          product2: 20
        },
        {
          name: "Bob",
          product1: 300,
          product2: 40
        },
        {
          name: "Charlie",
          product1: 200,
          product2: 60
        },
        {
          name: "David",
          product1: 700,
          product2: 80
        },
        {
          name: "Eve",
          product1: 300,
          product2: 100
        }
      ];
      
  return (
    <div className='bg-[#212121] relative rounded-2xl py-4 overflow-hidden'>
        <h1 className='text-zinc-300 text-2xl mx-6 my-2 absolute font-semibold'>Dashboard</h1>
      <AreaChart width={280} height={220} data={dataArray}>
      <Area dataKey="product1" fill='#C084FC' stroke='#C084FC'/>
      </AreaChart>
    </div>
  )
}

export default Barchart
