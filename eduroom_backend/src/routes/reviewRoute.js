const express = require('express')
const router = express.Router()
const {
	createReview,
	getReview
} = require('../controllers/reviewControllers')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

router.post('/create',jwtAuthenicate,createReview)
router.get('/',getReview)
module.exports = router
