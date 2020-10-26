const express = require('express')
const router = express.Router()
const { forumTest } = require('../controllers/forumController')
const { createForum } = require('../controllers/forumController')

router.get('/', forumTest)
router.post('/create', createForum)

module.exports = router