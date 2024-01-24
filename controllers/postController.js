const Category = require('../models/Category')
const Post = require('../models/Post')

const postController = async (req, res) => {
  const catsArr = []
  const post = await Post.findByPk(req.params.id)
  const cats = await Category.findAll()
  cats.forEach((cat) => {
    catsArr.push(cat.dataValues)
  })
  console.log(post.dataValues)

  res.render('postpage', {
    post: post.dataValues,
    catsArr,
  })
}

module.exports = postController
