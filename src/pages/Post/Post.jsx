import { useParams } from 'react-router-dom'
import { useFetchSinglePost } from '../../hooks/useFetchSinglePost'

import { motion } from 'framer-motion'

import { PostDetailed } from '../../components/PostDetailed'

export const Post = () => {
  const { id } = useParams()
  const { error, loading, post } = useFetchSinglePost('posts', id)

  if (post === null) return

  const fbBaseTime = new Date(
    post.createdAt.seconds * 1000 + post.createdAt.nanoseconds / 1000000
  )
  let locale = 'pt-br'
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  const dateConverted = fbBaseTime.toDateString()
  const dateConvertedLocale = fbBaseTime.toLocaleDateString(locale, options)
  console.log(dateConvertedLocale.toLocaleUpperCase(locale))

  // console.log(post);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 1000 } }}
      className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto pt-16'>
      {loading ? (
        <h1 className='text-lg font-light'>Carregando post...</h1>
      ) : null}
      {post && <PostDetailed {...post} date={dateConvertedLocale} />}
    </motion.main>
  )
}
// (post.createdAt).toLocaleDateString()
