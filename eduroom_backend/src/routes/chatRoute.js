const express = require('express')
const router = express.Router()
const mockup = require('../controllers/Chat/chatMockupData')
const chat = require('../controllers/Chat/chatController')
const {jwtAuthenicate} = require('../middleware/jwtAuthenticate')
const { readMessage } = require('../controllers/chatController')

router.get('/getChatlist', jwtAuthenicate,chat.getChatlist) //check done
router.get('/getInvitationList',jwtAuthenicate, chat.getInvitationList) //check done
router.get('/getSearchResult',jwtAuthenicate, chat.getSearchResult) //check done
router.get('/acceptInvitation',jwtAuthenicate, chat.acceptInvitation)  //check done
router.get('/declineInvitation',jwtAuthenicate,chat.declineInvitation) //check done
router.get('/getChatroomDetail',jwtAuthenicate,chat.getChatroomDetail) //check done
router.get('/getChatRoomProfile',jwtAuthenicate,chat.getChatRoomProfile) //check done
router.get('/selectSearchResult',jwtAuthenicate,chat.selectSearchResult) //check
router.get('/getUserProfile',jwtAuthenicate,chat.getUserProfile) //check done
router.get('/hideChatroom',jwtAuthenicate,chat.hideChatroom)  //check done
router.get('/leaveChatRoom',jwtAuthenicate,chat.leaveChatRoom) //check done
router.get('/deleteChatRoom',jwtAuthenicate,chat.deleteChatRoom) //check done
router.get('/sendMessage',jwtAuthenicate,chat.sendMessage) //check done
router.get('/unsendMessage',jwtAuthenicate,chat.unsendMessage) //check done
router.get('/changeThemeColor',jwtAuthenicate,chat.changeThemeColor) //check done
router.get('/changeChatRoomName',jwtAuthenicate,chat.changeChatRoomName) //check done
router.get('/readMessage', readMessage)


//Mockup
router.get('/getUserProfileMockup',(req,res)=>{
  res.send(mockup.getUserProfileMockup(23432));
})
router.get('/getChatListMockup',(req,res)=>{
  res.send(mockup.getChatListMockup(32234));
})
router.get('/getChatRoomProfilePictureMockup1',(req,res)=>{
  res.send(mockup.getChatRoomProfilePictureMockup1(5435));
})
router.get('/getChatRoomProfilePictureMockup2',(req,res)=>{
  res.send(mockup.getChatRoomProfilePictureMockup2(34543));
})
router.get('/getSearchResultMockup',(req,res)=>{
  res.send(mockup.getSearchResultMockup("jimmy"));
})
router.get('/selectSearchResultMockup',(req,res)=>{
  res.send(mockup.selectSearchResultMockup(2343));
})
router.post('/createGroupChatMockup',(req,res)=>{
  res.send(mockup.createGroupChatMockup("testPic","RoomName",["tom","jim","nun"]));
})
router.get('/getInvitationListMockup',(req,res)=>{
  res.send(mockup.getInvitationListMockup(35332));
})
router.get('/acceptInvitationMockup2',(req,res)=>{
  res.send(mockup.getInvitationListMockup(2));
})
router.get('/declineInvitationMockup',(req,res)=>{
  res.send(mockup.getInvitationListMockup(2));
})
router.get('/hideChatRoomMockup',(req,res)=>{
  res.send(mockup.hideChatRoomMockup(2,324235));
})
router.get('/chatRoomDetailMockup',(req,res)=>{
  res.send(mockup.chatRoomDetailMockup(2,324235));
})
router.get('/hideMessageMockup',(req,res)=>{
  res.send(mockup.hideMessageMockup(2,23));
})
router.get('/deleteMessageMockup',(req,res)=>{
  res.send(mockup.deleteMessageMockup(2,23));
})
router.get('/sendMessageMockup',(req,res)=>{
  res.send(mockup.sendMessageMockup(2,23,"Hello"));
})
router.get('/sendStickerMockup',(req,res)=>{
  res.send(mockup.sendStickerMockup(2,23,"Hello",4));
})
router.get('/getStickerListMockup',(req,res)=>{
  res.send(mockup.getStickerListMockup(2,23,"Hello",4));
})
router.get('/changeChatRoomProfilePictureMockup',(req,res)=>{
  res.send(mockup.changeChatRoomProfilePictureMockup(2,"test.png"));
})
router.get('/changeChatRoomNameMockup',(req,res)=>{
  res.send(mockup.changeChatRoomNameMockup(2,"ChatRoomName"));
})
router.get('/changeThemeColorMockup',(req,res)=>{
  res.send(mockup.changeThemeColorMockup(2,534543,'#111111','#222222'));
})
router.get('/addChatRoomMemberMockup',(req,res)=>{
  res.send(mockup.addChatRoomMemberMockup(2,3545,546547));
})
router.get('/changeMemberNicknameMockup',(req,res)=>{
  res.send(mockup.changeMemberNicknameMockup(2,3545,54654,"Jimmy"));
})
router.get('/deleteMemberMockup',(req,res)=>{
  res.send(mockup.deleteMemberMockup(2,3545,54654));
})
router.get('/leaveChatRoomMockup',(req,res)=>{
  res.send(mockup.leveChatRoomMockup(2,3545));
})
router.get('/deleteChatRoomMockup',(req,res)=>{
  res.send(mockup.deleteChatRoomMockup(2));
})


module.exports = router