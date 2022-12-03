import { motion } from "framer-motion"

import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <motion.main  className='max-w-[1440px] w-full mx-auto pt-16 px-4 flex flex-col items-center justify-center gap-4'>
      <h1 className='text-8xl font-extrabold'>Página não encontrada</h1>
      <h2 className='text-4xl font-bold'>Por favor retorne à página principal</h2>
      <Link className='text-2xl font-semibold p-2 hover:bg-white hover:text-miniBlog-bg2 transition-all duration-300' to={'/'}>Retornar à Home</Link>
    </motion.main>
  )
}
