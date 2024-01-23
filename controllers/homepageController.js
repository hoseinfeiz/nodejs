const Category = require('../models/Category')
const Post = require('../models/Post')
const homepageController = async (req, res) => {
  const cats = await Category.findAll()
  const catsArr = []
  cats.forEach((cat) => {
    catsArr.push(cat.dataValues.name)
  })
  const posts = await Post.findAll({
    where: {
      id: 3,
    },
  })
  console.log(posts[0].dataValues.title)

  res.render('homepage', {
    catsArr,
  })
}

module.exports = homepageController
