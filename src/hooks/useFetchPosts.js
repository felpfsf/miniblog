import { useEffect, useState } from 'react'

import { db } from '../services/firebase'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  where
} from 'firebase/firestore'

export const useFetchPosts = (docCollection, search = null, uid = null) => {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const [cancelled, setCancelled] = useState(false)

  useEffect(() => {
    async function loadData() {
      if (cancelled) {
        return
      }

      setLoading(true)

      const collectionRef = await collection(db, docCollection)

      try {
        let q
        q = await query(collectionRef, orderBy('createdAt', 'desc'))

        await onSnapshot(q, QuerySnapshot => {
          setPosts(
            QuerySnapshot.docs.map(post => ({
              id: post.id,
              ...post.data()
            }))
          )
        })
      } catch (error) {
        console.error(error)
        setError(error.message)

        setLoading(false)
      }
    }
    loadData()
  }, [docCollection, search, uid, cancelled])

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { posts, loading, error }
}
