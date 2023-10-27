const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Hello World!'
  })
})

const PORT = process.env.PORT || 5010

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
