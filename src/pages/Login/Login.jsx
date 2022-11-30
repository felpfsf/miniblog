import { LoginForm } from '../../components/LoginForm'

export const Login = () => {
  return (
    <main className='max-w-[1440px] w-full min-h-[calc(100vh_-_208px)] mx-auto pt-16 px-4 flex flex-col items-center'>
      <h1 className='text-xl font-medium'>Efetuar login</h1>
      <LoginForm />
    </main>
  )
}
