export default function FormField ({ type, name, placeholder, value, handleChange }) {
  return (
    <input
      type={type}
      name={name}
      required
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className='w-full px-4 py-2 border-2 rounded-lg border-border-1 focus-visible:outline-none focus-visible:border-primary-1'
    />
  )
}
