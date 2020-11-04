const express = require('express')
const router = express.Router()
const { test } = require('../controllers/testController')
const sendEmail = require('../utils/sendMail.js')
router.get('/', test)
router.get('/mail',async(req,res,next)=>{
    sendEmail({email:'test@test.com',subject:'Test SMTP Server',message:'Woah'})
    res.status(200).json({success:true})
})
module.exports = router