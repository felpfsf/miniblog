import { PostForm } from '../../components/PostForm'

export const CreatePost = () => {
  return (
    <main className='max-w-[1440px] min-h-[calc(100vh_-_208px)] w-full mx-auto pt-16 px-4 flex flex-col items-center'>
      <h1 className='text-2xl font-black'>Criar um novo post</h1>
      <h2>Escreva sobre o que quiser</h2>
      <PostForm />
    </main>
  )
}
