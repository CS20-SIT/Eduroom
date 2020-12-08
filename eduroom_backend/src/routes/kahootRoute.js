const express = require('express');
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { fetchRoom, createRoom,fetchRoomHistory,createKahootHistory, player,fetchExactlyRoom,historyPlayer,createHistoryPlayerAnswer } = require('../controllers/edqiz/roomController');

router.get('/rooms', fetchRoom);
router.post('/room', createRoom);
router.get('/roomHistory', fetchRoomHistory);
router.post('/roomHistory', createKahootHistory);
router.post('/roomHistoryplayer',jwtAuthenicate, historyPlayer);
router.post('/player', jwtAuthenicate,player);
router.get('/sessionid/:pin', fetchExactlyRoom);
router.post('/createHistoryPlayerAnswer',jwtAuthenicate,createHistoryPlayerAnswer);

module.exports = router;
