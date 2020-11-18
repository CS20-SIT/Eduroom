const express = require('express')
const router = express.Router()
const { selectForum, showForum, setForum,createComment,selectRoom} = require('../controllers/forumController')

router.get('/', showForum)
router.post('/create', setForum)
router.get('/:id', selectForum)
router.post('/comment',createComment)
router.get('/room/:roomname',selectRoom)

module.exports = router