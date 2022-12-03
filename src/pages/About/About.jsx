import React from 'react'

export const About = () => {
  return (
    <main className='max-w-[1440px] w-full min-h-[calc(100vh_-_212px)] mx-auto pt-16 px-4'>
      <section className='max-w-3xl w-full mx-auto'>
        <h1 className='text-lg font-medium'>O que é o miniBlog?</h1>
        <p className='font-light text-white/80 leading-relaxed mt-4'>Este é um projeto didático desenvolvido para estudar as funcionalidades do <strong>React</strong>, controles de rotas com <strong>React-Router-Dom</strong>, práticas em autenticação de usuário e manipulação de banco-de-dados com o <strong>Firebase</strong>.</p>
        <p>Através desse estudo pude aprender e melhorar técnicas de reutilização de hooks e componentes diversos para cada página.</p>
        <p>Na página inicial os posts são buscados do banco através de um hook customizado chamado useFetchPosts, nesse hook tem toda a lógica necessária para fazer a busca no Firebase</p>
        <p>Esses dados passam por uma função map() para que cada um seja exibido em um card, que é um componente reutilizável, todas as informações são passadas como props e destruturadas no componente para exibi-las nos seus devidos campos.</p>
        <p>Esse mesmo componente é utilizado novamente no Perfil/Dashboard, onde os posts que o usuário criou são exibidos, assim também como dois botões com função de editar e excluir o post. Vale frisar que essas funções aparecem apenas nessa página e somente para os posts que o usuário logado criou.</p>
      </section>
    </main>
  )
}
