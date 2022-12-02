import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useFetchPosts } from "../hooks/useFetchPosts"

import { Button } from "./Button"
import { Input } from "./Input"

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { posts, loading } = useFetchPosts('posts')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchTerm)
    if (searchTerm) {
      return navigate(`/search?q=${searchTerm}`)
    }
  }
  return (
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
  )
}