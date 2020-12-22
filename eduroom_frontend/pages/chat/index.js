import Grid from '@material-ui/core/Grid'
import React, { useState,useContext,useEffect } from 'react'
import ChatRoom from '../../components/chat/chatRoom'
import ChatContact from '../../components/chat/chatContact'
import EditChat from '../../components/chat/editChat'
import Nav from '../../components/template/generalnonav'
import EmptyChatIcon from '../../components/chat/icons/EmptyChatIcon'
import api from '../../api'
import socketIOClient from 'socket.io-client'
import AuthDialog from '../../components/landing/authDialog'
import UserContext from '../../contexts/user/userContext'
import GeneralTemplate from '../../components/edqiz/general'

export default function Chat() {
	const [socket, setSocket] = useState(null)
	const [messageLeftColor, setMessageLeftColor] = useState('#5B5B5B')
	const [messageRightColor, setMessageRightColor] = useState('#EB7DB1')
	const [selectChat, setSelectChat] = useState(null)
	const [oldChatRoom, setOldChatRoom] = useState([])
	const [chatRoomDetail, setChatRoomDetail] = useState(null)
	const [userProfile, setUserProfile] = useState(null)
	const [chatList, setChatList] = useState(null)
	const userContext = useContext(UserContext)
	const { user } = userContext
	const [dialog, setDialog] = useState(false)
	useEffect(() => {
		if (!user) {
			setDialog(true)
		} else {
			setDialog(false)
		}
	}, [user])
	const getChatList = async () => {
		const res = await api.get(`/api/chat/getChatlist`)
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
	const setReadMessage = (room) => {
		api.get(`/api/chat/readMessage`, { params: { chatroomid: room } })
	}
	const getChatRoomDetail = (room) => {
		if (room) {
			api.get(`/api/chat/getChatroomDetail`, { params: { chatroomid: room } }).then((res) => {
				setChatRoomDetail(res.data)
			})
		} else if (selectChat.chatroomid != null) {
			api.get(`/api/chat/getChatroomDetail`, { params: { chatroomid: selectChat.chatroomid } }).then((res) => {
				setChatRoomDetail(null)
				setChatRoomDetail(res.data)
			})
		} else {
			setChatRoomDetail(null)
		}
	}
	const getUserProfileInfo = async () => {
		api.get(`/api/chat/getUserProfile`).then((res) => {
			setUserProfile(res.data)
		})
	}
	useEffect(() => {
		getChatList()
		setSocket(
			socketIOClient(process.env.NEXT_PUBLIC_CHAT_SERVER, {
				path: '/socket-chat',
			})
		)
		getUserProfileInfo()
	}, [])
	useEffect(() => {
		if (socket) {
			socket.on('recieveMessage', (room) => {
				setReadMessage(room)
				getChatRoomDetail(room)
				getChatList()
			})
			socket.on('recieveUnsendMessage', (room) => {
				getChatRoomDetail(room)
				getChatList()
			})
			socket.on('recieveChangeChatRoomName', (room) => {
				getChatRoomDetail(room)
				getChatList()
			})
			socket.on('recieveChangeProfilePic', (room) => {
				getChatRoomDetail(room)
				getChatList()
			})
			socket.on('recieveLeaveChatRoom', (room) => {
				setTimeout(function () {
					getChatRoomDetail(room)
					getChatList()
				}, 1000)
			})
			socket.on('recieveDeleteChatRoom', (room) => {
				socket.emit('leaveRoom', room)
				setChatRoomDetail(null)
				getChatList()
			})
			socket.on('recieveReadMessage', (room) => {
				getChatList()
				setTimeout(function () {
					getChatRoomDetail(room)
				}, 1000)
			})
			socket.on('recieveKickOut', (room) => {
				setChatRoomDetail(null)
				socket.emit('leaveRoom', room)
				getChatList()
			})
		}
	}, [socket])
	useEffect(() => {
		if (selectChat) {
			setReadMessage(selectChat.chatroomid)
			getChatRoomDetail()
			setOldChatRoom([...oldChatRoom, selectChat.chatroomid])
			socket.emit('joinRoom', selectChat.chatroomid)
			socket.emit('readMessage', selectChat.chatroomid)
		}
	}, [selectChat])
	useEffect(() => {
		if (oldChatRoom.length >= 2) {
			socket.emit('leaveRoom', oldChatRoom[oldChatRoom.length - 2])
		}
	}, [oldChatRoom])
	useEffect(() => {
		if (chatRoomDetail != null) {
			getChatList()
			setMessageLeftColor(chatRoomDetail.themeColor.recievecolor)
			setMessageRightColor(chatRoomDetail.themeColor.sendcolor)
		}
	}, [chatRoomDetail])

	return (
		<>
			<Nav>
				<Grid container justify="center" direction="row">
					<div style={{ width: '25%', backgroundColor: '#f4f5f7' }}>
						{(() => {
							if (userProfile) {
								return (
									<ChatContact
										socket={socket}
										setSelectChat={setSelectChat}
										selectChat={selectChat}
										userProfile={userProfile}
										chatList={chatList}
										getChatList={getChatList}
										setChatRoomDetail={setChatRoomDetail}
									/>
								)
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
											chatroomid: selectChat.chatroomid,
										}}
										chatRoomDetail={chatRoomDetail}
										userProfile={userProfile}
										getChatRoomDetail={getChatRoomDetail}
										socket={socket}
										getChatList={getChatList}
									/>
								)
							} else {
								return (
									<div style={{ width: '100%', height: '100%' }}>
										<EmptyChatIcon
											style={{
												display: 'block',
												marginLeft: 'auto',
												marginTop: 'auto',
												marginBottom: 'auto',
												marginRight: 'auto',
											}}
										/>
									</div>
								)
							}
						})()}
					</div>
					<div style={expand2}>
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
										socket={socket}
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
