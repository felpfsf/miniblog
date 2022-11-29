import { useCallback, useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"

export const Form = () => {
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
      inputName: 'login',
      inputType: 'text',
      pattern: '^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){3,15}[a-zA-Z0-9]',
      placeholder: 'Nome de usuário',
      error_message: 'Seu nome precisa ter mais de 4 ou mais characteres, não pode começar com . ou _'
    },
    {
      id: 2,
      labelText: 'E-mail:',
      inputName: 'email',
      inputType: 'email',
      placeholder: 'email@exemplo.com',
      error_message: 'Email inválido'
    },
    {
      id: 3,
      labelText: 'Senha:',
      inputName: 'password',
      inputType: 'password',
      pattern:
        'teste',
      // pattern:
      //   '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$',
      placeholder: 'Sua senha',
      error_message: 'Senha precisa ter 8-20 caracteres e ter pelo menos 1 letra, 1 número e 1 caracter especial'
    },
    {
      id: 4,
      labelText: 'Confirme sua senha:',
      inputName: 'confirmPassword',
      inputType: 'password',
      pattern: values.password,
      placeholder: 'Confirme sua senha',
      error_message: 'Senha não confere'
    },
  ]

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const clearInputs = () => {
    setValues({
      login: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }
  return (
    <form className='max-w-3xl mt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
      {inputForm.map(input => (
        <Input key={input.id} {...input} value={values[input.inputName]} onChange={onChangeHandler} />
      ))}
      <Button />
    </form>
  )
}