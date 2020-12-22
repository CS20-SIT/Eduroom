const express = require("express");
const router = express.Router();
const { jwtAuthenicate, jwtAdminAuthenticate  } = require('../middleware/jwtAuthenticate');
const { uploadToGCSHandler } = require('../middleware/multer')

const {getAdsDetail,getAdsToBills,getPaidWaitingAds, getPaidRejectedAds,getPaidApprovedAds,getBillAdsTotal,getAdsTags,getTotalAdsPrice,getMyAds,getAllAds,addAds,getAdsType,getAdstoPay,Upload,deleteAds,AddNewAdsBills,AddAdsTransaction} = require("../controllers/advertisement/advertisementController");
  router.get("/getAllAds",  getAllAds);
  router.get("/getAdsType",  getAdsType);
  router.get("/getAdsDetail",jwtAdminAuthenticate ,  getAdsDetail);
  router.get("/getPaidWaitingAds",  getPaidWaitingAds);
  router.get("/getPaidRejectedAds",  getPaidRejectedAds);
  router.get("/getPaidApprovedAds",  getPaidApprovedAds);
  router.get("/getAdsTags",  getAdsTags);
  router.get("/getAdstoPay", jwtAuthenicate, getAdstoPay);
  router.get("/getTotalAdsPrice", jwtAuthenicate, getTotalAdsPrice);
  router.get("/getMyAds", jwtAuthenicate,getMyAds);
  router.get("/getAdsToBills", jwtAuthenicate,getAdsToBills);
  router.get("/getBillAdsTotal", jwtAuthenicate,getBillAdsTotal);
  router.post("/addAds",  jwtAuthenicate, addAds);
  router.post("/deleteAds",  jwtAuthenicate, deleteAds);
  router.post('/upload/picture', jwtAuthenicate,uploadToGCSHandler('ads/picture'), Upload)
  router.post("/AddNewAdsBills",  jwtAuthenicate, AddNewAdsBills);
  router.post("/AddAdsTransaction",  jwtAuthenicate, AddAdsTransaction);

  module.exports = router;