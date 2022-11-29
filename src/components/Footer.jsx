import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full mt-40 mx-auto p-8 bg-miniBlog-dark/70 flex flex-col items-center justify-center gap-2'>
      <h1 className='text-2xl'>miniBlog</h1>
      <h3 className='text-sm font-light'>Escreva sobre o tema que te interessa</h3>
      <p className='text-sm font-light'>MiniBlog &copy; 2022 - Desenvolvido por <a href="http://github.com/felpfsf" target="_blank" rel="noopener noreferrer" className='font-semibold underline underline-offset-4 hover:text-miniBlog-water transition-all duration-300'> Felipe F</a></p>
    </footer>
  )
}
