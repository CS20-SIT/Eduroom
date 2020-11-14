const express = require('express')
const router = express.Router()
const {getChatlist, getMessagelist} = require('../controllers/chatController')

let test = (req, res) => {
    res.send('test')
  }
router.get('/getChatlist', getChatlist);
router.get('/getMessagelist', getMessagelist);


module.exports = router