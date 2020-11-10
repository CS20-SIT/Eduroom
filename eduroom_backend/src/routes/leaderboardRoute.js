const express = require('express')
const router = express.Router()
const { sortRank } = require('../controllers/Leaderboard/leaderboard')

router.get('/', sortRank)

module.exports = router;