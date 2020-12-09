const express = require('express');
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { fetchRoom, createRoom,fetchRoomHistory,createKahootHistory, 
    player,fetchExactlyRoom,historyPlayer,createHistoryPlayerAnswer,
    historyPlayerFirstTime ,fetchScoreRank} = require('../controllers/edqiz/roomController');

router.get('/rooms', fetchRoom);
router.post('/room', createRoom);
router.get('/roomHistory', fetchRoomHistory);
router.post('/roomHistory', createKahootHistory);
router.post('/roomHistoryplayer',jwtAuthenicate, historyPlayer);
router.post('/roomHistoryplayerFirstTime',jwtAuthenicate, historyPlayerFirstTime);

router.post('/player', jwtAuthenicate,player);
router.get('/sessionid/:pin', fetchExactlyRoom);
router.get('/getRankScore/:sessionid', fetchScoreRank);

router.post('/createHistoryPlayerAnswer',jwtAuthenicate,createHistoryPlayerAnswer);

module.exports = router;
