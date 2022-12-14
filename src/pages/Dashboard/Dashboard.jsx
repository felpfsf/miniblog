import { motion } from 'framer-motion'

import { useAuthValue } from '../../context/AuthContext'
import { userDeletePost } from '../../hooks/useDeletePost'
import { useFetchPosts } from '../../hooks/useFetchPosts'

import { LoadingSpinner } from '../../components/LoadingSpinner'
import { NoPostFound } from '../../components/NoPostFound'
import { PostCard } from '../../components/PostCard'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Dashboard = () => {
  const swal = withReactContent(Swal)

  const { user } = useAuthValue()
  const uid = user.uid
  // const posts = []
  const { posts, loading } = useFetchPosts('posts', null, uid)
  const { deletePost } = userDeletePost('posts')

  const swalert = (id) => {
    swal.fire({
      title: 'Tem certeza disso?',
      text: "Não será possível voltar atrás!",
      icon: 'warning',
      color: '#fff',
      background: '#2A2634',
      backdrop: `
        rgb(42 38 52 / 0.4)
        no-repeat
      `,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3B71FE',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pode apagar!'
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(id)
        Swal.fire(
          'Apagado!',
          'Seu post foi apagado.',
          'success'
        )
      }
    })
  }

  const handleDeletePost = id => {
    try {
      swalert(id)
      // deletePost(id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 1000 } }}
      className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto mb-4 pt-16 px-4'>
      <h1 className='text-2xl font-black'>Dashboard</h1>
      <h2 className='text-xl font-light mt-2'>
        Bem vindo{' '}
        <span className='font-medium underline underline-offset-4'>
          {user.displayName}
        </span>
      </h2>
      <div className='h-[1px] w-full my-4 bg-white/60'></div>
      {!loading ? (
        <LoadingSpinner label={'Carregando posts...'} />
      ) : (
        <>
          <div className='flex flex-wrap -m-4'>
            {posts && posts.length === 0 ? (
              <NoPostFound buttonTitle={'Gostaria de postar algo?'} />
            ) : (
              <>
                {posts
                  ? posts.map(post => (
                    <PostCard
                      key={post.id}
                      {...post}
                      adminTools={true}
                      onClick={() => handleDeletePost(post.id)}
                      editPage={`/posts/edit/${post.id}`}
                    />
                  ))
                  : null}
              </>
            )}
          </div>
        </>
      )}
    </motion.main>
  )
}
