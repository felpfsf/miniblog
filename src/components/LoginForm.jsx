import { useEffect, useState } from "react"
import { useAuthentication } from "../hooks/useAuthentication"

import { Button } from "./Button"
import { Input } from "./Input"

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
  const { logIn, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await logIn(values)
    console.log(values)
    // setError('')
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <form className='max-w-3xl w-full mt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
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