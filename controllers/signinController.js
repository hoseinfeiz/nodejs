const get = (req, res) => {
  console.log('bodyyyyyy', req.body)
  res.render('signin', {})
}

const post = (req, res) => {
  console.log('bodyyyyyy', req.body)
  res.render('signin', {})
}

module.exports = {
  get,
  post,
}
