import React, { useState } from 'react'
import { RiEditBoxLine, RiDeleteBinLine, RiCloseLine, RiPencilLine } from '@remixicon/react'
import { motion } from 'framer-motion'

const NewBudgetComponent = ({ CardData, id, onDelete, onSave, reference }) => {

  const Percentage = (CardData.Spent / CardData.Budget) * 100

  const [EditToggle, setEditToggle] = useState(false)

  const [Ebudget, setEbudget] = useState('')
  const [ESpent, setESpent] = useState('')


  const editBudget = (e) => {
    setEbudget(e.target.value)
  }

  const editSpent = (e) => {
    setESpent(e.target.value)
  }

  const ToggleEdit = () => {
    setEditToggle(!EditToggle)
  }

  return (
    <div>
      <motion.div drag dragConstraints={reference} className='w-[300px] h-[240px] newinputdiv px-4 py-6 cursor-pointer flex flex-col justify-evenly gap-6 bg-[#101010] border border-zinc-700 rounded-xl text-zinc-400'>
        <div className='box flex justify-between items-center'>
          <h1 className='text-zinc-300 font-semibold text-2xl w-[70%] overflow-hidden'>{CardData.Title}</h1>
          <div className="flex gap-3 w-[30%]">
            <div onClick={ToggleEdit} className='px-2 py-2'>
              {EditToggle ? <></> : <RiPencilLine size="20px" stroke="#333333" />}
            </div>
            {EditToggle ? <></> : (
              <div className='p-2'>
                <RiDeleteBinLine onClick={() => { onDelete(id) }} stroke='#999999' size="20px" />
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <div className="flex justify-between items-center w-full">
            <h1 className='text-zinc-400 text-[14px]'>₹ {CardData.Spent}</h1>
            <h1 className='text-zinc-300 text-[16px]'>₹ {CardData.Budget}</h1>
          </div>
          <div className='w-full h-[6px] bg-zinc-600 rounded-full overflow-x-hidden '>
            <div style={{ width: `${Percentage}%` , backgroundColor : Percentage < 40 ?  "#4ade80" : Percentage > 40 && Percentage < 85 ? "#FFD54F" : "#f87171"  }} className='h-full bg-zinc-300 rounded-full'></div>
          </div>
          {
            Percentage < 40  ?  <div className='py-2'>
            <h1 className='text-[14px] text-green-600 '>Looking Good</h1>
          </div> : Percentage>40 && Percentage < 100 ? <div className='py-2'>
            <h1 className='text-[14px] text-red-300 '>Reaching Budget Soon</h1>
          </div> : <div className='py-2'>
            <h1 className='text-[14px] text-red-300 '>Budget limit exceeded</h1>
          </div>
          
          }
        </div>

        <div className="flex justify-between items-center w-full">
          {EditToggle || (
            <>
              <h1 className='text-[14px] w-[60%] text-zinc-500'>Remaining</h1>
              <h1 className={`text-xl font-semibold ${CardData.Budget - CardData.Spent < 0 ? "text-red-300" : "text-zinc-300"} `}>₹ {CardData.Budget - CardData.Spent}</h1>
            </>
          )}
        </div>

        {EditToggle && (
          <div className='flex w-full gap-2 justify-start'>
            <button onClick={ToggleEdit} className='px-4 py-1 rounded-md text-purple-500 border border-purple-600'>Cancel</button>
            <button
              onClick={() => {
                if (Ebudget && ESpent) {
                  onSave(id, Ebudget, ESpent);
                  setEditToggle(false);
                } else {
                  alert("Please enter some data");
                }
              }}
              className='bg-purple-700 rounded px-6 py-1 text-white font-semibold'
            >
              Save
            </button>
          </div>
        )}
    </motion.div>

      {
    EditToggle && (
      <div className='w-full h-screen flex flex-col justify-center items-center fixed left-0 top-0 z-[99999] bg-zinc-900/90'>
        <div onClick={ToggleEdit} className='absolute w-full h-screen bg-transparent z-[99999]'></div>
        <div className='w-[300px] border-zinc-700 border  relative z-[999999] px-4 py-6 rounded-lg bg-[#101010] flex flex-col h-[300px]  items-center'>
          <h2 className='text-zinc-300 text-xl font-semibold mb-4'>Edit Budget</h2>
          <div className='w-full'>
            <label className='text-zinc-400 text-[14px] mb-2 block'>New Budget</label>
            <input
              value={Ebudget}
              onChange={editBudget}
              className='text-zinc-300 w-full bg-transparent px-2 py-2 rounded border border-violet-600 mb-4'
              type="number"
            />
            <label className='text-zinc-400 text-[14px] mb-2 block'>New Spent Amount</label>
            <input
              value={ESpent}
              onChange={editSpent}
              type="number"
              className='text-zinc-300 w-full py-2 px-4 bg-transparent rounded-lg border border-violet-600'
            />
          </div>
          <div className='w-full flex justify-center gap-4 items-center mt-4'>
            <button onClick={ToggleEdit} className='px-6 py-2 text-white font-semibold border border-violet-600 text-[12px] rounded'>
              Cancel
            </button>
            <button
              onClick={() => {
                if (Ebudget && ESpent) {
                  onSave(id, Ebudget, ESpent);
                  ToggleEdit();
                }
              }}
              className='px-6 py-2 text-white font-semibold bg-violet-600 text-[12px] rounded'
            >
              Save
            </button>

          </div>
        </div>
      </div>
    )
  }
    </div >
  )
}

export default NewBudgetComponent
