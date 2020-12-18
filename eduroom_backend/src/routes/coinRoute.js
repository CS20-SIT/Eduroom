const express = require('express');
const router = express.Router();

const { getStickers,getDailyRewardStatus,showCoinOwner,showStickerOwner, buySticker, getCoinFromEdqiz, packStickerStore} = require('../controllers/Coin/coin');
// router.get('/packsticker',getStickerInPackage);
router.get('/stickers', getStickers);
router.get('/dailyReward',getDailyRewardStatus);
router.get('/stickers/:id', packStickerStore)
// router.post('/coinTransaction',setCoinTransaction);
router.get('/coinOwner',showCoinOwner);
router.get('/stickerOwner',showStickerOwner);
// router.post('/coinTransaction',addReduceTransOwner);
router.post('/buySticker',buySticker)
router.post('/getCoinFromEdqiz',getCoinFromEdqiz)
module.exports = router;
