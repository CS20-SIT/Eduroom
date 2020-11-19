const express = require('express')
const router = express.Router()
const { selectForum, showForum, setForum,createComment,selectRoom,deleteComment} = require('../controllers/forumController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

router.get('/', showForum)
router.get('/:id', selectForum)
router.post('/create', jwtAuthenicate, setForum)
router.post('/comment', jwtAuthenicate,createComment)
router.get('/room/:roomname',selectRoom)
router.delete('/comment', jwtAuthenicate, deleteComment) //api.delete
//router.put = edit // api.put 

module.exports = router