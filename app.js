const express = require('express')
const app = express()
const port = 3000

app.get('/word', (req, res) => {
  res.send('Hello Word!')
})

app.get('/find', (req, res) => {
    res.send('Hello '+ req.query.name)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})