import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Get API data, store.
 * @param { String } url
 * @return { Object } data
 * @return { Boolean } error
 * @return { Boolean } isLoaded
 */
export function useApi(url) {
  const [data, setData] = useState({})
  const [isLoaded, setLoad] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url)
      .then(response => {
        setData(response.data) 
        setLoad(true)
      })
      .catch(e => {
          console.log(e)
          setError(true)
      })
    }
    fetchData()

  }, [url])
  
  return { data, isLoaded, isError }
}