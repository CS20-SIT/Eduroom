const express = require('express');
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

const { getStickers, getDailyRewardStatus, showCoinOwner, showStickerOwner,
    buySticker, getCoinFromEdqiz, packStickerStore, insertDailyReward, buyCoupon, checkCodeOwner, checkStickerOwner,getCodeListOfCoin,getCodeListOfLPublic,getCodeListOfPublic } = require('../controllers/Coin/coin');
// router.get('/packsticker',getStickerInPackage);
router.get('/stickers', getStickers);   // ดัน
router.get('/dailyReward', jwtAuthenicate, getDailyRewardStatus); //ดัน
router.get('/stickers/:id', jwtAuthenicate, packStickerStore)   // ดัน
router.get('/coinOwner', jwtAuthenicate, showCoinOwner);  // ดัน
router.get('/stickerOwner', jwtAuthenicate, showStickerOwner);  // ดัน
router.get('/checkCodeOwner', checkCodeOwner)
router.get('/checkStickerOwner', jwtAuthenicate, checkStickerOwner)
router.post('/buySticker',jwtAuthenicate, buySticker)   // ดัน

router.post('/getCoinFromEdqiz', getCoinFromEdqiz) // ดัน
router.post('/dailyReward', jwtAuthenicate, insertDailyReward)  // ดัน



//Coupon
router.get('/codesOfCoin',getCodeListOfCoin);
router.get('/codesOfLPublic',getCodeListOfLPublic);
router.get('/codesOfPublic',getCodeListOfPublic);

router.post('/buyCoupon', jwtAuthenicate, buyCoupon)    // ดัน
module.exports = router;
