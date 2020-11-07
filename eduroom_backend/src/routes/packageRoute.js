const express = require('express')
const router = express.Router()
const {getPackage, createPackage} = require('../controllers/packageController')

router.get('/getPackage', getPackage);
router.post('/createPackage',createPackage);

module.exports = router