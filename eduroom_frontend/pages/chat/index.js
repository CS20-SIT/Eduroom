import Grid from '@material-ui/core/Grid'
import React, { useState, useEffect } from 'react'
import ChatRoom from '../../components/chat/chatRoom'
import ChatContact from '../../components/chat/chatContact'
import EditChat from '../../components/chat/editChat'
import Nav from '../../components/template/generalnonav'
import EmptyChatIcon from '../../components/chat/icons/EmptyChatIcon'
import api from '../../api'
import socketIOClient from "socket.io-client";

export default function Chat() {
	const [socket,setSocket] = useState(null)
	const [messageLeftColor, setMessageLeftColor] = useState('#5B5B5B')
	const [messageRightColor, setMessageRightColor] = useState('#EB7DB1')
	const [selectChat, setSelectChat] = useState(null)
	const [chatRoomDetail, setChatRoomDetail] = useState(null)
	const [userProfile, setUserProfile] = useState(null)
	const [chatList, setChatList] = useState(null)
	const getChatList = async () => {
		const res = await api.get(`/api/chat/getChatlist`)
		console.log(res.data)
		setChatList(res.data)
	}
	const [expand, setExpand] = useState({
		width: 'calc(75% - 14px)',
		position: 'relative',
		marginLeft: 14,
	})
	const [expand2, setExpand2] = useState({
		display: 'none',
	})
	const getChatRoomDetail = () => {
		api.get(`/api/chat/getChatroomDetail`, { params: { chatroomid: selectChat.chatroomid } }).then((res) => {
			setChatRoomDetail(null)
			setChatRoomDetail(res.data)
			console.log(res.data)
		})
	}
	const getUserProfileInfo = async () => {
		api.get(`/api/chat/getUserProfile`).then((res) => {
			setUserProfile(res.data)
		})
	}
	useEffect(() => {
		setSocket(socketIOClient(process.env.NEXT_PUBLIC_CHAT_SERVER, {
			path: "/socket-chat",
		  }))
		getUserProfileInfo()
	}, [])
	useEffect(() => {
		getChatList()
		if (chatRoomDetail != null) {
			setMessageLeftColor(chatRoomDetail.themeColor.recievecolor)
			setMessageRightColor(chatRoomDetail.themeColor.sendcolor)
		}
	}, [chatRoomDetail])
	useEffect(() => {
		if (selectChat) {
			getChatRoomDetail()
		}
	}, [selectChat])

	return (
		<>
			<Nav>
				<Grid container justify="center" direction="row">
					<div style={{ width: '25%', backgroundColor: '#f4f5f7' }}>
						{(() => {
							if (userProfile) {
								return <ChatContact setSelectChat={setSelectChat} selectChat={selectChat} userProfile={userProfile} chatList={chatList} getChatList={getChatList} setChatRoomDetail={setChatRoomDetail}/>
							}
						})()}
					</div>
					<div style={expand}>
						{(() => {
							if (chatRoomDetail && userProfile) {
								return (
									<ChatRoom
										style={{ backgroundColor: '#f4f5f7' }}
										chatRoom={{
											setExpandChat: setExpand,
											setExpandEdit: setExpand2,
											messageLeftColor: messageLeftColor,
											messageRightColor: messageRightColor,
											chatroomid:selectChat.chatroomid
										}}
										chatRoomDetail={chatRoomDetail}
										userProfile={userProfile}
										getChatRoomDetail={getChatRoomDetail}
										socket={socket}
									/>
								)
							} else {
								return (
									<div style={{width:'100%',height:'100%'}}>
								<EmptyChatIcon style={{ display: 'block', marginLeft: 'auto',marginTop:'auto',marginBottom:'auto', marginRight: 'auto' }} />
								</div>
								)}
						})()}
					</div>
					<div item style={expand2}>
						{(() => {
							if (chatRoomDetail && userProfile) {
								return (
									<EditChat
										edit={{
											messageLeftColor: messageLeftColor,
											messageRightColor: messageRightColor,
											setMessageLeftColor: setMessageLeftColor,
											setMessageRightColor: setMessageRightColor,
										}}
										chatRoomDetail={chatRoomDetail}
										getChatRoomDetail={getChatRoomDetail}
										getChatList={getChatList}
										setChatList={setChatList}
									/>
								)
							}
						})()}
					</div>
				</Grid>
			</Nav>
		</>
	)
}

// You need to implement backend first to get all chat room and
// you should implement sending message and store in backend
// after you finish all you implement socket in same function that call backend api
// in the then of api.post().then() to ensure that backend need to success before
// we sent notify and [id].js you can delete it :)
