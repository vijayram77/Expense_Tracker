import React, { useEffect, useState } from 'react'

const ExDashboard = () => {
    const username = localStorage.getItem(`Current`)
    const storedData = localStorage.getItem(`ExpenseData${username}`)
    const [Expenses, setExpenses] = useState([])
    const [totalSpent, setTotalSpent] = useState(0)

    useEffect(() => {
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData)
                if (Array.isArray(parsedData)) {
                    setExpenses(parsedData)
                    var sum = 0
                    parsedData.map((d) => {
                        if(d.type=="credit"){
                            sum+= Number(d.amount)
                        }
                        else{
                            sum-= Number(d.amount)
                        }
                    })
                    
                    setTotalSpent(sum)
                    localStorage.setItem("SumExpenses", sum)
                    // console.log(totalSpent , typeof totalSpent);
                    
                } else {
                    // console.error("Parsed data is not an array:", parsedData)
                }
            } catch (error) {
                // console.error("Error parsing stored data:", error)
            }
        }
    }, [storedData])

    return (
        <div className='BudgetSpent w-[60%] bg-[#101010] rounded-2xl px-6 py-6 flex flex-col gap-6 text-zinc-400  '>
            <h1 className='text-zinc-100 font-semibold'>Total Expenses</h1>
                
                <h1 style={{color : totalSpent > 0 ? '#77DD77' : '#FF6961'}} className={`text-white text-4xl`} >${totalSpent}</h1>
        </div>
    )
}

export default ExDashboard
