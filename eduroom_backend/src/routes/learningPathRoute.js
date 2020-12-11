const express = require('express')
const router = express.Router()
const { getPathList, getNodeByPath } = require('../controllers/learningpath/learningContoller')
router.get('/',getPathList)
router.get('/path', getNodeByPath)


module.exports = router;