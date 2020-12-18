const express = require('express')
const router = express.Router()
const {getGlobalEvent,getCourseEvent, createEvent, getEventInMonthYear} = require('../controllers/event');
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');
router.get('/getGlobalEvent', getGlobalEvent);
router.get('/getCourseEvent',getCourseEvent);
router.post('/createEvent',jwtAuthenicate,createEvent);
router.get('/getEventInMonthYear',jwtAuthenicate,getEventInMonthYear)
module.exports = router