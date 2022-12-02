import { useEffect, useState } from 'react'
import { db } from '../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const useFetchSinglePost = (docCollection, id) => {
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const [cancelled, setCancelled] = useState(false)

  useEffect(() => {
    async function loadPost() {
      if (cancelled) return

      setLoading(true)

      try {
        const postRef = await doc(db, docCollection, id)
        const postSnap = await getDoc(postRef)

        setPost(postSnap.data())

        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)

        setLoading(false)
      }
    }

    loadPost()
  }, [docCollection, id, cancelled])

  useEffect(() => {
    if (cancelled) {
      return () => setCancelled(true)
    }
  }, [])

  return { post, loading, error }
}
