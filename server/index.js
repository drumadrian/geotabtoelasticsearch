const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// routes
const { elasticsearch } = require('./routes')

const PORT = 9000

app.use(cors(), bodyParser.json({ type: 'application/*+json' }))

app.use('/api', elasticsearch)

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

