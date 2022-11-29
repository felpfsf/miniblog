import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='w-full mx-auto py-4 px-16 bg-miniBlog-dark/70 flex items-center justify-between'>
      <NavLink className='flex-grow' to={'/'}>
        <h1 className='text-2xl font-semibold'>miniBlog</h1>
      </NavLink>
      <nav className='flex flex-1'>
        <ul className='flex gap-6'>
          <li>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300'}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

// 'text-white font-bold border-b-2' : 'text-white/60 hover:text-white hover:border-b-2'