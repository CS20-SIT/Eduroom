import React, { useState, useEffect } from 'react'
import KeyboardArrowDownIcon from './icons/KeyboardArrowDownIcon'
import MessageRight from './messageRight'
import MessageLeft from './messageLeft'
import MessageError from './messageError'
import MessageSystem from './messageSystem'
import style from '../../styles/chat/chat'
import ChatRoomTopBar from './chatRoomTopBar'
import ChatRoomBottomBar from './chatRoomBottomBar'
import api from '../../api'

export default function chatRoom(props) {
	const [messageDivStyle, setMessageDivStyle] = useState({ marginTop: 60, marginBottom: 100, visibility: 'hidden' })
	const chatRoom = props.chatRoom
	const [scrollBarStyle, setScrollBarStyle] = useState('nochat')
	const [message, setMessage] = useState(null)
	let collapse = false

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
			collapse = false
			chatRoom.setExpandChat({ width: 'calc(75% - 14px)', position: 'relative', marginLeft: 14 })
			chatRoom.setExpandEdit({ display: 'none' })
		} else {
			collapse = true
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
		setSmoothScroll({ overflowY: 'scroll', scrollBehavior: 'smooth' })
	}
	const resendMessage = async (mess, index) => {
		if (mess != '' && mess != null) {
			const res = await api.get(`/api/chat/sendMessageMockup`)
			if (res.data.success == true) {
				props.getChatRoomDetail()
			} else {
				props.chatRoomDetail.messages.push({
					system: false,
					sticker: false,
					error: true,
					index: props.chatRoomDetail.messages.length,
					messageID: null,
					senderID: props.userProfile.userID,
					message: mess,
					senderName: props.userProfile.userFirstName,
					senderProfilePic: props.userProfile.profilePicture,
					sendTime: null,
					reader: [],
				})
			}
			props.chatRoomDetail.messages[index] = null
			scrollDown()
		}
	}
	const sendMessage = async () => {
		if (message != '' && message != null) {
			const res = await api.get(`/api/chat/sendMessageMockup`)
			if (res.data.success == true) {
				props.getChatRoomDetail()
			} else {
				props.chatRoomDetail.messages.push({
					system: false,
					sticker: false,
					error: true,
					messageID: null,
					index: props.chatRoomDetail.messages.length,
					senderID: props.userProfile.userID,
					message: message,
					senderName: props.userProfile.userFirstName,
					senderProfilePic: props.userProfile.profilePicture,
					sendTime: null,
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
					chatRoom={{
						name: props.chatRoomDetail.chatRoomName,
						profilePic: props.chatRoomDetail.chatRoomProfile,
						handleExpand: handleExpand,
					}}
				/>
				<div style={messageDivStyle}>
					{props.chatRoomDetail.messages.map((el) => {
						if (el) {
							if (el.system) {
								return <MessageSystem message={el.message} />
							} else if (el.senderID == props.userProfile.userID) {
								if (el.error == true) {
									return (
										<MessageError
											message={{ text: el.message, color: props.chatRoomDetail.themeColor.sendColor, index: el.index }}
											resendMessage={resendMessage}
										/>
									)
								} else {
									return (
										<MessageRight
											message={{
												text: el.message,
												sentTime: el.sendTime,
												color: props.chatRoomDetail.themeColor.sendColor,
											}}
										/>
									)
								}
							} else {
								return (
									<MessageLeft
										message={{
											text: el.message,
											sentTime: el.sendTime,
											color: props.chatRoomDetail.themeColor.recieveColor,
											name: el.senderName,
											profilePic: el.senderProfilePic,
										}}
									/>
								)
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
				/>
			</div>
			<style jsx>{style}</style>
		</>
	)
}
