const express = require('express')
const router = express.Router()
const { selectForum, showForum, setForum,createComment } = require('../controllers/forumController')

router.get('/', showForum)
router.post('/create', setForum)
router.get('/:id', selectForum)
router.post('/comment',createComment)

module.exports = router