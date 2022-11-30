import { useEffect, useState } from "react"
import { useAuthentication } from "../hooks/useAuthentication"
import { FcGoogle } from 'react-icons/fc'

import { Button } from "./Button"
import { Input } from "./Input"
import { Link } from "react-router-dom"

export const LoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const inputForm = [
    {
      id: 2,
      labelText: 'E-mail:',
      inputName: 'email',
      inputType: 'email',
      required: true,
      placeholder: 'email@exemplo.com',
    },
    {
      id: 3,
      labelText: 'Senha:',
      inputName: 'password',
      inputType: 'password',
      required: true,
      placeholder: 'Sua senha',
    },
  ]

  const [error, setError] = useState(null)

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const { logIn, signInWithGoogle, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await logIn(values)
    console.log(values)
    // setError('')
  }

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className='max-w-sm w-full mt-4 flex flex-col gap-4'>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {inputForm.map(input => (
          <Input key={input.id} {...input} value={values[input.inputName]} onChange={onChangeHandler} />
        ))}
        <span className="text-xs font-semibold text-red-500 self-center">{error}</span>
        {loading ?
          <Button disabled={true} buttonText={'Aguarde'} />
          :
          <Button disabled={false} buttonText={'Confirmar'} />
        }
      </form>
      <div className="h-[1px] w-full mt-4 bg-white/80"></div>
      <button className="mt-4 p-2 text-miniBlog-dark bg-white rounded flex gap-4 self-center" onClick={handleGoogleLogin}>
        <FcGoogle size={24} />
        Login com o Google
      </button>
      <p className='mt-2 text-sm self-center'>Não tem uma conta ainda? <Link to={'/registrer'} className='underline underline-offset-4 hover:text-miniBlog-primary :hover:font-bold transition-colors duration-300'>Registre aqui</Link></p>
    </div>
  )
}