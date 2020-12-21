const express = require('express')
const router = express.Router()
const { sortRank, getUserDetail } = require('../controllers/Leaderboard/leaderboard')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

router.get('/', sortRank)
router.get('/userDetail', jwtAuthenicate, getUserDetail)

module.exports = router
