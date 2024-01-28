const express = require('express')
const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')
const searchController = require('../controllers/searchController')

const router = express.Router()

router.get('/post/:id', postController)
router.get('/page/:p_number', homepageController)
router.get('/search', searchController)
router.get('/', homepageController)

module.exports = router
