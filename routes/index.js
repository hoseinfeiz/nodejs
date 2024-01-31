const express = require('express')
const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')
const searchController = require('../controllers/searchController')
const signinController = require('../controllers/signinController')

const router = express.Router()

router.get('/post/:id', postController)
router.get('/page/:p_number', homepageController)
router.get('/search', searchController)
router.get('/login', signinController)
router.post('/login', signinController)

router.get('/', homepageController)

module.exports = router
