const User = require('../models/User')
const { validationResult } = require('express-validator')

const get = (req, res) => {
  res.render('reset', {
    token: req.query.token,
    errors: [],
  })
}

const post = async (req, res) => {
  console.log('tokennnnn', req.query.token)
  const hashedPass = await User.hashPassword(req.body.password)
  const result = validationResult(req)
  const err = result.array()
  const existToken = await User.findOne({
    where: {
      token: req.query.token,
    },
  })
  if (existToken && result.isEmpty()) {
    const passUpdate = await User.update(
      {
        password: hashedPass,
      },
      {
        where: {
          token: req.query.token,
        },
      }
    )
    err.push({
      type: 'success',
      value: 'email',
      msg: 'your password successfully changed',
      path: 'password',
      location: 'body',
    })
    return res.render('reset', {
      token: '',
      errors: err,
    })
  }

  if (!existToken) {
    err.push({
      type: 'danger',
      value: 'email',
      msg: 'change password failed, please try again',
      path: 'password',
      location: 'body',
    })
  }

  res.render('reset', {
    errors: err,
    token: '-',
  })
}

module.exports = {
  get,
  post,
}
