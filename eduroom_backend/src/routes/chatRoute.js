const express = require('express')
const router = express.Router()
const {getChatlist, getGroupPicture, inviteCreate} = require('../controllers/chatController')

let test = (req, res) => {
    res.send('test')
  }
router.get('/getChatlist', getChatlist);
router.get('/getGroupPicture', getGroupPicture);
router.post('/inviteCreate', inviteCreate)


module.exports = router