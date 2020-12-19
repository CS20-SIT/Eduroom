const express = require("express");
const path = require("path");
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');
const { uploadToGCSHandler } = require('../middleware/multer')

const {getAdsTags,getMyAds,getAllAds,addAds,getAdsType,getAdstoPay,Upload} = require("../controllers/advertisement/advertisementController");
  router.get("/getAllAds",  getAllAds);
  router.get("/getAdsType",  getAdsType);
  router.get("/getAdsTags",  getAdsTags);
  router.get("/getAdstoPay", jwtAuthenicate, getAdstoPay);
  router.get("/getMyAds", jwtAuthenicate,getMyAds);
  router.post("/addAds",  jwtAuthenicate, addAds);
  router.post('/upload/picture', jwtAuthenicate,uploadToGCSHandler('ads/picture'), Upload)

  module.exports = router;