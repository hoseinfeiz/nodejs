const nodemailer = require('nodemailer')
const sendEmail = async ({ html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: ' <hamid.dadash68@gmail.com>', // sender address
    to: 'hosham.rashidi1972@gmail.com',
    subject: 'reset password',
    text: 'khubi',
    html, // html body
  })

  console.log('Message sent: %s', info.messageId)
}

module.exports = sendEmail
