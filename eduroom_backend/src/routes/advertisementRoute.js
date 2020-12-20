const express = require("express");
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');
const { uploadToGCSHandler } = require('../middleware/multer')

const {getAdsTags,getTotalAdsPrice,getMyAds,getAllAds,addAds,getAdsType,getAdstoPay,Upload,deleteAds} = require("../controllers/advertisement/advertisementController");
  router.get("/getAllAds",  getAllAds);
  router.get("/getAdsType",  getAdsType);
  router.get("/getAdsTags",  getAdsTags);
  router.get("/getAdstoPay", jwtAuthenicate, getAdstoPay);
  router.get("/getTotalAdsPrice", jwtAuthenicate, getTotalAdsPrice);
  router.get("/getMyAds", jwtAuthenicate,getMyAds);
  router.post("/addAds",  jwtAuthenicate, addAds);
  router.post("/deleteAds",  jwtAuthenicate, deleteAds);
  router.post('/upload/picture', jwtAuthenicate,uploadToGCSHandler('ads/picture'), Upload)

  module.exports = router;