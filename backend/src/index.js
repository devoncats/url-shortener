if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes/url.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`)
})

// req the url of origin => create a page that redirects to the url of origin
