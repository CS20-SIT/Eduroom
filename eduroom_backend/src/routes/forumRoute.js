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
	getCategory,
	searchForum,
	category
} = require('../controllers/forumController')
const { jwtAuthenicate,jwtByPassAuthenicate } = require('../middleware/jwtAuthenticate')

router.get('/', jwtByPassAuthenicate, showForum)
router.get('/category', getCategory)
router.get('/subcategory',category)
router.get('/:id', jwtByPassAuthenicate, selectForum)
router.post('/like/:id', jwtAuthenicate, setLike)
router.post('/comment', jwtAuthenicate, createComment)
router.post('/create', jwtAuthenicate, setForum)
router.get('/room/:roomname', jwtByPassAuthenicate, selectRoom)
router.post('/comment/:id', jwtAuthenicate, deleteComment)
router.delete('/:id', jwtAuthenicate, deleteForum)
router.put('/:id', jwtAuthenicate, editForum)
router.post('/search',jwtAuthenicate, searchForum)
//router.put = edit // api.put

module.exports = router
