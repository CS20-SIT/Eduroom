import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import api from '../../api'

export default function chatContact(props) {
	const [contact, setContact] = useState(props.contact)
	const [chatRoomProfilePicture, setChatRoomProfilePicture] = useState(null)
	const getChatRoomProfilePicture = async () => {
		api.get(`/api/chat/getChatRoomProfilePictureMockup1`, {
			chatRoomID: contact.chatRoomID
		  }).then((res) => {
			setChatRoomProfilePicture(res.data)
		})
	}

	useEffect(() => {
		getChatRoomProfilePicture()
	}, [])

	return (
		<div>
			<div className="chatBox">
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Avatar alt={contact.name} src={chatRoomProfilePicture && chatRoomProfilePicture.chatRoomProfilePicture} style={{margin:15}}/>
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
					<p style={{ fontSize: 12 }}>{contact.resentMessageDate}</p>
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
			`}</style>
		</div>
	)
}
