const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/varun', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Application running on: http://localhost:${port}`)
})