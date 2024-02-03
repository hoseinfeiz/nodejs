const passport = require('passport')
const get = (req, res) => {
  // console.log('req.flash', req.flash())
  res.render('signin', {
    flash: req.flash(),
  })
}

const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
  session: false,
})

module.exports = {
  get,
  post,
}
