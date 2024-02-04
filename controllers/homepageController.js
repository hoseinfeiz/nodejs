const Category = require('../models/Category')
const Post = require('../models/Post')
const homepageController = async (req, res) => {
  // console.log('paramssssss', req.body.search)
  const catid = Number(req.query.catid)
  const page = req.params.p_number ? Number(req.params.p_number) : 1
  let countPost = 0
  const cats = await Category.findAll()
  let posts = []
  const offset = (page - 1) * 10
  // eslint-disable-next-line no-unused-expressions
  catid
    ? ((posts = await Post.findAll({
        where: { category_id: catid },
        limit: 10,
        offset,
      })),
      (countPost = await Post.count({ where: { category_id: catid } })))
    : ((posts = await Post.findAll({ limit: 10, offset })),
      (countPost = await Post.count()))
  const catsArr = []
  cats.forEach((cat) => {
    catsArr.push(cat.dataValues)
  })

  res.render('homepage', {
    catsArr,
    posts,
    catid,
    countPost,
    user: req.user,
  })
}

module.exports = homepageController
