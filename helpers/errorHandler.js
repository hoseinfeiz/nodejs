const handler404 = (req, res) => {
  res.send('page not found')
}

const handlerOther = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}

module.exports = {
  handler404,
  handlerOther,
}
