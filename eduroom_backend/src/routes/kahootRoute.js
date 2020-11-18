const express = require('express');
const router = express.Router();

const { fetchRoom, createRoom,fetchRoomHistory,createKahootHistory } = require('../controllers/edqiz/roomController');

router.get('/rooms', fetchRoom);
router.post('/room', createRoom);
router.get('/roomHistory', fetchRoomHistory);
router.post('/roomHistory', createKahootHistory);

module.exports = router;
