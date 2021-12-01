import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error,setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
    .catch(error =>{
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  // Query Cache --- we go Home to Traditional SUperHeroes ,
  //  every time we see loading text but incase of useQuery 
// every query result is cached for 5 minutes and react-query relies on cache for subsquent request.
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error){
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div>{hero.name}</div>
      })}
    </>
  )
}