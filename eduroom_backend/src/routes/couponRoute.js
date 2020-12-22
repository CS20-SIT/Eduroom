const express = require("express");
const path = require("path");
const router = express.Router();
const { jwtAuthenicate, jwtAdminAuthenticate  } = require('../middleware/jwtAuthenticate');
const { uploadToGCSHandler } = require('../middleware/multer')

const {
  Upload,
  CreateCodeForSale,
  GetCodeType, 
  GetDataforTable,
  GetCoupon, 
  GetCouponById, 
  updateStatus,
  UseCode,
  GetDiscountFromCoupon, 
  gCodeById,
  gCodeList,
  gUsedCodeList,
  gExpiredCodeList,
  gPrivateCodeList

} 
= require("../controllers/coupon/couponController");

  router.post('/upload/picture', jwtAdminAuthenticate ,uploadToGCSHandler('coupon/picture'), Upload)
  router.post('/createCodeForSale', jwtAdminAuthenticate,CreateCodeForSale)
  router.get('/GetCodeType', jwtAdminAuthenticate,GetCodeType)
  router.get('/UseCode',jwtAuthenicate,UseCode)
  router.get('/GetDiscountFromCoupon',GetDiscountFromCoupon)
  router.get('/getDataFromTable',GetDataforTable);
  router.get('/getCouponDetail',  GetCoupon);
  router.get('/getCouponById', GetCouponById);
  router.get('/updateStatus',  updateStatus);
  router.get('/getCodeById',  gCodeById);
  router.get('/getCodeList',  gCodeList);
  router.get('/getUsedCodeList',  gUsedCodeList);
  router.get('/getExpiredCodeList',  gExpiredCodeList);
  router.get('/getPrivateCodeList',  gPrivateCodeList);

  module.exports = router;