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
      placeholder: 'Nome de usuário'
    },
    {
      id: 2,
      labelText: 'E-mail:',
      inputName: 'email',
      inputType: 'email',
      placeholder: 'Seu e-mail'
    },
    {
      id: 3,
      labelText: 'Senha:',
      inputName: 'password',
      inputType: 'password',
      pattern:
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$',
      placeholder: 'Sua senha'
    },
    {
      id: 4,
      labelText: 'Confirme sua senha:',
      inputName: 'confirmPassword',
      inputType: 'password',
      pattern: values.password,
      placeholder: 'Confirme sua senha'
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