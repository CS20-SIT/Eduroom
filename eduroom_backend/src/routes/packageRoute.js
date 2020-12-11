const express = require('express')
const router = express.Router()

const {getPackage,createPackage} = require('../controllers/packageController')

router.post('/createPackage',createPackage);
router.get('/getPackage', getPackage);

module.exports = router