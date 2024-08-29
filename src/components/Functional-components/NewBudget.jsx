import React, { useEffect, useRef, useState } from 'react'
import NewBudgetComponent from './NewBudgetComponent'

const NewBudget = () => {

  const refdiv = useRef(null)

  const [toggle, setToggle] = useState(false)
  const [Title, setTitle] = useState("")
  const [Budget, setBudget] = useState("")
  const [Spent, setSpent] = useState("")
  const [Data, setData] = useState([])
  const [EditToggle, setEditToggle] = useState(false)


  //gsap



  // Function to save Data to localStorage
  const saveToLocalStorage = (data) => {
    const username  = localStorage.getItem("Current")
    localStorage.setItem(`BudgetData${username}`, JSON.stringify(data))
  }

  const EditToggleFunction = () => {
    setEditToggle(!EditToggle)
  }

  const EnterData = () => {
    if(Title && Budget && Spent){
      const newData = [...Data, { Title, Budget, Spent }]
      setData(newData)
      saveToLocalStorage(newData)
      setToggle(false)

    }else{
      alert("please enter something")
    }
  }

  const Delete = (i) => {
    const delData = [...Data]
    delData.splice(i, 1)
    setData(delData)
    saveToLocalStorage(delData)
  }

  const SaveEdit = (i, Ebudget, ESpent) => {
    if (Ebudget && ESpent) {
      const updatedData = [...Data]
      updatedData[i] = { ...updatedData[i], Budget: Ebudget, Spent: ESpent }
      setData(updatedData)
      saveToLocalStorage(updatedData)
      setEditToggle(false)
    } else {
      alert("please enter something")
    }
  }

  const CancelEnteringData = () => {
    setToggle(false)
  }

  useEffect(() => {
    const username = localStorage.getItem("Current")

    const storedData = localStorage.getItem(`BudgetData${username}`)
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData)
        if (Array.isArray(parsedData)) {
          setData(parsedData)
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
    <div ref={refdiv} className='bg-[#000000] w-full flex gap-4 justify-start items-center rounded-3xl flex-wrap  '>

      <div className={`transition-transform duration-300 ease-in-out absolute w-full h-screen ${toggle ? "top-0 left-0" : "top-[-100%] left-0"} bg-zinc-950/70 flex justify-center items-center`} >
      <div onClick={CancelEnteringData} className='absolute w-full h-screen z-1'></div>
      <div className='relative z-999 w-[280px] h-[300px] newinputdiv px-4 py-4 cursor-pointer flex flex-col gap-2 items-start justify-center bg-[#000000] rounded-2xl border-zinc-800 border text-zinc-400'>
          <h1 className='text-[14px] text-purple-200'>Enter Category</h1>
          <input value={Title} onChange={(e) => setTitle(e.target.value)} type="text" className='text-purple-200 px-4 py-2 rounded-lg outline-none border bg-transparent border-purple-400 w-full' />
          <h1 className='text-[14px] text-purple-200'>Total Budget</h1>
          <input value={Budget} onChange={(e) => setBudget(Number(e.target.value))} type="number" className='text-purple-200 px-4 py-2 rounded-lg outline-none border bg-transparent border-purple-400 w-full' />
          <h1 className='text-[14px] text-purple-200'>Total spent</h1>
          <input value={Spent} onChange={(e) => setSpent(Number(e.target.value))} type="number" className='text-purple-200 px-4 py-2 rounded-lg outline-none border bg-transparent border-purple-400 w-full' />
          <div className="flex w-full gap-4">
            <button onClick={EnterData} className='outline-none text-zinc-950 font-semibold px-2 py-1 rounded-md bg-purple-300'>Create</button>
            <button onClick={CancelEnteringData} className='outline-none text-purple-300 font-light px-2 py-1 rounded-md border border-purple-600'>Cancel</button>
          </div>
        </div>
      </div>
        
        <div onClick={() => setToggle(true)} className='w-[280px] h-[180px] cursor-pointer flex flex-col gap-2 items-center justify-center bg-[#202020] text-zinc-400'>
          <h1>+</h1>
          <h1>Create New Budget</h1>
        </div>
      {Data.map((e, i) => (
        <div className='box' key={i} >
        <NewBudgetComponent reference={refdiv} CardData={e} id={i} onDelete={() => Delete(i)} onSave={SaveEdit} />
        </div>
      ))}
    </div>
  )
}

export default NewBudget
