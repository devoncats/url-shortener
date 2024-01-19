export default function UsedUrl ({ data }) {
  if (data.length > 0) {
    return (
      <section className='px-12'>
        <h2 className='text-xl font-medium'>Already used urls</h2>
        <ul>
          {data.map((item) => (
            <li key={item.short}>
              <p>{item.short}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
