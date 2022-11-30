import { useEffect, useRef, useState } from "react"
import { useAuthentication } from "../hooks/useAuthentication"

import { Button } from "./Button"
import { Input } from "./Input"

export const RegisterForm = () => {
  const [values, setValues] = useState({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputForm = [
    {
      id: 1,
      labelText: 'Nome de usuário:',
      inputName: 'displayName',
      inputType: 'text',
      pattern: '^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){3,15}[a-zA-Z0-9]',
      required: true,
      placeholder: 'Nome de usuário',
      error_message: 'Seu nome precisa ter mais de 4 ou mais characteres, não pode começar com . ou _'
    },
    {
      id: 2,
      labelText: 'E-mail:',
      inputName: 'email',
      inputType: 'email',
      required: true,
      placeholder: 'email@exemplo.com',
      error_message: 'Email inválido'
    },
    {
      id: 3,
      labelText: 'Senha:',
      inputName: 'password',
      inputType: 'password',
      // pattern:
      //   'teste12',
      // pattern:
      //   '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$',
      required: true,
      placeholder: 'Sua senha',
      error_message: 'Senha precisa ter 8-20 caracteres e ter pelo menos 1 letra, 1 número e 1 caracter especial'
    },
    {
      id: 4,
      labelText: 'Confirme sua senha:',
      inputName: 'confirmPassword',
      inputType: 'password',
      pattern: values.password,
      required: true,
      placeholder: 'Confirme sua senha',
      error_message: 'Senha não confere'
    },
  ]

  const formRef = useRef(null)
  const [error, setError] = useState(null)

  const formReset = () => {
    formRef.current.reset()
  }

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createUser(values)
    console.log(values)
    setError('')
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <form ref={formRef} className='max-w-sm w-full mt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
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
  )
}