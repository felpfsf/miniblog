import { useEffect, useReducer, useState } from 'react'

import { db } from '../services/firebase'
import { doc, updateDoc } from 'firebase/firestore'

const initialState = {
  loading: null,
  error: null
}

const updateReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null }
    case 'UPDATED_DOC':
      return { loading: false, error: null }
    case 'ERROR':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const useUpdatePost = docCollection => {
  const [response, dispatch] = useReducer(updateReducer, initialState)
  const [cancelled, setCancelled] = useState(false)

  const checkIfIsCancelledBeforeDispatch = action => {
    if (!cancelled) {
      dispatch(action)
    }
  }

  const updatePost = async (data, id) => {
    checkIfIsCancelledBeforeDispatch({
      type: 'LOADING'
    })

    try {
      const docRef = doc(db, docCollection, id)

      const updatedPost = await updateDoc(docRef, data)

      checkIfIsCancelledBeforeDispatch({
        type: 'UPDATED_DOC',
        payload: updatedPost
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

  return { updatePost, response }
}
