const express = require('express')
const router = express.Router()
const {getGlobalEvent,getCourseEvent, createEvent, getEventInMonthYear,dEvent,getEvent,getMyCourse} = require('../controllers/event');
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');
router.get('/getGlobalEvent', getGlobalEvent);
router.get('/getCourseEvent',getCourseEvent);
router.post('/createEvent',jwtAuthenicate,createEvent);
router.get('/getEventInMonthYear',jwtAuthenicate,getEventInMonthYear);
router.delete('/dEvent',jwtAuthenicate,dEvent);
router.get('/getEvent',getEvent)
router.get('/getMyCourse',jwtAuthenicate,getMyCourse)
module.exports = router