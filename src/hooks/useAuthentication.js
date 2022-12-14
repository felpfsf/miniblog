import { useEffect, useState } from 'react'

import { db } from '../services/firebase'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile
} from 'firebase/auth'


export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled() {
    if (cancelled) {
      return
    }
  }

  const createUser = async data => {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName
      })
    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage

      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres'
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'E-mail já cadastrado'
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente novamente mais tarde'
      }

      setError(systemErrorMessage)
    }
    setLoading(false)
  }

  const logIn = async data => {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      let systemErrorMessage

      if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuário não encontrado'
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta'
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente novamente mais tarde'
      }

      setError(systemErrorMessage)
    }
    setLoading(false)
  }

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider()
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      let systemErrorMessage

      if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuário não encontrado'
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta'
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente novamente mais tarde'
      }

      setError(systemErrorMessage)
    }
    setLoading(false)
  }

  const logOut = () => {
    checkIfIsCancelled()
    signOut(auth)
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { auth, createUser, error, loading, logIn, logOut, signInWithGoogle }
}
