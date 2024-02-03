const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const passport = require('passport')

passport.initialize()

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
