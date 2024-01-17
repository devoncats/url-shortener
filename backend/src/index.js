if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('oal chavo')
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`)
})

// req the url of origin => create a page that redirects to the url of origin
