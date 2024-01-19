import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch (url) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        const data = await response.data

        setData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return data
}
