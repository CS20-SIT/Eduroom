const express = require('express')
const router = express.Router()
const {
    getGlobalEvent,
    getCourseEvent,
    createEvent,
    getEventInMonthYear,
    getAdminEventInMonthYear,
    dEvent, getEvent,
    getMyCourse,
    eEvent,
    eAdminEvent,
    dAdminEvent,
    getAdminEvent,
    createAdminEvent } = require('../controllers/event');
const { jwtAuthenicate,jwtAdminAuthenticate } = require('../middleware/jwtAuthenticate');


router.get('/getGlobalEvent', getGlobalEvent);
router.get('/getCourseEvent', getCourseEvent);
router.post('/createEvent',jwtAuthenicate,  createEvent);
router.get('/getEventInMonthYear', jwtAuthenicate, getEventInMonthYear);
router.get('/getAdminEventInMonthYear',jwtAdminAuthenticate,getAdminEventInMonthYear)
router.delete('/dEvent', jwtAuthenicate, dEvent);
router.get('/getEvent', jwtAuthenicate,getEvent)
router.get('/getMyCourse', jwtAuthenicate, getMyCourse)
router.post('/eEvent', jwtAuthenicate, eEvent);
router.post('/eAdminEvent', jwtAdminAuthenticate, eAdminEvent)
router.delete('/dAdminEvent', jwtAdminAuthenticate, dAdminEvent)
router.get('/getAdminEvent', jwtAdminAuthenticate,getAdminEvent)
router.post('/createAdminEvent',jwtAdminAuthenticate, createAdminEvent)


module.exports = router