import React, { useState } from 'react';
import {
  RiDashboardLine,
  RiLogoutBoxLine,
  RiMoneyDollarBoxLine,
  RiMore2Line,
  RiWallet2Line,
} from '@remixicon/react';
import { useNavigate } from 'react-router-dom';

const AbsoluteSidebar = ({state}) => {
  const username = localStorage.getItem('Current');
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuActive, setMenuActive] = useState(state);

  const handleToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div>
      {/* Toggle Button - Always Visible */}
      <div
        onClick={handleToggle}
        className='hidden menuicon  absolute flex-col gap-1 left-2 top-2 z-[99999] justify-end py-4 px-3 rounded-full cursor-pointer'
      >
        <div className='bg-zinc-100 w-4 h-[1.5px]'></div>
        <div className='bg-zinc-100 w-4 h-[1.5px]'></div>
      </div>

      {/* Sidebar - Visible when menuToggle is true */}
      <div
        className={`AbsoluteSidebar hidden w-[280px] bg-[#101010] px-4 py-6 text-zinc-200 absolute top-0 h-screen z-[9999] transition-transform duration-300 ease-in-out ${
          menuToggle ? 'left-0' : 'left-[-280px]'
        }`}
      >
        <div className='w-full px-[2.5vw] py-8 flex-col flex justify-between items-start text-white'>
          <h1 className='text-zinc-300 text-[16px] font-bold tracking-tighter'>
            Welcome back, {username}!
          </h1>
        </div>
        <div>
          <div
            onClick={() => {
              navigate('/Main/Dashboard');
              setMenuActive('Dashboard');
              setMenuToggle(false);
            }}
            className={`sidebardiv px-12 flex items-center gap-4 cursor-pointer ${
              menuActive === 'Dashboard' ? 'bg-[#303030]' : ''
            }`}
          >
            <RiDashboardLine size={20} color='white' />
            <p className='text-zinc-300 text-left px-2 py-2'>Dashboard</p>
          </div>
          <div
            onClick={() => {
              navigate('/Main/Budgets');
              setMenuActive('Budgets');
              setMenuToggle(false);
            }}
            className={`sidebardiv px-12 flex items-center gap-4 cursor-pointer ${
              menuActive == 'Budgets' ? 'bg-[#303030]' : ''
            }`}
          >
            <RiWallet2Line size={20} color='white' />
            <p className='text-zinc-300 text-left px-2 py-2'>Budgets</p>
          </div>
          <div
            onClick={() => {
              navigate('/Main/Expenses');
              setMenuActive('Expenses');
              setMenuToggle(false);
            }}
            className={`sidebardiv px-12 flex items-center gap-4 cursor-pointer ${
              menuActive === 'Expenses' ? 'bg-[#303030]' : ''
            }`}
          >
            <RiMoneyDollarBoxLine size={20} color='white' />
            <p className='text-zinc-300 text-left px-2 py-2'>Expenses</p>
          </div>
          <div className='sidebardiv px-12 flex items-center gap-4 cursor-pointer'>
            <RiLogoutBoxLine size={20} color='white' />
            <a href='../' className='text-red-300 text-left px-2 py-2'>
              Log out
            </a>
          </div>
        </div>
      </div>

      {/* Overlay - Closes Sidebar when clicked */}
      {menuToggle && (
        <div
          onClick={() => setMenuToggle(false)}
          className='fixed top-0 left-0 w-full h-full bg-transparent z-[9998]'
        />
      )}
    </div>
  );
};

export default AbsoluteSidebar;
