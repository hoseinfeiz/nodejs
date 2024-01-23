const Category = require('../models/Category')
const Post = require('../models/Post')
const homepageController = async (req, res) => {
  const cats = await Category.findAll()
  const catsArr = []
  cats.forEach((cat) => {
    catsArr.push(cat.dataValues.name)
  })
  const posts = await Post.findAll({
    limit: 2,
  })

  res.render('homepage', {
    catsArr,
    posts,
  })
}

module.exports = homepageController
