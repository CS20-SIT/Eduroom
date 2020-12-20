const express = require('express')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const {
	fetchRoom,
	createRoom,
	fetchRoomHistory,
	createKahootHistory,
	player,
	fetchExactlyRoom,
	historyPlayer,
	createHistoryPlayerAnswer,
	historyPlayerFirstTime,
	fetchScoreRank,
	Upload,
	createQuiz,
	fetchQuiz,
	fetchScoreRankForPlayer,
	checkRoomClose,
} = require('../controllers/edqiz/roomController')
const { isInstructor } = require('../middleware/isInstructor')
const { uploadToGCSHandler } = require('../middleware/multer')

router.get('/rooms', jwtAuthenicate, isInstructor, fetchRoom)
router.get('/question/:sessionid', fetchQuiz)
router.post('/room', createRoom)
router.get('/roomHistory', fetchRoomHistory)
router.post('/roomHistory', createKahootHistory)
router.post('/roomHistoryplayer', jwtAuthenicate, historyPlayer)
router.post('/roomHistoryplayerFirstTime', jwtAuthenicate, historyPlayerFirstTime)
router.post('/createQuiz', jwtAuthenicate, isInstructor, createQuiz)
router.post('/player', jwtAuthenicate, player)
router.get('/sessionid/:pin', fetchExactlyRoom)
router.get('/getRankScore/:sessionid', fetchScoreRank)
router.get('/getRankScorePlayer/:sessionid', fetchScoreRankForPlayer)
router.post('/upload/picture', jwtAuthenicate, isInstructor, uploadToGCSHandler('edqiz/question'), Upload)
router.post('/createHistoryPlayerAnswer', jwtAuthenicate, createHistoryPlayerAnswer)
router.post('/closeRoom', checkRoomClose)

module.exports = router
