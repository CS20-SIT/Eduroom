const express = require('express')
const router = express.Router()
const {submitForm,setRequestForms,selectForm,createAnswer} = require('../controllers/supportController')
const { jwtAdminAuthenticate } = require('../middleware/jwtAuthenticate')

router.post('/create', submitForm)
router.get('/',jwtAdminAuthenticate, setRequestForms)
router.get('/:id',jwtAdminAuthenticate,  selectForm)
router.post('/',jwtAdminAuthenticate,  createAnswer)

module.exports = router