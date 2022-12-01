import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export const Home = () => {
  const [posts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchTerm)
  }

  return (
    <main className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto pt-16 px-4'>
      <h1 className='text-xl font-black'>Veja os posts mais recentes</h1>
      <form
        className='flex flex-col sm:flex-row gap-2 sm:gap-4'
        onSubmit={handleSubmit}>
        <Input
          placeholder={'Pesquise por tags'}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button buttonText={'Pesquisar'} />
      </form>
      <div className='h-[1px] w-full mt-4 bg-white/60'></div>
      {posts && posts.length === 0 ? (
        <div className='w-full mt-4 mx-auto flex flex-col items-center'>
          <h2 className='font-light'>Nenhum post encontrado</h2>
          <Link
            to={'/posts/create'}
            className='mt-2 py-2 px-8 bg-miniBlog-primary rounded self-center hover:contrast-200 transition-color ease-in-out duration-300'>
            Seja o primeiro a postar
          </Link>
        </div>
      ) : (
        <h1>Posts...</h1>
      )}
    </main>
  )
}
