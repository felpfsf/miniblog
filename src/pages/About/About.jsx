import { motion } from "framer-motion"

export const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 1000 } }}
      className='max-w-[1440px] w-full min-h-[calc(100vh_-_212px)] mx-auto pt-16 px-4'
    >
      <section className='max-w-3xl w-full mx-auto mb-16 flex flex-col gap-2 [&>p]:font-light [&>p]:text-white/80 [&>p]:leading-relaxed [&>p]:mt-4'>
        <h1 className='text-lg font-medium'>O que é o miniBlog?</h1>
        <p>Este é um projeto didático desenvolvido para estudar as funcionalidades do <strong>React</strong>, controles de rotas com <strong>React-Router-Dom</strong>, práticas em autenticação de usuário e manipulação de banco-de-dados com o <strong>Firebase</strong>.</p>
        <p>Através desse estudo pude aprender e melhorar técnicas de reutilização de hooks e componentes diversos para cada página.</p>

        <p>Na página inicial os posts são buscados do banco através de um hook customizado chamado useFetchPosts, nesse hook tem toda a lógica necessária para fazer a busca no Firebase</p>

        <p>Esses dados passam por uma função <strong>map()</strong> para que cada um seja exibido em um card, que é um componente reutilizável, todas as informações são passadas como props e destruturadas no componente para exibi-las nos seus devidos campos.</p>

        <p>Esse mesmo componente é utilizado novamente no <strong>Perfil/Dashboard</strong>, onde os posts que o usuário criou são exibidos, assim também como dois botões com função de editar e excluir o post. Vale frisar que essas funções aparecem apenas nessa página e somente para os posts que o usuário logado criou.</p>

        <p>Os post completo também é exibido em um componente separado, nele contém mais informações como o nome de quem postou, a data e a mensagem completa.</p>

        <p>Na tela de Entrar o usuário pode criar sua conta através de um email e senha, ou se preferir utilizar sua conta google. A autenticação é feita pelo firebase através de um hook customizado e context api para permitir que somente o usuário autenticado tenha acesso a sessões dedicadas, como seu perfil, editar e postar.</p>

        <p>***Sessão ainda em construção***</p>

      </section>
    </motion.main>
  )
}
