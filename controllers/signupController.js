const User = require('../models/User')
const { validationResult } = require('express-validator')
const get = (req, res) => {
  res.render('signup', {
    errors: [],
  })
}

const post = async (req, res) => {
  const hashedPass = await User.hashPassword(req.body.password)
  const result = validationResult(req)
  const err = result.array()
  const existEmail = await User.findOne({
    where: {
      email: req.body.email,
    },
  })
  if (existEmail) {
    err.push({
      type: 'field',
      value: 'doplicated',
      msg: 'Email exist!, please enter another email',
      path: 'email',
      location: 'body',
    })
  }
  console.log('resulttttt', result)
  if (result.isEmpty() && !existEmail) {
    const userId = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      age: 2,
    })
    return userId
      ? res.redirect('/login')
      : res.render('signup', { errors: [] })
  }

  res.render('signup', {
    errors: err,
  })
}

module.exports = {
  get,
  post,
}
