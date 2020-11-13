const express = require('express');
const router = express.Router();

const { getStickers } = require('../controllers/Coin/coin');

router.get('/stickers', getStickers);

module.exports = router;
