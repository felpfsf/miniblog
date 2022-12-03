import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"

import { useFetchSinglePost } from '../../hooks/useFetchSinglePost'
import { EditPostForm } from '../../components/EditPostForm'

export const EditPost = () => {
  const { id } = useParams()
  const { post } = useFetchSinglePost('posts', id)
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1, transition: { duration: 1000 } }} className='max-w-[1440px] min-h-[calc(100vh_-_208px)] w-full mx-auto pt-16 px-4 flex flex-col items-center'>
      <h1 className='text-2xl font-black'>Edite sua postagem</h1>
      <h2>Altere os campos que desejar</h2>
      {post ?
        <EditPostForm {...post} id={id} />
        :
        null
      }

    </motion.main>
  )
}
