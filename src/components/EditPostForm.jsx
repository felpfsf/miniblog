import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'

import { useUpdatePost } from '../hooks/useUpdatePost'

import { Button } from './Button'
import { Input } from './Input'
import { TextArea } from './TextArea'

export const EditPostForm = ({ title, id, imgUrl, headline, message, tags }) => {
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

  const onChangeHandler = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(values);

    /**
     * Validar dados [checar o pattern]
     * Criar array de tags [ok]
     * check input [ok]
     */

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

    // update post
    updatePost(postData, id)

    // redirect to post
    navigate('/dashboard')
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
        // pattern={'^[A-Za-z/\s*]{3,}'}
        onChange={onChangeHandler}
        error_message={'Insira o titulo do post'}
      />
      <Input
        labelText={'URL da imagem:'}
        inputName={'postImgUrl'}
        inputType={'text'}
        placeholder={'http://exemplo.com/imagem.jpg'}
        value={values.postImgUrl}
        // pattern={'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)'}
        onChange={onChangeHandler}
        error_message={'Insira uma URL válida para o post'}
      />
      <Input
        labelText={'Uma manchete para seu post:'}
        inputName={'postHeadline'}
        inputType={'text'}
        placeholder={'Pense em uma boa manchete'}
        value={values.postHeadline}
        // pattern={'^[A-Za-z/\s*]{3,}'}
        onChange={onChangeHandler}
        error_message={'Insira uma URL válida para o post'}
      />
      <TextArea
        labelText={'Mensagem:'}
        txtAreaName={'postMsg'}
        placeholder={'Sobre o que você está pensando...'}
        value={values.postMsg}
        pattern={'^[A-Za-z]{3,}'}
        onChange={onChangeHandler}
        error_message={'Insira uma imagem para o post'}
      />
      <Input
        labelText={'Tags:'}
        inputName={'postTags'}
        inputType={'text'}
        placeholder={'Insira as tags serparadas por vírgula'}
        value={values.postTags}
        // pattern={'/\s*,\s*/'}
        onChange={onChangeHandler}
        error_message={'Utilize vírgulas para separar as tags'}
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
