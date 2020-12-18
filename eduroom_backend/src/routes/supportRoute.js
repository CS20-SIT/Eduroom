const express = require('express')
const router = express.Router()
const {submitForm,setRequestForms,selectForm,createAnswer} = require('../controllers/supportController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

router.post('/create', submitForm)
router.get('/', setRequestForms)
router.get('/:id', jwtAuthenicate, selectForm)
router.post('/', jwtAuthenicate, createAnswer)

module.exports = router