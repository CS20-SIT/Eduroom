const express = require('express')
const router = express.Router()
const { getPathList, getNodeByPath, getExerciseByNodeId, getNodeType } = require('../controllers/learningpath/learningContoller')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
router.get('/', getPathList)
router.get('/path', jwtAuthenicate, getNodeByPath)
router.get('/exercise', jwtAuthenicate, getExerciseByNodeId)
router.get('/nodeType', jwtAuthenicate, getNodeType)

module.exports = router
