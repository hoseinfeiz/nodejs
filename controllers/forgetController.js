const sendEmail = require('../configs/sendEmail')
const path = require('path')
const ejs = require('ejs')
const md5 = require('md5')
const User = require('../models/User')
const { validationResult } = require('express-validator')
const get = (req, res) => {
  res.render('forget', {
    errors: [],
  })
}

const post = async (req, res) => {
  const token = md5(req.body.email + new Date())

  const result = validationResult(req)
  const err = result.array()
  const emailExist = await User.findOne({
    where: {
      email: req.body.email,
    },
  })

  if (emailExist && result.isEmpty()) {
    const html = await ejs.renderFile(
      path.join(__dirname, '../views/email/auth.ejs'),
      {
        url: `${process.env.URL}/reset?token=${token}`,
        title: 'reset password',
        message: 'for reset password click on below button',
      }
    )
    await User.update(
      {
        token,
      },
      {
        where: {
          email: req.body.email,
        },
      }
    )
    sendEmail({ html })
    err.push({
      type: 'success',
      value: 'email',
      msg: 'Reset password successfully sent',
      path: 'email',
      location: 'body',
    })
    return res.render('forget', {
      errors: err,
    })
  }

  if (!emailExist) {
    err.push({
      type: 'danger',
      value: 'not exist',
      msg: 'Email not exist!, please enter correct email',
      path: 'email',
      location: 'body',
    })
  }
  res.render('forget', {
    errors: err,
  })
}

module.exports = {
  get,
  post,
}
