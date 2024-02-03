const User = require('../models/User')

const get = (req, res) => {
  res.render('signup', {})
}

const post = async (req, res) => {
  const userId = await User.create({
    email: req.body.email,
    password: req.body.password,
  })
  console.log(userId)
  userId ? res.redirect('/login') : res.render('signup')
}

module.exports = {
  get,
  post,
}
