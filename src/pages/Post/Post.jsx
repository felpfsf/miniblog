import { useParams } from "react-router-dom"
import { useFetchSinglePost } from "../../hooks/useFetchSinglePost"
import { PostDetailed } from "../../components/PostDetailed"

export const Post = () => {
  const { id } = useParams()
  const { error, loading, post } = useFetchSinglePost('posts', id)

  if (post === null) {
    return
  }
  const fbBaseTime = post.createdAt = new Date(post.createdAt.seconds * 1000 + post.createdAt.nanoseconds / 1000000)
  // const dateConverted = fbBaseTime.toDateString()
  console.log(fbBaseTime.toDateString())

  // console.log(post);
  return (
    <main className="max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto pt-16">
      {loading ? <h1 className="text-lg font-light">Carregando post...</h1> : null}
      {post && (
        <PostDetailed {...post} date={fbBaseTime.toDateString()} />
      )}
    </main>
  )
}
// (post.createdAt).toLocaleDateString()