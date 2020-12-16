const express = require('express')
const router = express.Router()
const {getEvent, createEvent} = require('../controllers/event');
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');
router.get('/getEvent', getEvent);
router.post('/createEvent',jwtAuthenicate,createEvent);

module.exports = router