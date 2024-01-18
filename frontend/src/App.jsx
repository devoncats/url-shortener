import { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const [long, setLong] = useState('')
  const [short, setShort] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setData(data))
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'long') setLong(value)
    if (name === 'short') setShort(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/', { long, short })
      .then(response => {
        console.log(response)
      })
  }

  return (
    <main className='min-h-screen grid place-content-center gap-4'>
      <section className='flex items-center justify-center gap-2'>
        <img src='/logo.svg' alt='Logo of the project' />
        <h1 className='text-3xl font-semibold'>Urlipsum</h1>
      </section>

      <ul>
        {data.map((item) => (
          <li key={item.short}>
            <p>{item.short}</p>
            <p>{item.long}</p>
          </li>
        ))}
      </ul>

      <section className='w-[25vw] h-fit flex flex-col gap-6 justify-between px-12 py-4 border rounded-xl border-black'>
        <h2 className='text-xl'>Create a short URL!</h2>

        <form onSubmit={handleSubmit}>
          <input
            type='url'
            name='long'
            required
            value={long}
            onChange={handleChange}
            placeholder='https://example.com/very/long/url'
            className='w-full px-2 border rounded-lg border-black'
          />

          <input
            type='text'
            name='short'
            required
            value={short}
            onChange={handleChange}
            placeholder='short-name'
            className='w-full px-2 border rounded-lg border-black'
          />

          <button
            type='submit'
            className='w-full mt-4 px-4 py-2 border rounded-lg border-black'
          >
            Shorten
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
