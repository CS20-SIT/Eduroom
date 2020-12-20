const express = require('express')
const router = express.Router()
const { getPathList, getNodeByPath, getExerciseByNodeId } = require('../controllers/learningpath/learningContoller')
router.get('/', getPathList)
router.get('/path', getNodeByPath)
router.get('/exercise', getExerciseByNodeId)

module.exports = router
