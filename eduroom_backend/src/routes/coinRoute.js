const express = require('express');
const router = express.Router();

const { getStickers,getDailyRewardStatus,showCoinOwner,showStickerOwner, 
    buySticker, getCoinFromEdqiz, packStickerStore,insertDailyReward,buyCoupon,checkCodeOwner} = require('../controllers/Coin/coin');
// router.get('/packsticker',getStickerInPackage);
router.get('/stickers', getStickers);
router.get('/dailyReward',getDailyRewardStatus);
router.get('/stickers/:id', packStickerStore)
router.get('/coinOwner',showCoinOwner);
router.get('/stickerOwner',showStickerOwner);
router.get('/checkCodeOwner',checkCodeOwner)
router.post('/buySticker',buySticker)
router.post('/buyCoupon',buyCoupon)
router.post('/getCoinFromEdqiz',getCoinFromEdqiz)
router.post('/dailyReward',insertDailyReward)
module.exports = router;
