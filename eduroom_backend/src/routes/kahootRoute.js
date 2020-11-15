const express = require('express');
const router = express.Router();

const { fetchRoom, createRoom,fetchRoomHistory } = require('../controllers/edqiz/roomController');

router.get('/rooms', fetchRoom);
router.post('/room', createRoom);
router.get('/roomHistory', fetchRoomHistory);


module.exports = router;
