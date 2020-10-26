const express = require('express')
const router = express.Router()
const { test, getAnn, postAnn } = require('../controllers/graderCreate/test')

router.get('/', test)
router.get('/ann', getAnn)
router.post('/cann', postAnn)

module.exports = router