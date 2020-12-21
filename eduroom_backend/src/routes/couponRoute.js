const express = require("express");
const path = require("path");
const router = express.Router();
const { jwtAuthenicate, jwtAdminAuthenticate  } = require('../middleware/jwtAuthenticate');
const { uploadToGCSHandler } = require('../middleware/multer')

const {Upload,CreateCodeForSale,GetCodeType} = require("../controllers/coupon/couponController");

  router.post('/upload/picture', jwtAdminAuthenticate ,uploadToGCSHandler('coupon/picture'), Upload)
  router.post('/createCodeForSale', jwtAdminAuthenticate,CreateCodeForSale)
  router.get('/GetCodeType', jwtAdminAuthenticate,GetCodeType)
  module.exports = router;