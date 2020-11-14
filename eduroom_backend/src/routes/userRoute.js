const express = require('express')
const router = express.Router()
const {getWishlist,getMycourse,postDeleteWishlist,getProfile,postEditProfile,getCheckPassword,postNewPassword}=require('../controllers/user/user')

router.post('/getWishlist', getWishlist)
router.post('/getMycourse', getMycourse)
router.post('/postDeleteWishlist', postDeleteWishlist)

router.post('/getProfile', getProfile)
router.post('/postEditProfile', postEditProfile)
router.post('/getCheckPassword', getCheckPassword)
router.post('/postNewPassword', postNewPassword)

module.exports = router