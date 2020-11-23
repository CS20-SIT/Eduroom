const express = require('express')
const router = express.Router()
const {getChatlist, getGroupPicture} = require('../controllers/chatController')

let test = (req, res) => {
    res.send('test')
  }
router.get('/getChatlist', getChatlist);
router.get('/getGroupPicture', getGroupPicture);



module.exports = router