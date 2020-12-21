const express = require("express");
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');


const {getMyAds,getAllAds,addAds,getAdsType,getAdstoPay} = require("../controllers/advertisement/advertisementController");
  router.get("/getAllAds",  getAllAds);
  router.get("/getAdsType",  getAdsType);
  router.get("/getAdstoPay", jwtAuthenicate, getAdstoPay);
  router.get("/getMyAds", jwtAuthenicate,getMyAds);
  router.post("/addAds",  jwtAuthenicate, addAds);


  module.exports = router;