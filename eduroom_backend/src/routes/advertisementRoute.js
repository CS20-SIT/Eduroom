const express = require("express");
const path = require("path");
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');


const {getMyAds,getAllAds,addAds} = require("../controllers/advertisement/advertisementController");
  router.get("/getAllAds",  getAllAds);
  router.get("/getMyAds", jwtAuthenicate,getMyAds);
  router.post("/addAds",  jwtAuthenicate, addAds);


  module.exports = router;