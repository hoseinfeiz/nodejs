const isLoggedin = (req, res, next) => {
  if (!req.user) {
    req.flash('warning', 'You must first login')
    return res.redirect('/login')
  }
  next()
}

const isNotLoggedin = (req, res, next) => {
  if (req.user) {
    return res.redirect('/')
  }
  next()
}

module.exports = {
  isLoggedin,
  isNotLoggedin,
}
