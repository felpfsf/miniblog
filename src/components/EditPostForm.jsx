import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { useUpdatePost } from '../hooks/useUpdatePost'

import { Button } from './Button'
import { Input } from './Input'
import { TextArea } from './TextArea'

export const EditPostForm = ({ title, id, imgUrl, headline, message, tags }) => {
  const swal = withReactContent(Swal)
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const { user } = useAuthValue()
  const { response, updatePost } = useUpdatePost('posts')
  const tagsJoined = tags.join(', ')


  const [values, setValues] = useState({
    postTitle: title,
    postImgUrl: imgUrl,
    postHeadline: headline,
    postMsg: message,
    postTags: tagsJoined,
    uid: user.uid,
    createdBy: user.displayName
  })

  const swalert = (icon, message) => {
    swal.fire({
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const onChangeHandler = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const tags = values.postTags.split(',').map(tag => tag.trim().toLowerCase())

    const postData = {
      title: values.postTitle,
      imgUrl: values.postImgUrl,
      headline: values.postHeadline,
      message: values.postMsg,
      tags,
      uid: values.uid,
      createdBy: values.createdBy
    }

    try {
      updatePost(postData, id)
      swalert('success', 'Post editado com sucesso')
    } catch (error) {
      console.error(error)
      swalert('error', 'Ocorreu um erro, tente mais tarde')
    } finally {
      setTimeout(() => {
        navigate('/dashboard')
      }, "1700")
    }



  }

  return (
    <form
      className='max-w-lg w-full mt-4 mb-20 flex flex-col gap-4'
      onSubmit={handleSubmit}>
      <Input
        labelText={'Título:'}
        inputName={'postTitle'}
        inputType={'text'}
        placeholder={'Pense em um bom título'}
        value={values.postTitle}
        pattern={'.{6,50}$'}
        maxLength={50}
        chars={count.postTitle}
        showCharLimit={false}
        onChange={onChangeHandler}
        error_message={'O título precisa ter entre 6 a 50 caracteres'}
      />
      <Input
        labelText={'URL da imagem:'}
        inputName={'postImgUrl'}
        inputType={'text'}
        placeholder={'http://exemplo.com/imagem.jpg'}
        value={values.postImgUrl}
        pattern={'https?://.+'}
        onChange={onChangeHandler}
        error_message={'Insira uma URL válida para o post'}
      />
      <Input
        labelText={'Uma manchete para seu post:'}
        inputName={'postHeadline'}
        inputType={'text'}
        placeholder={'Pense em uma boa manchete'}
        value={values.postHeadline}
        pattern={'.{6,100}$'}
        maxLength={100}
        chars={count.postHeadline}
        showCharLimit={false}
        onChange={onChangeHandler}
        error_message={'Atente ao limite de 6 a 100 characteres'}
      />
      <TextArea
        labelText={'Mensagem:'}
        txtAreaName={'postMsg'}
        placeholder={'Sobre o que você está pensando...'}
        value={values.postMsg}
        pattern={'.{6,700}$'}
        chars={count.postMsg}
        maxLength={700}
        showCharLimit={false}
        onChange={onChangeHandler}
        error_message={'Limite de 700 characteres atingido'}
      />
      <Input
        labelText={'Tags:'}
        inputName={'postTags'}
        inputType={'text'}
        placeholder={'Insira as tags serparadas por vírgula'}
        value={values.postTags}
        // pattern={'^\s*\w+(?:\s*,\s*\w+)*\s*$'}
        onChange={onChangeHandler}
        error_message={'Utilize vírgulas para separar as tags, evite utilizar espaços'}
      />
      <span className='text-xs font-semibold text-red-500 self-center'>
        {response.error}
      </span>

      {response.loading ? (
        <Button disabled={true} buttonText={'Aguarde'} />
      ) : (
        <Button disabled={false} buttonText={'Postar'} />
      )}
    </form>
  )
}
