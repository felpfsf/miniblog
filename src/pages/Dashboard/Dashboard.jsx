import { NoPostFound } from '../../components/NoPostFound'
import { PostCard } from '../../components/PostCard'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchPosts } from '../../hooks/useFetchPosts'

export const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid
  // const posts = []
  const { posts, loading } = useFetchPosts('posts', null, uid)
  return (
    <main className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto mb-4 pt-16 px-4'>
      <h1 className='text-2xl font-black'>Dashboard</h1>
      <h2>Gerencie seus posts</h2>
      {!loading ? <h1>Carregando...</h1> : null}
      <div className="flex flex-wrap -m-4">
        {posts ? posts.map(post =>
          <PostCard key={post.id} {...post} />
        ) : null}
      </div>
      {posts && posts.length === 0 ? (
        <NoPostFound buttonTitle={'Crie seu primeiro post'} />
      ) : null}
    </main>
  )
}
