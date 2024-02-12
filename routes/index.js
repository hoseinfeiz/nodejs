const express = require('express')
const { body } = require('express-validator')
const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')
const searchController = require('../controllers/searchController')
const signinController = require('../controllers/signinController')
const signupController = require('../controllers/signupController')

const router = express.Router()

router.get('/post/:id', postController)
router.get('/page/:p_number', homepageController)
router.get('/search', searchController)
router.get('/login', signinController.get)
router.post('/login', signinController.post)
router.get('/signup', signupController.get)
router.post(
  '/signup',
  body('password').notEmpty().isLength({ min: 6 }),
  body('name').notEmpty(),
  body('email').notEmpty().isEmail().normalizeEmail(),
  signupController.post
)

router.get('/', homepageController)

module.exports = router
