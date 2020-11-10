const express = require('express')
const router = express.Router()
const { test } = require('../controllers/sentEventMail')
const sendEmail = require('../utils/sendMail')
router.get('/', test)
router.get('/mail',async(req,res,next)=>{
    sendEmail({email:'Gorgun.test@Gorguncity.com',subject:'TEST FOR JIMMY!!!!!',message:'JIMMYYY'})
    res.status(200).json({success:true})
})
module.exports = router