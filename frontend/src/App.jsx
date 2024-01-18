import { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const [long, setLong] = useState('')
  const [short, setShort] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

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
    if (data.find(item => item.short === short)) {
      setError(true)
      setShort('')
      return
    }

    axios.post('/', { long, short })
      .then(response => {
        console.log(response)
      })

    setShort('')
    setLong('')
    setError(false)
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <article className='p-6 border rounded-xl border-black'>
        <section className='flex items-center justify-center gap-2'>
          <img src='/logo.svg' alt='Logo of the project' />
          <h1 className='text-3xl font-semibold'>Urlipsum</h1>
        </section>

        <section className='lg:w-[30vw] w-screen h-fit flex flex-col gap-2 justify-between px-12 py-4'>
          <h2 className='text-xl font-medium'>Create a short URL!</h2>

          <form className='grid gap-4' onSubmit={handleSubmit}>
            <input
              type='url'
              name='long'
              id='long'
              required
              value={long}
              onChange={handleChange}
              placeholder='https://example.com/very/long/url'
              className='w-full px-4 py-2 border rounded-lg border-black'
            />

            <fieldset className='flex items-end gap-4'>
              <input
                type='text'
                name='short'
                id='short'
                required
                value={short}
                onChange={handleChange}
                placeholder='short-name'
                className='w-full px-4 py-2 border rounded-lg border-black'
              />

              <button
                type='submit'
                className='w-[12rem] h-fit px-4 py-2 border rounded-lg border-black'
              >
                Shorten
              </button>
            </fieldset>
          </form>

          {error && <p className='text-red-500'>Short name already exists!</p>}
        </section>

        {data &&
          <section className='px-12'>
            <h2 className='text-xl font-medium'>Already used urls</h2>
            <ul>
              {data.map((item) => (
                <li key={item.short}>
                  <p>{item.short}</p>
                </li>
              ))}
            </ul>
          </section>}
      </article>
    </main>
  )
}

export default App
