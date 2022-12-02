import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AuthProvider } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'


import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { About } from '../pages/About/About'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { Register } from '../pages/Register/Register'
import { onAuthStateChanged } from 'firebase/auth'
import { CreatePost } from '../pages/CreatePost/CreatePost'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Login } from '../pages/Login/Login'
import { Post } from '../pages/Post/Post'
import { Search } from '../pages/Search/Search'

export const Router = () => {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }


  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/dashboard'
            element={user
              ? <Dashboard />
              : <Navigate to={'/login'} />
            }
          />
          <Route path='/login'
            element={
              !user
                ? <Login />
                : <Navigate to={'/'} />
            }
          />
          <Route path='/registrer'
            element={
              !user
                ? <Register />
                : <Navigate to={'/'} />
            }
          />
          <Route path='/posts/create'
            element={
              user
                ? <CreatePost />
                : <Navigate to={'/login'} />
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}