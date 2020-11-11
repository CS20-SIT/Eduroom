const express = require('express')
const router = express.Router()
const {createPackage} = require('../controllers/packageController')

router.post('/createPackage',createPackage);

module.exports = router