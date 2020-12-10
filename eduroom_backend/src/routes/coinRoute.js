const express = require('express');
const router = express.Router();

const { getStickers,getDailyRewardStatus,showCoinOwner,showStickerOwner,addReduceTransOwner} = require('../controllers/Coin/coin');

router.get('/stickers', getStickers);
router.get('/dailyReward',getDailyRewardStatus);
// router.post('/coinTransaction',setCoinTransaction);
router.get('/coinOwner',showCoinOwner);
router.get('/stickerOwner',showStickerOwner);
router.post('/coinTransaction',addReduceTransOwner);
module.exports = router;
