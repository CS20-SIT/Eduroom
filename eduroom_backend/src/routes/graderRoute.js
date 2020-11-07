const express = require('express')
const router = express.Router()
const { test, getAnn, postAnn,editAnn } = require('../controllers/graderCreate/test')

router.get('/', test)
router.get('/ann', getAnn)
router.post('/cann', postAnn)
router.put('/eann',editAnn)
module.exports = router