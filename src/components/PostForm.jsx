import { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { TextArea } from './TextArea'

export const PostForm = () => {
  const [values, setValues] = useState({
    postTitle: '',
    postImgUrl: '',
    postMessage: '',
    postTags: [''],
  })

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
  }

  return (
    <form className='max-w-sm w-full mt-4 mb-20 flex flex-col gap-4' onSubmit={handleSubmit}>
      <Input
        labelText={'Título:'}
        inputName={'postTitle'}
        inputType={'text'}
        placeholder={'Pense em um bom título'}
        value={values.postTitle}
        onChange={onChangeHandler}
        error_message={'Insira o titulo do post'}
      />
      <Input
        labelText={'URL da imagem:'}
        inputName={'postImgUrl'}
        inputType={'text'}
        placeholder={'http://exemplo.com/imagem.jpg'}
        value={values.postImgUrl}
        onChange={onChangeHandler}
        error_message={'Insira uma imagem para o post'}
      />
      <TextArea
        labelText={'Mensagem:'}
        txtAreaName={'postMessage'}
        placeholder={'Sobre o que você está pensando...'}
        value={values.postMessage}
        onChange={onChangeHandler}
        error_message={'Insira uma imagem para o post'}
      />
      <Input
        labelText={'Tags:'}
        inputName={'postTags'}
        inputType={'text'}
        placeholder={'Insira as tags serparadas por vírgula'}
        value={values.postImgUrl}
        onChange={onChangeHandler}
        error_message={'Insira uma imagem para o post'}
      />
      <Button buttonText={'Postar'} />
    </form>
  )
}
