const express = require('express')
const router = express.Router()
const { selectForum, showForum, setForum,createComment,selectRoom,deleteComment,setLike, editForum} = require('../controllers/forumController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

router.get('/', jwtAuthenicate ,showForum)
router.get('/:id', jwtAuthenicate ,selectForum)
router.post('/like/:id',jwtAuthenicate,setLike)
router.post('/comment', jwtAuthenicate,createComment)
router.post('/create', jwtAuthenicate, setForum)
router.get('/room/:roomname',jwtAuthenicate , selectRoom)
router.delete('/comment', jwtAuthenicate, deleteComment) //api.delete
router.put('/:id',jwtAuthenicate,editForum)
//router.put = edit // api.put 

module.exports = router