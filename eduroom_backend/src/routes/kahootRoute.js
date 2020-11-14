const express = require('express');
const router = express.Router();

const { fetchRoom, createRoom } = require('../controllers/edqiz/roomController');

router.get('/rooms', fetchRoom);
router.post('/room', createRoom);

module.exports = router;
