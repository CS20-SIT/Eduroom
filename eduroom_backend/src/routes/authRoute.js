const express = require('express')
const router = express.Router()

router.get('/login', (req,res,next)=>{
    res.status(200).json({success:ture})
})
router.get('/register', (req,res,next)=>{
    res.status(200).json({success:ture})
})

module.exports = router