import { NavLink } from 'react-router-dom'

import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'

export const Navbar = () => {
  const { user } = useAuthValue()
  const { logOut } = useAuthentication()
  return (
    <header className='w-full mx-auto py-4 px-16 bg-miniBlog-dark/70 flex flex-col sm:flex-row items-center justify-between'>
      <NavLink className='flex-grow' to={'/'}>
        <h1 className='text-2xl font-semibold'>miniBlog</h1>
      </NavLink>
      <nav className='flex flex-1 mt-4 sm:mt-0'>
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