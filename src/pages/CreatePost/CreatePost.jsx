import { PostForm } from '../../components/PostForm'
import { motion } from 'framer-motion'

export const CreatePost = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 1000 } }}
      className='max-w-[1440px] min-h-[calc(100vh_-_208px)] w-full mx-auto pt-16 px-4 flex flex-col items-center'>
      <h1 className='text-2xl font-black'>Criar um novo post</h1>
      <h2>Escreva sobre o que quiser</h2>
      <PostForm />
    </motion.main>
  )
}
