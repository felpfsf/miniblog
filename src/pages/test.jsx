import { motion } from 'framer-motion'
import { TestForm } from '../components/TestForm'
import TextEditor from '../components/TextEditor/TextEditor'

export const Test = () => {

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1000 } }}
      className='max-w-[1440px] w-full min-h-[calc(100vh_-_212px)] mx-auto mb-4 pt-16 px-4'
    >
      <h1 className='text-xl font-black'>Tiptap</h1>
      <div>
        <TestForm />
      </div>
      <TextEditor />

    </motion.main>
  )
}