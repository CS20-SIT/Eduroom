const express = require('express');
const router = express.Router();

const { fetchRoom, createRoom,fetchRoomHistory,createKahootHistory, player,fetchExactlyRoom,historyPlayer } = require('../controllers/edqiz/roomController');

router.get('/rooms', fetchRoom);
router.post('/room', createRoom);
router.get('/roomHistory', fetchRoomHistory);
router.post('/roomHistory', createKahootHistory);
router.post('/roomHistoryplayer', historyPlayer);
router.post('/player', player);
router.get('/sessionid/:pin', fetchExactlyRoom);


module.exports = router;
