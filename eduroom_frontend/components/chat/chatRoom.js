import React, { useState, useEffect } from 'react'
import KeyboardArrowDownIcon from './icons/KeyboardArrowDownIcon'
import MessageRight from './messageRight'
import MessageLeft from './messageLeft'
import MessageStickerRight from './messageStickerRight'
import MessageStickerLeft from './messageStickerLeft'
import MessageError from './messageError'
import MessageSystem from './messageSystem'
import style from '../../styles/chat/chat'
import ChatRoomTopBar from './chatRoomTopBar'
import ChatRoomBottomBar from './chatRoomBottomBar'
import api from '../../api'
import socketIOClient from 'socket.io-client'

let socket
export default function chatRoom(props) {
	const [messageDivStyle, setMessageDivStyle] = useState({ marginTop: 60, marginBottom: 100, visibility: 'hidden' })
	const chatRoom = props.chatRoom
	const [scrollBarStyle, setScrollBarStyle] = useState('nochat')
	const [message, setMessage] = useState(null)
	const [collapse,setCollapse] = useState(false)

	const [smoothScroll, setSmoothScroll] = useState({
		overflowY: 'scroll',
	})
	const [scrollDownStyle, setScrollDownStyle] = useState({
		fontSize: 50,
		cursor: 'pointer',
		display: 'none',
	})
	const handleExpand = () => {
		if (collapse == true) {
			setCollapse(false)
			chatRoom.setExpandChat({ width: 'calc(75% - 14px)', position: 'relative', marginLeft: 14 })
			chatRoom.setExpandEdit({ display: 'none' })
		} else {
			setCollapse(true)
			chatRoom.setExpandChat({ width: 'calc(50% - 14px)', position: 'relative', marginLeft: 14 })
			chatRoom.setExpandEdit({ width: '25%' })
		}
	}
	const handleScroll = (e) => {
		const scrollTopMax = e.target.scrollHeight - e.target.clientHeight
		const scrollTop = e.target.scrollTop
		if (scrollTop < scrollTopMax - 100) {
			setScrollDownStyle({
				fontSize: 50,
				cursor: 'pointer',
			})
		} else {
			setScrollDownStyle({
				fontSize: 50,
				display: 'none',
				cursor: 'pointer',
			})
		}
	}
	const scrollDown = () => {
		setSmoothScroll({ overflowY: 'scroll' })
		var obj = document.getElementById('scroll')
		obj.scrollTop = obj.scrollHeight
		setMessageDivStyle({ marginTop: 60, marginBottom: 100 })
	}
	const resendMessage = async (mess, index) => {
		if (mess != '' && mess != null) {
			const res = await api.get(`/api/chat/sendMessage`, { params: { message: mess, chatroomid: chatRoom.chatroomid } })
			if (res.data.success == true) {
				props.getChatRoomDetail()
			} else {
				props.chatRoomDetail.message.push({
					system: false,
					sticker: false,
					error: true,
					index: props.chatRoomDetail.message.length,
					messageid: null,
					senderid: props.userProfile.userid,
					message: mess,
					sendername: props.userProfile.userfirstname,
					senderprofilepicture: props.userProfile.avatar,
					sendtime: null,
					reader: [],
				})
			}
			props.chatRoomDetail.message[index] = null
			scrollDown()
		}
	}
	const sendMessage = async () => {
		if (message != '' && message != null) {
			const res = await api.get(`/api/chat/sendMessage`, {
				params: { message: message, chatroomid: chatRoom.chatroomid },
			})
			if (res.data.success == true) {
				props.socket.emit('sendMessage', chatRoom.chatroomid)
			} else {
				props.chatRoomDetail.message.push({
					system: false,
					sticker: false,
					error: true,
					messageid: null,
					index: props.chatRoomDetail.message.length,
					senderid: props.userProfile.userid,
					message: message,
					sendername: props.userProfile.firstname,
					senderprofilepic: props.userProfile.avatar,
					sendtime: null,
					reader: [],
				})
			}
			setMessage('')
			scrollDown()
		}
	}
	useEffect(() => {
		scrollDown()
	}, [])
	useEffect(() => {
		setScrollDownStyle({
			fontSize: 50,
			display: 'none',
			cursor: 'pointer',
		})
		scrollDown()
	}, [props.chatRoomDetail])

	return (
		<>
			<div
				id="scroll"
				onScroll={(e) => {
					handleScroll(e)
				}}
				className={scrollBarStyle}
				onMouseOver={() => {
					setScrollBarStyle('chat')
				}}
				onMouseOut={() => {
					setScrollBarStyle('nochat')
				}}
				style={smoothScroll}
			>
				<ChatRoomTopBar
					name={props.chatRoomDetail.chatroomname}
					profilePic={props.chatRoomDetail.chatRoomProfile}
					handleExpand={handleExpand}
				/>
				<div style={messageDivStyle}>
					{props.chatRoomDetail.message.map((el ,i) => {
						if (el) {
							if (el.system) {
								return <MessageSystem key={i} message={el.message} />
							} else if (el.senderid == props.userProfile.userid) {
								if (el.error == true) {
									return (
										<MessageError
										key={i}
											message={{
												text: el.message,
												color: props.chatRoomDetail.themeColor.sendcolor,
												index: el.index,
												reader: el.reader,
											}}
											resendMessage={resendMessage}
										/>
									)
								} else {
									if(el.sticker){
										return(
										<MessageStickerRight
										key={i}
											message={{
												text: el.message,
												sentTime: el.sendtime,
												color: props.chatRoomDetail.themeColor.sendcolor,
												reader: el.reader,
												messageid: el.messageid,
											}}
											getChatRoomDetail={props.getChatRoomDetail}
											chatRoomDetail={props.chatRoomDetail}
											socket={props.socket}
										/>)
									}else{
										return (
											<MessageRight
											key={i}
												message={{
													text: el.message,
													sentTime: el.sendtime,
													color: props.chatRoomDetail.themeColor.sendcolor,
													reader: el.reader,
													messageid: el.messageid,
												}}
												getChatRoomDetail={props.getChatRoomDetail}
												chatRoomDetail={props.chatRoomDetail}
												socket={props.socket}
											/>
										)
									}
									}
							} else {
								if(el.sticker){
									return(
										<MessageStickerLeft
											message={{
												text: el.message,
												sentTime: el.sendtime,
												color: props.chatRoomDetail.themeColor.recievecolor,
												name: el.senderName,
												profilePic: el.senderprofilepic,
												reader: el.reader,
											}}
										/>
									)
								}else{
									return (
										<MessageLeft
											message={{
												text: el.message,
												sentTime: el.sendtime,
												color: props.chatRoomDetail.themeColor.recievecolor,
												name: el.senderName,
												profilePic: el.senderprofilepic,
												reader: el.reader,
											}}
										/>
									)
								}
							}
						}
					})}
				</div>
				<div className="arrowDown">
					<KeyboardArrowDownIcon style={scrollDownStyle} color={chatRoom.messageRightColor} onClick={scrollDown} />
				</div>
				<ChatRoomBottomBar
					userProfile={props.userProfile}
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
					chatroomid={chatRoom.chatroomid}
					socket={props.socket}
				/>
			</div>
			<style jsx>{style}</style>
		</>
	)
}
