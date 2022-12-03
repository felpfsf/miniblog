import { motion } from 'framer-motion'

import { RegisterForm } from '../../components/RegisterForm'

export const Register = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 1000 } }}
      className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto pt-16 px-4 flex flex-col items-center'>
      <h1 className='text-xl font-medium'>Registrar</h1>
      <RegisterForm />
    </motion.main>
  )
}
