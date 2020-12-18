const express = require('express')
const router = express.Router()
const {getGlobalEvent,getCourseEvent, createEvent} = require('../controllers/event');
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');
router.get('/getGlobalEvent', getGlobalEvent);
router.get('/getCourseEvent',getCourseEvent);
router.post('/createEvent',jwtAuthenicate,createEvent);

module.exports = router