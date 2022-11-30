import { useEffect, useReducer, useState } from 'react'

import { db } from '../services/firebase'
import { addDoc, collection, Timestamp } from 'firebase/firestore'

const initialState = {
  loading: null,
  error: null
}

const insertReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null }

    case 'INSERTED_DOC':
      return { loading: false, error: null }

    case 'ERROR':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userInsertDoc = docCollection => {
  const [response, dispatch] = useReducer(insertReducer, initialState)

  const [cancelled, setCancelled] = useState(false)

  const checkIfIsCancelledBeforeDispatch = action => {
    if (!cancelled) {
      dispatch(action)
    }
  }

  const insertDoc = async document => {
    checkIfIsCancelledBeforeDispatch({
      type: 'LOADING',
      payload: insertDoc
    })
    try {
      const newDoc = { ...document, createdAt: Timestamp.now() }

      const insertDoc = await addDoc(collection(db, docCollection), newDoc)

      checkIfIsCancelledBeforeDispatch({
        type: 'INSERTED_DOC',
        payload: insertDoc
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

  return { insertDoc, response }
}
