module.exports = {
	getUserProfileMockup: (userID) => {
		return {
			userID: userID,
            userFirstName: 'Krishadawut',
            userLastName: 'Olde Monnikhof',
            userNickName: 'jimmy',
			profilePicture: 'test.png',
		}
	},
	getChatListMockup: (userID) => {
		return [
			{
				chatroomid: 1,
				firstName: 'John',
				roomname: 'test4',
				message: 'Hello this is test',
				sendtime: "10/24/2020",
			},
			{
				chatroomid: 2,
				firstname: 'John',
				roomname: 'test4',
				message: 'Hello this is test',
				sendtime: "12/09/2020",
			},
			{
				chatroomid: 3,
				firstname: 'John',
				roomname: 'test4',
				message: 'Hello this is test',
				sendtime: "12/14/2020",
			},
			{
				chatroomid: 4,
				firstname: 'John',
				roomname: 'test4',
				message: 'Hello this is test',
				sendtime: "12/08/2020",
			},
			{
				chatroomid: 5,
				firstname: 'John',
				roomname: 'test4',
				message: 'Hello this is test',
				sendtime: '07/11',
			},
			{
				chatroomid: 6,
				firstname: 'John',
				roomname: 'test4',
				message: 'Hello this is test',
				sendtime: '07/11',
			},
			{
				chatroomid: 7,
				firstname: 'John',
				roomname: 'test4',
				message: 'Hello this is test',
				sendtime: '07/11',
			},
		]
	},
	getChatRoomProfilePictureMockup1: (chatRoomID) => {
		return {
			chatRoomID: chatRoomID,
			chatRoomProfilePicture: 'test.png',
		}
	},
	getChatRoomProfilePictureMockup2: (chatRoomID) => {
		return {
			chatRoomId: chatRoomID,
			chatRoomProfilePictures: [
				{
					userID: 23435,
					userProfilePicture: 'test.png',
				},
				{
					userID: 234455,
					userProfilePicture: 'test.png',
				},
				{
					userID: 235,
					userProfilePicture: 'test.png',
				},
			],
		}
	},
	getSearchResultMockup: (keyword) => {
		//limit 50 rows
		return {
			users: [
				{
					userID: 12432,
					userFirstName: 'jimmy',
					userLastName: 'supawit',
					display: 'jim',
					email: 'test@mail.com',
					userProfile: 'test.png',
				},
				{
					userID: 122,
					userFirstName: 'jimmy2',
					userLastName: 'supawit',
					display: 'jim2',
					email: 'test2@mail.com',
					userProfile: 'test.png',
				},
				{
					userID: 1232,
					userFirstName: 'jimmy3',
					userLastName: 'supawit',
					display: 'jim2',
					email: 'test3@mail.com',
					userProfile: 'test.png',
				},
				{
					userID: 122436,
					userFirstName: 'jimmy4',
					userLastName: 'supawit',
					display: 'jim2',
					email: 'test4@mail.com',
					userProfile: 'test.png',
				},
			],
		}
	},
	selectSearchResultMockup:(userID)=>{
		return {
			success: true,
		}
	},
	createGroupChatMockup: (profilePic, chatRoomName, members) => {
		return {
			success: true,
		}
	},
	getInvitationListMockup: (userID) => {
		return {
			invitations: [
				{
					invitaionID: 1,
					chatRoomID: 2,
					chatRoomName: 'Krishadawut',
					invitor: 'Jimmy',
					profilePicture: 'test.png',
				},
				{
					invitaionID: 2,
					chatRoomID: 4,
					chatRoomName: 'Client',
					invitor: 'Krishadawut',
					profilePicture: 'test.png',
				},
			],
		}
	},
	getInvitationListMockup2: (userID) => {
		return {
			invitations: [
				{
					invitaionID: 1,
					chatRoomID: 2,
					chatRoomName: 'Krishadawut',
					invitor: 'Jimmy',
					profilePicture: 'test.png',
				},
			],
		}
	},
	acceptInvitationMockup: (invitationID) => {
		return {
			success: true,
		}
	},
	declineInvitationMockup: (invitationID) => {
		return {
			success: true,
		}
    },
    hideChatRoomMockup: (chatRoomID,userID) => {
        return {
			success: true,
		}
    },
	chatRoomDetailMockup: (chatRoomID,userID) => {
        //add column "status" in to chatRoomMember  (if member are kickout it will be invalid or if the chat room is deleted all member will be invalid(chatRoomProlfilePic, chatMessage, systemMessage, stickerMessage))
		return {
			chatRoomID: 2,
			chatRoomName: 'test4',
			chatRoomProfile:'test.png',
            themeColor: {
                sendColor:"#EB7DB1",
                recieveColor:"#5B5B5B",
            },
            membersID: [435,346,2342,67876],
			messages: [
				{
                    system: true,
                    sticker: false,
					message: 'Test4 Have Joined the Chat',
                    //if sticker "path:'test.png' instead of message"
					sendTime: '13:50',
					reader: [
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
					],
				},
				{
                    system: false,
                    sticker: false,
					messageID: 23,
					senderID: 213124,
					message: 'Hello Tom',
					senderName: 'test4',
					senderProfilePic: 'test.png',
                    //if sticker "path:'test.png' instead of message"
					sendTime: '13:50',
					reader: [
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
					],
				},
				{
                    system: false,
                    sticker: false,
					messageID: 23,
                    senderID: 23432,
					message: 'Hello Tom',
					senderName: 'Krishadawut',
					senderProfilePic: 'test.png',
                    //if sticker "path:'test.png' instead of message"
					sendTime: '13:50',
					reader: [
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
					],
				},
				{
                    system: true,
                    sticker: false,
					message: 'Krishadawut Have Left the Chat',
                    //if sticker "path:'test.png' instead of message"
					sendTime: '13:50',
					reader: [
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
					],
				},
				{
                    system: false,
                    sticker: false,
					messageID: 23,
					senderID: 213124,
					senderName: 'test4',
					message: 'Hello Tom',
					senderProfilePic: 'test.png',
                    //if sticker "path:'test.png' instead of message"
					sendTime: '13:50',
					reader: [
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
						{
							readerID: 32342,
							readTime: '13:54',
						},
					],
				},
			],
		}
    },
    hideMessageMockup: (userID,MessageID)=>{
        return {
			success: true,
		}
    },
    deleteMessageMockup: (userID,MessageID)=>{
        return {
			success: true,
		}
    },
    sendMessageMockup: (userID,chatRoomID,message)=>{
        return {
			success: false,
		}
    },
    sendStickerMockup: (userID,chatRoomID,stickerID)=>{
        return {
			success: true,
		}
    },
    getStickerListMockup:(userID)=>{
        return{
            stickers:[
                {
                    stickerID: 1,
                    stickerName: 'Fruit',
                    stickerType: 'Fruit',
                    stickerPath: 'test.png'
                },
                {
                    stickerID: 1,
                    stickerName: 'Fruit',
                    stickerType: 'Fruit',
                    stickerPath: 'test.png'
                },
                {
                    stickerID: 1,
                    stickerName: 'Fruit',
                    stickerType: 'Fruit',
                    stickerPath: 'test.png'
                }
            ]
        }
    },
    changeChatRoomProfilePictureMockup:(chatRoomID,Picture)=>{
        return {
			success: true,
		}
    },
    changeChatRoomNameMockup:(chatRoomID,name)=>{
        return {
			success: true,
		}
    },
    changeThemeColorMockup:(chatRoomID,userID,senderColor,recieverColor)=>{
        return {
			success: true,
		}
    },
    addChatRoomMemberMockup:(chatRoomID,InvitorID,InviteeID)=>{
        return {
			success: true,
		}
    },
    changeMemberNicknameMockup:(chatRoomID,changerID,userID,nickName)=>{
        return {
			success: true,
		}
    },
    deleteMemberMockup:(chatRoomID,deleterID,userID)=>{
        return {
			success: true,
		}
    },
    leaveChatRoomMockup:(chatRoomID,userID)=>{
        return {
			success: true,
		}
    },
    deleteChatRoomMockup:(chatRoomID)=>{
        return {
			success: true,
		}
    }

}
