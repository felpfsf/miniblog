import { useEffect, useReducer, useState } from 'react'

import { db } from '../services/firebase'
import { doc, deleteDoc } from 'firebase/firestore'

const initialState = {
  loading: null,
  error: null
}

const deletedReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null }

    case 'DELETED_DOC':
      return { loading: false, error: null }

    case 'ERROR':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userDeletePost = docCollection => {
  const [response, setResponse] = useReducer(deletedReducer, initialState)
  const [cancelled, setCancelled] = useState(false)

  const checkIfIsCancelledBeforeDispatch = action => {
    if (!cancelled) {
      dispatch(action)
    }
  }

  const deletePost = async id => {
    checkIfIsCancelledBeforeDispatch({
      type: 'LOADING'
    })

    try {
      const deletedPost = await deleteDoc(doc(db, docCollection, id))

      checkIfIsCancelledBeforeDispatch({
        type: 'DELETED_DOC',
        payload: deletedPost
      })
    } catch (error) {
      console.error(error)
      checkIfIsCancelledBeforeDispatch({
        type: 'ERROR',
        payload: error.message
      })
    }
  }

  useEffect(() => {
    return setCancelled(true)
  }, [])

  return { deletePost, response }
}
