const express = require('express')
const router = express.Router()
const {getPackage, createPackage} = require('../controllers/package')

router.get('/getEvent', getEvent);
router.post('/createEvent',createEvent);

module.exports = router