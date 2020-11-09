const express = require('express')
const router = express.Router()
const { selectForum, showForum, createForum } = require('../controllers/forumController')

router.get('/', showForum)
router.post('/create', createForum)
router.get('/id', selectForum)

module.exports = router