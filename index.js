const express = require('express')
const router = require('./routes')

const app = express()

const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', router)

app.use((req, res) => {
  res.send('page not found')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
  console.log('server is running ...')
})
