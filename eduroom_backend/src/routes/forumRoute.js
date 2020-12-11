const express = require('express')
const router = express.Router()
const {
	selectForum,
	showForum,
	setForum,
	createComment,
	selectRoom,
	deleteComment,
	setLike,
	editForum,
	deleteForum,
} = require('../controllers/forumController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

router.get('/', jwtAuthenicate, showForum)
router.get('/:id', jwtAuthenicate, selectForum)
router.post('/like/:id', jwtAuthenicate, setLike)
router.post('/comment', jwtAuthenicate, createComment)
router.post('/create', jwtAuthenicate, setForum)
router.get('/room/:roomname', jwtAuthenicate, selectRoom)
router.post('/comment/:id', jwtAuthenicate, deleteComment)
router.delete('/:id', jwtAuthenicate, deleteForum)
router.put('/:id', jwtAuthenicate, editForum)
//router.put = edit // api.put

module.exports = router
