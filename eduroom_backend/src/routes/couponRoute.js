const express = require("express");
const path = require("path");
const router = express.Router();
const { jwtAuthenicate, jwtAdminAuthenticate  } = require('../middleware/jwtAuthenticate');
const { uploadToGCSHandler } = require('../middleware/multer')

const {Upload,CreateCodeForSale,GetCodeType,UseCode,GetDiscountFromCoupon } = require("../controllers/coupon/couponController");
const {Upload,CreateCodeForSale,GetCodeType, GetDataforTable, GetCoupon, GetCouponById, updateStatus} = require("../controllers/coupon/couponController");

  router.post('/upload/picture', jwtAdminAuthenticate ,uploadToGCSHandler('coupon/picture'), Upload)
  router.post('/createCodeForSale', jwtAdminAuthenticate,CreateCodeForSale)
  router.get('/GetCodeType', jwtAdminAuthenticate,GetCodeType)
  router.get('/UseCode',jwtAuthenicate,UseCode)
  router.get('/GetDiscountFromCoupon',GetDiscountFromCoupon)
  router.get('/getDataFromTable',GetDataforTable);
  router.get('/getCouponDetail',  GetCoupon);
  router.get('/getCouponById', GetCouponById);
  router.get('/updateStatus',  updateStatus);

  module.exports = router;