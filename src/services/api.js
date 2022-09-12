import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Get API data, store.
 * @param { Number } id
 * @return { Object } user
 * @return { Object } user's performance
 * @return { Object } user's activity
 * @return { Object } users's sessions
 * @return { Boolean } isLoaded
 */
export function useApiPromise(id) {
  const [dataApi, setData] = useState(null)
  const [isLoadedApi, setLoad] = useState(false)
  const [user, setUser] = useState({})
  const [userPerformance, setUserPerformance] = useState({})
  const [userActivity, setUserActivity] = useState({})
  const [userSessions, setUserSessions] = useState({})

  useEffect(() => {
    const promises = [
      axios.get(`http://localhost:3000/user/${id}`),
      axios.get(`http://localhost:3000/user/${id}/performance`),
      axios.get(`http://localhost:3000/user/${id}/activity`),
      axios.get(`http://localhost:3000/user/${id}/average-sessions`)
  ]
    if(dataApi === null) {
        Promise.all(promises)
        .then(fetchedData => {
            setData(fetchedData)
        })
        .catch(err => console.log('error', err))
    } else {
      setUser(dataApi[0].data.data)
      setUserPerformance(dataApi[1].data.data)
      setUserActivity(dataApi[2].data.data)
      setUserSessions(dataApi[3].data.data)
      setLoad(true)
    }

  }, [isLoadedApi, id, dataApi])
  
  return { isLoadedApi, user, userPerformance, userActivity, userSessions }
}