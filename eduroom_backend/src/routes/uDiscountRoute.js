const express = require("express");
const path = require("path");
const router = express.Router();

const {getUniversitylist,registerUemail} = require("../controllers/universityDiscount/universityController");
  router.get("/ulist", getUniversitylist);
  router.post("/registerUemail", registerUemail);

  module.exports = router;