import { Form } from "../../components/Form"

export const Register = () => {
  return (
    <div className='max-w-[1440px] w-full mx-auto pt-16 px-4'>
      <h1>Registrar</h1>
      {/* <form className='max-w-3xl mt-4 flex flex-col gap-4'>

        <div className='flex flex-col gap-2'>
          <label className='text-sm font-semibold'>Nome de usuário:</label>
          <input className='w-full py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey' type="text" placeholder='Nome de usuário' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-semibold'>E-mail:</label>
          <input className='w-full py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey' type="email" placeholder='Seu e-mail' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-semibold'>Senha:</label>
          <input className='w-full py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey' type="password" placeholder='Sua senha' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-semibold'>Confirme sua senha:</label>
          <input className='w-full py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey' type="password" placeholder='Confirme sua senha' />
        </div>
        <button className='mt-4 py-2 px-4 bg-miniBlog-primary rounded self-center'>Confirmar</button>
      </form> */}
      <Form />
    </div>
  )
}
