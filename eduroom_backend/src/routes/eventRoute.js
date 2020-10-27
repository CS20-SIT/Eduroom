const express = require('express')
const router = express.Router()
const {getEvent, createEvent} = require('../controllers/event')

router.get('/getEvent', getEvent);
router.post('/createEvent',createEvent);

module.exports = router