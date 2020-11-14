const express = require('express')
const router = express.Router()
const {getWishlist,getMycourse,postDeleteWishlist}= require('../controllers/user/user')

router.post('/getWishlist', getWishlist)
router.post('/getMycourse', getMycourse)
router.post('/postDeleteWishlist', postDeleteWishlist)

module.exports = router