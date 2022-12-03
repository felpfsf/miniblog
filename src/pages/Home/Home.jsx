import { LoadingSpinner } from '../../components/LoadingSpinner'
import { NoPostFound } from '../../components/NoPostFound'
import { PostCard } from '../../components/PostCard'
import { SearchForm } from '../../components/SearchForm'
import { useFetchPosts } from '../../hooks/useFetchPosts'

export const Home = () => {
  const { posts, loading } = useFetchPosts('posts')

  return (
    <main className='max-w-[1440px] w-full min-h-[calc(100vh_-_212px)] mx-auto mb-4 pt-16 px-4'>
      <h1 className='text-xl font-black'>Veja os posts mais recentes</h1>
      <SearchForm />
      <div className='h-[1px] w-full my-4 bg-white/60'></div>
      {!loading ? <LoadingSpinner label={'Carregando posts...'} /> : null}
      <section className='flex flex-wrap -m-4'>
        {posts ? posts.map(post => <PostCard key={post.id} {...post} />) : null}
      </section>
      {posts && posts.length === 0 ? (
        <NoPostFound buttonTitle={'Seja o primeiro a postar'} />
      ) : null}
    </main>
  )
}
