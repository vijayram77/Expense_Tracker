import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Balance = () => {
  const [TotalBudget, setTotalBudget] = useState(0);
  const navigate = useNavigate()
  const [TotalSpent, setTotalSpent] = useState(0);
  const [Data, setData] = useState([]);
  const ExpenseSum = Number(localStorage.getItem("SumExpenses"))

  useEffect(() => {
    const username = localStorage.getItem(`Current`)
    const storedData = localStorage.getItem(`BudgetData${username}`)
    if (storedData) {
      try {
        var parsedData = JSON.parse(storedData)
        if (Array.isArray(parsedData)) {
          setData(parsedData)
          // // console.log(parsedData);
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
    <div className='w-[280px] h-[260px] bg-[#101010] rounded-2xl px-6 py-6 flex flex-col justify-between relative gap-2 text-zinc-400'>
      <h1 className='text-zinc-100 font-semibold'>Available Balance</h1>
      <h1 style={{color : (TotalBudget - TotalSpent + ExpenseSum) >0 ? '#77DD77' : '#FF6961'}} className='text-white text-6xl'>${TotalBudget - TotalSpent + ExpenseSum}</h1>
      <div className='flex justify-start'>
        <button onClick={()=>{navigate("/Expenses")}} className='px-4 py-2 rounded-3xl font-semibold border border-zinc-600'>History</button>
      </div>
    </div>
  );
};

export default Balance;
