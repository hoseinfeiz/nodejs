const express = require('express')
const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')

const router = express.Router()

router.get('/post/:id', postController)
router.get('/', homepageController)

module.exports = router
