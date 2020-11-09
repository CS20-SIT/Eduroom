const express = require('express')
const router = express.Router()
const {getWishlist,getMycourse,postDeleteWishlist}= require('../controllers/user/user')

router.get('/getWishlist', getWishlist)
router.get('/getMycourse', getMycourse)
router.post('/postDeleteWishlist', postDeleteWishlist)

module.exports = router