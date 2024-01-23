const Post = require('../models/Post')
const data = require('./posts.json')
const fillPost = () => {
  data.forEach(async (post) => {
    await Post.create({
      ...post,
      created_at: new Date(post.created_at).getTime(),
      category_id: post.category,
    })
  })
}

fillPost()
