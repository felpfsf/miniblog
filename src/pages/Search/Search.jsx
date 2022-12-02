import { NoPostFound } from '../../components/NoPostFound'
import { PostCard } from '../../components/PostCard'
import { useFetchPosts } from '../../hooks/useFetchPosts'
import { useSearch } from '../../hooks/useSearch'

export const Search = () => {
  const search = useSearch()
  const searchTerm = search.get('q')

  const { posts, loading } = useFetchPosts('posts', searchTerm)

  return (
    <main className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto mb-4 pt-16 px-4'>
      <h1>Buscando resultados para <span className='italic underline underline-offset-4'>{searchTerm}</span></h1>

      <div className='h-[1px] w-full my-4 bg-white/60'></div>

      {!loading ? <h2>Carregando...</h2> : null}
      <div className="flex flex-wrap -m-4">
        {posts ? posts.map(post =>
          <PostCard key={post.id} {...post} />
        ) : null}
      </div>

      {posts && posts.length === 0 ? (
        <NoPostFound buttonTitle={'Retornar a home'} linkUrl='/'/>
      ) : null}
    </main>
  )
}