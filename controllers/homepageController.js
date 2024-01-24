const Category = require('../models/Category')
const Post = require('../models/Post')
const homepageController = async (req, res) => {
  const catid = Number(req.query.catid)

  const cats = await Category.findAll()
  let posts = []
  catid
    ? (posts = await Post.findAll({ where: { category_id: catid } }))
    : (posts = await Post.findAll())
  const catsArr = []
  cats.forEach((cat) => {
    catsArr.push(cat.dataValues)
  })

  res.render('homepage', {
    catsArr,
    posts,
    catid,
  })
}

module.exports = homepageController
