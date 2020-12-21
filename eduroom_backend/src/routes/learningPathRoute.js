const express = require('express')
const router = express.Router()
const {
	getPathList,
	getNodeByPath,
	getExerciseByNodeId,
	getNodeType,
	getQuizByNodeId,
	completeNode,
} = require('../controllers/learningpath/learningContoller')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
router.get('/', getPathList)
router.get('/path', jwtAuthenicate, getNodeByPath)
router.get('/exercise', jwtAuthenicate, getExerciseByNodeId)
router.get('/nodeType', jwtAuthenicate, getNodeType)
router.get('/quizByNodeId', jwtAuthenicate, getQuizByNodeId)
router.post('/completeNode', jwtAuthenicate, completeNode)

module.exports = router
