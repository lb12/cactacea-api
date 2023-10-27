const express = require('express')
const app = express()

const cactusRouter = require('./modules/sample/interfaces/routes/cactus-routes')

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Hello World!'
  })
})

app.use(cactusRouter)


const PORT = process.env.PORT || 5010

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
