const User = require('../models/User')

const get = (req, res) => {
  res.render('signup', {})
}

const post = async (req, res) => {
  const hashedPass = await User.hashPassword(req.body.password)

  const userId = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
    age: 2,
  })

  userId ? res.redirect('/login') : res.render('signup')
}

module.exports = {
  get,
  post,
}
