import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import api from '../../api'
import DotDotIcon from './icons/DotDotIcon'
import MuteIcon from './icons/MuteIcon'
import DeleteIcon from './icons/TrashBinIcon'
import DirectionsRunIcon from './icons/DirectionsRunIcon'
import moment from 'moment'
import socketIOClient from "socket.io-client";

export default function chatContact(props) {
	const [contact, setContact] = useState(props.contact)
	const [chatRoomProfilePicture, setChatRoomProfilePicture] = useState(null)
	const [dotdotStyle, setDotdotStyle] = useState({ visibility: 'hidden' })
	const [dropDownStyle, setDropDownStyle] = useState({ visibility: 'hidden' })
	const [style, setStyle] = useState({})

	const joinSocketRoom = () =>{
		// const socket = socketIOClient(process.env.NEXT_PUBLIC_CHAT_SERVER, {
		// 	path: "/socket-chat",
		//   });
		// socket.emit('joinRoom',contact.chatRoomID)
	}

	const getChatRoomProfilePicture = async () => {
		api
			.get(`/api/chat/getChatRoomProfile`, {
				params:{chatroomid: contact.chatRoomID}
			})
			.then((res) => {
				setChatRoomProfilePicture(res.data)
			})
	}
	const clickDelete = async() =>{
		const res = await api.get(`/api/chat/deleteChatroom`,{params:{chatroomid:contact.chatRoomID}})
		props.setChatRoomDetail(null)
		props.getChatList()
	}
	const clickLeave = async() =>{
		const res = await api.get(`/api/chat/leaveChatroom`,{params:{chatroomid:contact.chatRoomID}})
		props.setChatRoomDetail(null)
		props.getChatList()
	}
	const clickMute = async() =>{
		const res = await api.get(`/api/chat/hideChatroom`,{params:{chatroomid:contact.chatRoomID}})
		props.setChatRoomDetail(null)
		props.getChatList()
	}
	useEffect(() => {
		getChatRoomProfilePicture()
	}, [])
	useEffect(() => {
		if (props.selectChat && props.selectChat.chatroomid == contact.chatRoomID) {
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
					props.onClick()
					joinSocketRoom()
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
						alt={contact.name}
						src={chatRoomProfilePicture && chatRoomProfilePicture.chatroomprofilepicture}
						style={{ margin: 15 }}
					/>
					<div>
						<h5 style={{ display: 'inline' }}>{contact.name}</h5>
						<br />
						<span style={{ fontSize: 12 }}>{contact.resentMessage}</span>
					</div>
				</div>
				<div
					style={{
						textAlign: 'right',
						paddingRight: 20,
					}}
				>
					<p style={{ fontSize: 12 }}>{moment(contact.recentMessageDate).fromNow()}</p>
					<div
						style={{ position: 'relative', display: 'inline-block' }}
						onMouseOver={() => {
							setDropDownStyle({})
						}}
						onMouseLeave={() => {
							setDropDownStyle({ visibility: 'hidden' })
						}}
					>
						<DotDotIcon style={dotdotStyle} />
						<div className="dropdown" style={dropDownStyle}>
							<span className="row" onClick={clickMute}>
								<MuteIcon />
								<span className="sm" style={{ marginRight: 18 }}>
									Mute
								</span>
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
								<DeleteIcon style={{marginLeft: 5 }}/>
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
				.row:hover {
					opacity: 0.5;
				}
			`}</style>
		</>
	)
}
