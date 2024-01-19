import axios from 'axios'
import { useState } from 'react'

export default function useForm (data) {
  const [long, setLong] = useState('')
  const [short, setShort] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'long') setLong(value)
    if (name === 'short') setShort(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (data.find((item) => item.short === short)) {
      setError(true)
      setShort('')
      return
    }

    axios.post('/', { long, short })

    setLong('')
    setShort('')
    setError(false)
  }

  return { long, short, error, handleChange, handleSubmit }
}
