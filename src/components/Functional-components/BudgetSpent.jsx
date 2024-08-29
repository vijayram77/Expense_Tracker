import React, { useEffect, useState } from 'react';

const BudgetSpent = () => {
  const [TotalBudget, setTotalBudget] = useState(0);
  const [TotalSpent, setTotalSpent] = useState(0);
  const [Data, setData] = useState([])

  useEffect(() => {
    const username = localStorage.getItem(`Current`)
    const storedData = localStorage.getItem(`BudgetData${username}`)
    if (storedData) {
      try {
        var parsedData = JSON.parse(storedData)
        if (Array.isArray(parsedData)) {
          setData(parsedData)
          // console.log(parsedData);
          var totalbudget = 0
          var totalspent = 0
          for(let i =0 ; i< parsedData.length ; i++){
            // console.log(parsedData[i]);
            var budget = Number(parsedData[i].Budget)
            // console.log(budget, typeof budget);
            totalbudget+= budget
            var spent = Number(parsedData[i].Spent)
            // console.log(spent, typeof spent);
            totalspent+= spent
            
            
          }
          // console.log(totalbudget,totalspent);
          setTotalBudget(totalbudget)
          setTotalSpent(totalspent)
          
          
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
    <div className='BudgetSpent w-[60%] bg-[#101010] rounded-2xl px-6 py-6 flex flex-col gap-6 text-zinc-400 h-[260px] '>
      <h1 className='text-zinc-100 font-semibold'>Total Budgets</h1>
      <div className="flex justify-between px-4 items-star">
        <p>Total Budget</p>
        <h1 className='text-white text-2xl font-semibold'>${TotalBudget}</h1>
      </div>
      <div className="flex justify-between px-4 items-star">
        <p>Total Spent</p>
        <h1 className='text-white text-2xl font-semibold'>${TotalSpent}</h1>
      </div>
      <div className="flex justify-between px-4 items-star">
        <p>Remaining Budget</p>
        <h1 className='text-white text-2xl font-semibold'>${TotalBudget - TotalSpent}</h1>
      </div>
    </div>
  );
};

export default BudgetSpent;
