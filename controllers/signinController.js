const passport = require('passport')
const get = (req, res) => {
  console.log('bodyyyyyy', req.body)
  res.render('signin', {})
}

const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: false,
  session: false,
})

module.exports = {
  get,
  post,
}
