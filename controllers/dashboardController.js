const Post = require('../models/Post')

const dashboardController = async (req, res) => {
  const posts = await Post.findAll({
    limit: 10,
  })
  console.log(posts[0].title)
  res.render('dashboard', {
    posts,
  })
}

module.exports = dashboardController
