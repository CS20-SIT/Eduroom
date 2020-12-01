const express = require('express');
const router = express.Router();

const { getStickers,getDailyRewardStatus,setCoinTransaction, ShowCoinOwner,showStickerOwner } = require('../controllers/Coin/coin');

router.get('/stickers', getStickers);
router.get('/dailyReward',getDailyRewardStatus);
router.post('/coinTransaction',setCoinTransaction);
router.get('/coinOwner',ShowCoinOwner);
router.get('/stickerOwner',showStickerOwner);
module.exports = router;
