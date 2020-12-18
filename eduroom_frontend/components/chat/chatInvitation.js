import React, { useState, useEffect } from 'react'
import style from '../../styles/chat/chat'
import Avatar from '@material-ui/core/Avatar'
import CancelIcon from './icons/CancelIcon'
import ExitIcon from './icons/ExitIcon'
import AcceptIcon from './icons/AcceptIcon'
import api from '../../api'

export default function chatInvitation(props) {
	const [scrollBarStyle, setscrollBarStyle] = useState('nochat')
  const [invitations, setInvitations] = useState(null)
  const getInvitations = async () => {
		const res = await api.get(`/api/chat/getInvitationListMockup`)
		setInvitations(res.data)
  }
  const getInvitations2 = async () => {
		const res = await api.get(`/api/chat/getInvitationListMockup2`)
		setInvitations(res.data)
  }
  const acceptInvitation = async (id) => {
		const res = await api.get(`/api/chat/acceptInvitationMockup`,{userID:id})
		getInvitations2()
  }
  const declineInvitation = async (id) => {
		const res = await api.get(`/api/chat/declineInvitationMockup`,{userID:id})
		getInvitations2()
  }
	useEffect(() => {
		getInvitations()
	}, [])
	return (
		<>
			<div
				style={{
					borderLeft: '1px solid #dddddd',
					overflowY: 'scroll',
					overflowX: 'hidden',
					position: 'relative',
					width: 300,
				}}
				className={scrollBarStyle}
				onMouseOver={() => {
					setscrollBarStyle('chat')
				}}
				onMouseOut={() => {
					setscrollBarStyle('nochat')
				}}
			>
				<ExitIcon
					style={{ position: 'absolute', top: 20, right: 10, fontSize: 18, cursor: 'pointer' }}
					onClick={props.handleClose}
				/>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						paddingTop: 20,
						flexDirection: 'column',
						height: '100%',
					}}
				>
					<h4>Invitations</h4>
					<div
						style={{
							width: '75%',
							borderBottom: '1px solid #dddddd',
							marginLeft: 14,
							marginBottom: 15,
						}}
					/>
					<div>
						{invitations &&
							invitations.invitations.map((el) => {
								return (
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											width: '100%',
										}}
									>
										<Avatar
											style={{ width: 35, height: 35, marginLeft: 14, marginRight: 14 }}
											alt={el.chatRoomName}
											src={el.profilePicture}
										/>
										<div style={{ marginRight: 14, width: '150px' }}>
											<h5
												style={{
													textOverflow: 'ellipsis',
													overflow: 'hidden',
													whiteSpace: 'nowrap',
													marginBottom: 0,
													marginTop: 12,
												}}
											>
												{el.chatRoomName}
											</h5>
											<p
												style={{
													fontSize: 12,
													textOverflow: 'ellipsis',
													overflow: 'hidden',
													whiteSpace: 'nowrap',
													marginTop: 0,
												}}
											>
												Invited By : {el.invitor}
											</p>
										</div>
										<AcceptIcon style={{ cursor: 'pointer', marginLeft: 'auto' }} onClick={()=>{acceptInvitation(el.invitaionID)}}/>
										<CancelIcon style={{ cursor: 'pointer' }} onClick={()=>{declineInvitation(el.invitaionID)}}/>
									</div>
								)
							})}
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</>
	)
}
