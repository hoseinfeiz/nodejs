const express = require('express')
const router = require('./routes')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./models/User')
const app = express()

const PORT = 3000

app.use(passport.initialize())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use('/', router)
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const user = await User.findOne({ where: { email } })
      try {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
)

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
