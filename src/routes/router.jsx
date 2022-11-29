import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { About } from '../pages/About/About'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { Register } from '../pages/Register/Register'

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}