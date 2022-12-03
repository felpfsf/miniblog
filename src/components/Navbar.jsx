import { NavLink } from 'react-router-dom'

import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'

import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react'

export const Navbar = () => {
  const navLinks = [
    { id: 1, label: 'Home', url: '/' },
    { id: 1, label: 'Home', url: '/' },
    { id: 1, label: 'Home', url: '/' },
    { id: 1, label: 'Home', url: '/' },
  ]
  const { user } = useAuthValue()
  const { logOut } = useAuthentication()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const menuRef = useRef()

  const handleNavMenu = () => {
    setIsNavOpen(prev => !prev)
  }

  const handleLogOut = () => {
    logOut()
    setIsNavOpen(prev => !prev)
    document.location.reload()
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isNavOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsNavOpen(prev => !prev)
      }
    }
    document.body.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.body.removeEventListener('mousedown', checkIfClickedOutside)
  }, [isNavOpen])

  return (
    <header className='w-full min-h-fit mx-auto py-4 px-4 xl:px-16 bg-miniBlog-dark/70 flex items-center justify-between'>
      <div className='flex-grow'>
        <NavLink className='text-2xl' to={'/'}>
          mini<span className='ml-[2px] text-3xl font-semibold tracking-widest'>Blog</span>
        </NavLink>
      </div>
      {isNavOpen ? <HiOutlineXMark onClick={handleNavMenu} size={32} className='z-10 md:hidden' /> : <HiOutlineBars3 onClick={handleNavMenu} size={32} className='z-10 md:hidden' />}
      <nav className={
        isNavOpen ?
          "fixed top-0 right-0 w-[70%] h-screen pt-36 bg-miniBlog-dark/70 backdrop-blur-3xl ease-in-out duration-300"
          :
          "fixed top-0 right-[-100%] w-[70%] h-screen pt-36 bg-miniBlog-dark/70 backdrop-blur-3xl ease-in-out duration-300"
      } >
        <ul className='flex flex-col items-center gap-8' ref={menuRef}>
          <li>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-3xl bg-white text-miniBlog-bg2 p-2' : 'text-3xl text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'} onClick={handleNavMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-3xl bg-white text-miniBlog-bg2 p-2' : 'text-3xl text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'} onClick={handleNavMenu}>Sobre</NavLink>
          </li>
          {!user ?
            <>
              <li>
                <NavLink to={'/registrer'} className={({ isActive }) => isActive ? 'text-3xl bg-white text-miniBlog-bg2 p-2' : 'text-3xl text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'} onClick={handleNavMenu}>Registar</NavLink>
              </li>
              <li>
                <NavLink to={'/login'} className={({ isActive }) => isActive ? 'text-3xl bg-white text-miniBlog-bg2 p-2' : 'text-3xl text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'} onClick={handleNavMenu}>Entrar</NavLink>
              </li>
            </>
            :
            <>
              <li>
                <NavLink to={'/posts/create'} className={({ isActive }) => isActive ? 'text-3xl bg-white text-miniBlog-bg2 p-2' : 'text-3xl text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'} onClick={handleNavMenu}>Postar</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'text-3xl bg-white text-miniBlog-bg2 p-2' : 'text-3xl text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'} onClick={handleNavMenu}>Perfil</NavLink>
              </li>
              <li>
                <NavLink to={''} onClick={handleLogOut} className='text-3xl text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'>Sair</NavLink>
              </li>
            </>
          }

        </ul>
      </nav>
      <nav className='hidden md:flex flex-1 mt-4 sm:mt-0'>
        <ul className='flex gap-6'>
          <li>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'}>Sobre</NavLink>
          </li>
          {!user ?
            <>
              <li>
                <NavLink to={'/registrer'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'}>Registar</NavLink>
              </li>
              <li>
                <NavLink to={'/login'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'}>Entrar</NavLink>
              </li>
            </>
            :
            <>
              <li>
                <NavLink to={'/posts/create'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'}>Postar</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'bg-white text-miniBlog-bg2 p-2' : 'text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'}>Perfil</NavLink>
              </li>
              <li>
                <NavLink to={''} onClick={logOut} className='text-white/60 p-2 transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'>Sair</NavLink>
              </li>
            </>
          }

        </ul>
      </nav>
    </header>
  )
}