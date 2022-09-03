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

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url)
      .then(response => {
        setData(response.data) 
        setLoad(true)
      })
      .catch(e => {
          console.log(e)
      })
    }
    if(!isLoaded) {
      fetchData()
    }

  }, [url, isLoaded])
  
  return { data, isLoaded }
}