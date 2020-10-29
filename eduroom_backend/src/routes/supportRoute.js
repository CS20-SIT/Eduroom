const express = require('express')
const router = express.Router()
const {getSupportForm,submitForm} = require('../controllers/support')
router.route('/').get(getSupportForm).post(submitForm)
module.exports = router