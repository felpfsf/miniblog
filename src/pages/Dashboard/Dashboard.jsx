import { NoPostFound } from '../../components/NoPostFound'
import { PostCard } from '../../components/PostCard'

import { useAuthValue } from '../../context/AuthContext'
import { userDeletePost } from '../../hooks/useDeletePost'
import { useFetchPosts } from '../../hooks/useFetchPosts'

export const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid
  // const posts = []
  const { posts, loading } = useFetchPosts('posts', null, uid)
  const { deletePost } = userDeletePost('posts')

  const handleDeletePost = (id) => {
    deletePost(id)
  }
  return (
    <main className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto mb-4 pt-16 px-4'>
      <h1 className='text-2xl font-black'>Dashboard</h1>
      <h2 className='text-xl font-light mt-2'>Bem vindo <span className='font-medium underline underline-offset-4'>{user.displayName}</span></h2>
      <div className='h-[1px] w-full my-4 bg-white/60'></div>
      {!loading ? (
        <h1 className='text-2xl'>Carregando...</h1>
      ) : (
        <>
          <div className='flex flex-wrap -m-4'>
            {posts && posts.length === 0 ? (
              <NoPostFound buttonTitle={'Gostaria de postar algo?'} />
            ) : (
              <>
                {posts
                  ? posts.map(post =>
                    <PostCard key={post.id} {...post} adminTools={true} onClick={() => handleDeletePost(post.id)} editPage={''} />
                  )
                  : null}
              </>
            )}
          </div>
        </>
      )}
    </main>
  )
}
