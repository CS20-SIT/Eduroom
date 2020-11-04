const express = require('express')
const router = express.Router()
const { forumTest, createForum } = require('../controllers/forumController')

router.get('/', forumTest)
router.post('/create', createForum)
router.post('/id',)

module.exports = router