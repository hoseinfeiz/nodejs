const express = require('express')
const router = require('./routes')
const flash = require('connect-flash')
const cookieparser = require('cookie-parser')
const session = require('express-session')
const { handler404, handlerOther } = require('./helpers/errorHandler')

const app = express()

const PORT = 3000

app.use(cookieparser())
app.use(flash())
app.use(
  session({
    secret: 'keyboard cat',
  })
)
require('./helpers/passport')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use('/', router)

app.use(handler404)

app.use(handlerOther)

app.listen(PORT, () => {
  console.log('server is running ...')
})
