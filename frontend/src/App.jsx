import Form from './components/Form'
import UsedUrl from './components/UsedUrl'
import useFetch from './hooks/useFetch'
import useForm from './hooks/useForm'

function App () {
  const data = useFetch('http://localhost:3000')
  const { long, short, error, handleChange, handleSubmit } = useForm(data)

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-background-1 text-foreground-1'>
      <article className='p-6 border rounded-xl shadow-sm bg-background-2 border-border-1'>
        <section className='flex items-center justify-center gap-2'>
          <img src='/logo.svg' alt='Logo of the project' />
          <h1 className='text-3xl font-semibold'>Urlipsum</h1>
        </section>

        <section className='sm:w-[30vw] w-screen h-fit flex flex-col gap-2 justify-between px-12 py-4'>
          <h2 className='text-xl font-medium'>Create a short URL!</h2>
          <Form
            long={long}
            short={short}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          {error && <p className='text-red-500'>Short name already exists!</p>}
        </section>

        <UsedUrl data={data} />
      </article>
    </main>
  )
}

export default App
