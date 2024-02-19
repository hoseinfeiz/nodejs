const express = require('express')
const { body } = require('express-validator')
const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')
const searchController = require('../controllers/searchController')
const forgetController = require('../controllers/forgetController')
const resetController = require('../controllers/resetController')
const signinController = require('../controllers/signinController')
const signupController = require('../controllers/signupController')
const dashboardController = require('../controllers/dashboardController')
const signoutController = require('../controllers/signoutController')
const { isLoggedin, isNotLoggedin } = require('../helpers/auth')
const mailController = require('../controllers/mailController')

const router = express.Router()

router.get('/post/:id', postController)
router.get('/page/:p_number', homepageController)
router.get('/search', searchController)
router.get('/dashboard', isLoggedin, dashboardController)
router.get('/signout', signoutController)
router.get('/email', mailController)
router.get('/login', isNotLoggedin, signinController.get)
router.post('/login', isNotLoggedin, signinController.post)
router.get('/forget', isNotLoggedin, forgetController.get)
router.post(
  '/forget',
  isNotLoggedin,
  body('email').notEmpty().isEmail().normalizeEmail(),
  forgetController.post
)
router.get('/signup', isNotLoggedin, signupController.get)
router.post(
  '/signup',
  isNotLoggedin,
  body('password').notEmpty().isLength({ min: 6 }),
  body('name').notEmpty(),
  body('email').notEmpty().isEmail().normalizeEmail(),
  signupController.post
)
router.get('/reset', isNotLoggedin, resetController.get)
router.post(
  '/reset',
  isNotLoggedin,
  body('password').notEmpty().isLength({ min: 6 }),
  resetController.post
)

router.get('/', homepageController)

module.exports = router
