const express = require('express')
const router = express.Router()
const { test } = require('../controllers/testController')
const sendEmail = require('../utils/sendMail.js')
const uploadHandler = require('../middleware/multer')

router.get('/', test)
router.get('/mail',async(req,res,next)=>{
    sendEmail({email:'test@test.com',subject:'Test SMTP Server',message:'Woah'})
    res.status(200).json({success:true})
})

router.post('/multer', uploadHandler('test.png', '/test/'), (req, res) => {
    // res.send({ linkURL: req.files[0].linkUrl });
    res.send({ url: req.file })
})


module.exports = router