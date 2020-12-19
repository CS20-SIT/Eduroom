const express = require('express');
const router = express.Router();

router.use('/',async(req,res,next)=>{res.status(200).json({success:true})});

module.exports = router;
