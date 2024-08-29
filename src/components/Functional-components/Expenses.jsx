import React, { useEffect, useState } from 'react'
import ExpenseGrid from './ExpenseGrid'
import { RiAddLine, RiCalendarLine } from '@remixicon/react'


const Expenses = () => {

  const username = localStorage.getItem(`Current`)

  const [Expenses, setExpenses] = useState([])
  const [Add, setAdd] = useState(false)
  const [name, setname] = useState("")
  const [type, setType] = useState("credit")
  const [date, setDate] = useState("")
  const [amount, setAmount] = useState(null)

  const Name = (e) => {
    setname(e.target.value)
  }

  const Type = (e) => {
    setType(e.target.value)
  }

  const Date = (date) => {
    setDate(date.target.value)
  }

  const Amount = (e) => {
    setAmount(e.target.value)
  }

  const AddNewExpense = () => {
    if (name !== "" && type !== "" && date !== "" && amount !== 0) {
      const Ex = [{ name, type, date, amount }, ...Expenses]
      setExpenses(Ex)
      setAdd(!Add)
      setname("")
      setType("credit")
      setDate("")
      setAmount(null)
      localStorage.setItem(`ExpenseData${username}`, JSON.stringify(Ex))
    } else {
      alert("Please Enter Something")
    }
  }

  const DeleteExpense = (i) => {
    const Ex = [...Expenses]
    Ex.splice(i,1)
    setExpenses(Ex)
    localStorage.setItem(`ExpenseData${username}`, JSON.stringify(Ex))
  }

  const AddFunction = () => {
    setAdd(!Add)
  }

  useEffect(() => {
    const storedData = localStorage.getItem(`ExpenseData${username}`)
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData)
        if (parsedData) {
          setExpenses(parsedData)
          // console.log(parsedData);
        } else {
          // console.error("Parsed data is not an array:", parsedData)
          setExpenses([])
        }
      } catch (error) {
        // console.error("Error parsing stored data:", error)
        setExpenses([])
      }
    }
  }, [])

  return (
    <div className='min-h-screen bg-[#000000] flex gap-6 flex-col flex-wrap items-start px-4 py-12 Ex w-full'>
      <div className="flex w-full justify-start gap-6 items-center">
        <h1 className='font-semibold text-3xl text-white'>My Expenses</h1>
        <div className="flex gap-2 items-center justify-start w-[fit-content]">
          <div onClick={AddFunction} className='p-2 cursor-pointer'>

              <RiAddLine size="24px" color="white" />


          </div>


        </div>
      </div>

      <div className='h-[80vh] w-full grid-expenses overflow-y-auto'>
          {/* Add inputs */}
          {Add ? (
          <div className='w-full h-screen flex flex-col justify-center items-center absolute left-0 top-0 z-[9999] bg-[#000000] '>
            <div onClick={AddFunction} className='absolute w-full h-screen bg-transparent z-[999]'></div>
              <div className='w-[300px] relative z-[9999] px-2 py-3 h-[340px] rounded-mg bg-[#101010] flex flex-col justify-around items-center '>
              <h1 className='text-zinc-200 font-semibold text-center'>Add New Expense</h1>
              <input
                placeholder='Name'
                value={name}
                onChange={Name}
                className='text-zinc-300 w-[260px] bg-transparent px-2 py-2 rounded border border-violet-600'
                type="text"
              />
              <div className='py-1 w-[fit-content] relative'>
                <input
                  value={date}
                  onChange={Date}
                  type="date"
                  className='text-zinc-300 w-[260px] py-2 px-4 bg-transparent rounded-lg border border-violet-600'
                />
                <div className='absolute z-50 left-[90%] top-1/2 -translate-x-[90%] -translate-y-[50%]'>
                  <RiCalendarLine size="16px" color="white" />
                </div>
              </div>
              <select
                className='px-4 py-2 bg-transparent w-[260px] rounded-lg border text-zinc-300 border-violet-600'
                value={type}
                onChange={Type}
                name=""
                id=""
              >
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
              <input
                value={amount}
                onChange={Amount}
                className='w-[260px] text-zinc-300 bg-transparent px-4 py-2 rounded border border-violet-600'
                placeholder='enter amount'
                type="number"
              />
            <div className='w-full flex justify-center gap-4 items-center '>
              <div onClick={AddFunction} className='px-6 py-2 text-white font-semibold border border-violet-600 text-[12px] rounded whitespace-nowrap'>Cancel</div>
              <div onClick={AddNewExpense} className='px-6 py-2 text-white font-semibold bg-violet-600 text-[12px] rounded whitespace-nowrap'>Add Expense</div>
            </div>
            </div>
          </div>
          ) : null}
          <div>
        <h1 className='Heading hidden text-zinc-300 text-[16px] font-bold tracking-tighter'>Welcome back {username} !</h1>
        </div>
          {
            Expenses.length != 0 ? <>{Expenses.map((d, i) => (
              <ExpenseGrid key={i} data={d} id={i} onDelete={DeleteExpense} /> ))}</>
            :  <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 capitalize text-zinc-200 font-medium'>No Expenses Available</h1>
          }
        
      </div>
    </div>
  )
}

export default Expenses
