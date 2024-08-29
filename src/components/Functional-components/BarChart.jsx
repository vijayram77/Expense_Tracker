import React, { useState , useEffect } from 'react'
import { AreaChart , Area, Tooltip , YAxis , XAxis , ResponsiveContainer , CartesianGrid   } from 'recharts';

const BarChart = () => {
  const [Data, setData] = useState([])


        useEffect(() => {
          const username = localStorage.getItem(`Current`)
          const storedData = localStorage.getItem(`BudgetData${username}`)
    if (storedData) {
      try {
        var parsedData = JSON.parse(storedData)
        if (Array.isArray(parsedData)) {
          
          // console.log(parsedData);
          var totalbudget = 0
          var totalspent = 0
          for(let i =0 ; i< parsedData.length ; i++){
            // console.log(parsedData[i]);
            var budget = Number(parsedData[i].Budget)
            parsedData[i].Budget = budget
            // console.log(budget, typeof budget);
            totalbudget+= budget
            var spent = Number(parsedData[i].Spent)
            parsedData[i].Spent = spent
            // console.log(spent, typeof spent);
            totalspent+= spent
            
            
          }
          setData(parsedData)
          // console.log(totalbudget,totalspent);
          
          
        } else {
          // console.error("Parsed data is not an array:", parsedData)
          setData([])
        }
      } catch (error) {
        // console.error("Error parsing stored data:", error)
        setData([])
      }
    }
  }, [])
      
  return (
    <div className='w-[70vw] h-[50vh] bg-[#101010] relative rounded-2xl py-4 overflow-hidden'>
        <h1 className='text-zinc-300 text-2xl mx-6 my-2 font-semibold'>Dashboard</h1>
      <ResponsiveContainer width="95%" height="90%" >
      <AreaChart width={600} height={280} data={Data}>
      <CartesianGrid />
      <Area dataKey="Budget" fill='#C084FC' stroke='#C084FC'/>
      <Area dataKey="Spent" fill='#7C3AED' stroke='##7C3AED'/>
      <YAxis dataKey="Spent" />
      <XAxis dataKey="Title" />
      {<Tooltip stroke="white" fill="#121212"/>}
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart
