const express = require('express')
const router = express.Router()
const {submitForm,setRequestForms} = require('../controllers/support')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

router.post('/create', jwtAuthenicate, submitForm)
router.get('/', setRequestForms)

module.exports = router