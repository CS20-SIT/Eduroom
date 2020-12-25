import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import api from '../../api'
import DotDotIcon from './icons/DotDotIcon'
import MuteIcon from './icons/MuteIcon'
import DeleteIcon from './icons/TrashBinIcon'
import DirectionsRunIcon from './icons/DirectionsRunIcon'
import moment from 'moment'
import socketIOClient from 'socket.io-client'

export default function chatContact(props) {
	const [chatRoomProfilePicture, setChatRoomProfilePicture] = useState(null)
	const [disableClick, setDisableClick] = useState(false)
	const [dotdotStyle, setDotdotStyle] = useState({ visibility: 'hidden' })
	const [dropDownStyle, setDropDownStyle] = useState({ visibility: 'hidden' })
	const [style, setStyle] = useState({})

	const getChatRoomProfilePicture = async () => {
		api
			.get(`/api/chat/getChatRoomProfile`, {
				params: { chatroomid: props.chatRoomID },
			})
			.then((res) => {
				setChatRoomProfilePicture(res.data)
			})
	}
	const clickDelete = async () => {
		try {
			props.setChatRoomDetail(null)
			const res = await api.get(`/api/chat/deleteChatroom`, { params: { chatroomid: props.chatRoomID } })
			props.socket.emit('leaveRoom', props.chatRoomID)
			props.socket.emit('leaveListRoom', props.chatRoomID)
			props.socket.emit('deleteChatRoom', props.chatRoomID)
			props.getChatList()
		} catch (err) {}
	}
	const clickLeave = async () => {
		try {
			props.setChatRoomDetail(null)
			const res = await api.get(`/api/chat/leaveChatroom`, { params: { chatroomid: props.chatRoomID } })
			props.socket.emit('leaveRoom', props.chatRoomID)
			props.socket.emit('leaveChatRoom', props.chatRoomID)
			props.socket.emit('leaveListRoom', props.chatRoomID)
			props.getChatList()
		} catch (err) {}
	}
	const clickMute = async () => {
		try {
			const res = await api.get(`/api/chat/hideChatroom`, {
				params: { chatroomid: props.chatRoomID, hide: !props.hide },
			})
			props.setChatRoomDetail(null)
			props.getChatList()
		} catch (err) {}
	}
	useEffect(() => {
		getChatRoomProfilePicture()
		props.socket.on('changeChatList', (room) => {
			getChatRoomProfilePicture()
		})
	}, [])
	useEffect(() => {
		if (props.selectChat && props.selectChat.chatroomid == props.chatRoomID) {
			setStyle({ backgroundColor: 'rgba(213, 193, 252, 0.1)' })
		} else {
			setStyle({})
		}
	}, [props.selectChat])

	return (
		<>
			<div
				className="chatBox"
				onClick={() => {
					if (!disableClick) {
						props.onClick()
					}
				}}
				style={style}
				onMouseOver={() => {
					setDotdotStyle({})
				}}
				onMouseLeave={() => {
					setDotdotStyle({ visibility: 'hidden' })
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Avatar
						alt={props.name}
						src={chatRoomProfilePicture && chatRoomProfilePicture.chatroomprofilepicture}
						style={{ margin: 15 }}
					/>
					<div>
						<h5 style={{ display: 'inline' }}>{props.roomname}</h5>
						<br />
						<span style={{ fontSize: 12 }}>{props.resentMessage}</span>
					</div>
				</div>
				<div
					style={{
						textAlign: 'right',
						paddingRight: 20,
					}}
				>
					<p style={{ fontSize: 12 }}>{moment(props.recentMessageDate).fromNow()}</p>
					<div
						style={{ position: 'relative', display: 'inline-block' }}
						onMouseOver={() => {
							setDropDownStyle({})
							setDisableClick(true)
						}}
						onMouseLeave={() => {
							setDropDownStyle({ visibility: 'hidden' })
							setDisableClick(false)
						}}
					>
						<DotDotIcon style={dotdotStyle} />
						<div className="dropdown" style={dropDownStyle}>
							<span className="row" onClick={clickMute}>
								{(() => {
									if (props.hide) {
										return (
											<>
												<MuteIcon />
												<span className="sm2" style={{ marginRight: 10 }}>
													Unmute
												</span>
											</>
										)
									} else {
										return (
											<>
												<MuteIcon />
												<span className="sm" style={{ marginRight: 18 }}>
													Mute
												</span>
											</>
										)
									}
								})()}
							</span>
							<span className="row" onClick={clickLeave}>
								<br />
								<DirectionsRunIcon style={{ color: 'white', width: 15, height: 15, marginLeft: 5 }} />
								<span className="sm" style={{ marginRight: 13 }}>
									Leave
								</span>
							</span>
							<span className="row" onClick={clickDelete}>
								<br />
								<DeleteIcon style={{ marginLeft: 5 }} />
								<span className="sm" style={{ marginRight: 12 }}>
									Delete
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.chatBox {
					display: flex;
					cursor: pointer;
				}
				.chatBox:hover {
					display: flex;
					cursor: pointer;
					background-color: rgba(213, 193, 252, 0.1);
				}
				.dropdown {
					width: 85px;
					height: 70px;
					position: absolute;
					background-color: #473f47;
					right: 0;
					border-radius: 10px 0 10px 10px;
					box-shadow: 2px 2px 5px grey;
					opacity: 0.93;
					padding-top: 5px;
				}
				.sm {
					font-size: 12px;
					color: white;
					margin-left: 13px;
				}
				.sm2 {
					font-size: 12px;
					color: white;
					margin-left: 5px;
				}
				.row:hover {
					opacity: 0.5;
				}
			`}</style>
		</>
	)
}
