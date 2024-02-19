const md5 = require('md5')
const mailController = (req, res) => {
  const token = md5(req.body.email + new Date())
  res.render('email/auth', {
    url: `${process.env.URL}/reset?token=${token}`,
    title: 'reset password',
    message: 'for reset password click on below button',
  })
}

module.exports = mailController
