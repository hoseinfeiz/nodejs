const Category = require('../models/Category')
const Post = require('../models/Post')
const { Op } = require('sequelize')
const searchController = async (req, res) => {
  console.log('paramssssss', req.query.search)

  const cats = await Category.findAll()
  const posts = await Post.findAll({
    where: {
      title: {
        [Op.like]: `%${req.query.search}%`,
      },
    },
  })

  // eslint-disable-next-line no-unused-expressions

  const catsArr = []
  cats.forEach((cat) => {
    catsArr.push(cat.dataValues)
  })

  res.render('searchpage', {
    catsArr,
    posts,
  })
}

module.exports = searchController
