const express = require("express");
const path = require("path");
const router = express.Router();
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate');


const {getUniversitylist,registerUemail} = require("../controllers/universityDiscount/universityController");
  router.get("/ulist", jwtAuthenicate, getUniversitylist);
  router.post("/registerUemail", jwtAuthenicate, registerUemail);


  module.exports = router;