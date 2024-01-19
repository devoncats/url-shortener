import FormField from './FormField'

export default function Form ({ long, short, handleChange, handleSubmit }) {
  return (
    <form className='grid gap-4' onSubmit={handleSubmit}>
      <FormField
        type='url'
        name='long'
        value={long}
        handleChange={handleChange}
        placeholder='https://example.com/very/long/url'
      />

      <fieldset className='flex items-end gap-4'>
        <FormField
          type='text'
          name='short'
          value={short}
          handleChange={handleChange}
          placeholder='short-name'
        />

        <button
          type='submit'
          className='w-[12rem] h-fit px-4 py-2 border-2 rounded-lg font-semibold text bg-primary-1 border-primary-1 text-white hover:bg-primary-2 hover:border-primary-2'
        >
          Shorten
        </button>
      </fieldset>
    </form>
  )
}
