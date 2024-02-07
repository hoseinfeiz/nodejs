const Category = require('../models/Category')
const Post = require('../models/Post')

const postController = async (req, res) => {
  console.log(req.params.id)
  const catsArr = []
  const post = await Post.findByPk(Number(req.params.id))
  const cats = await Category.findAll()
  cats.forEach((cat) => {
    catsArr.push(cat.dataValues)
  })

  res.render('postpage', {
    post: post.dataValues,
    catsArr,
    user: req.user,
  })
}

module.exports = postController
