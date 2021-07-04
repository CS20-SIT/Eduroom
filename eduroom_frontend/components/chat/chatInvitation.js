import { useState, useEffect } from 'react'
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
		try {
			const res = await api.get(`/api/chat/getInvitationList`)
			setInvitations(res.data)
		} catch (err) {}
	}
	const acceptInvitation = async (id) => {
		try {
			const res = await api.get(`/api/chat/acceptInvitation`, { params: { invitationid: id } })
			getInvitations()
			props.getChatList()
		} catch (err) {}
	}
	const declineInvitation = async (id) => {
		try {
			const res = await api.get(`/api/chat/declineInvitation`, { params: { invitationid: id } })
			getInvitations()
			props.getChatList()
		} catch (err) {}
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
							invitations.invitations.map((el, i) => {
								return (
									<div
										key={i}
										style={{
											display: 'flex',
											alignItems: 'center',
											width: '100%',
										}}
									>
										<Avatar
											style={{ width: 35, height: 35, marginLeft: 14, marginRight: 14 }}
											alt={el.chatroomname}
											src={el.profilepicture}
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
												{el.chatroomname}
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
										<AcceptIcon
											style={{ cursor: 'pointer', marginLeft: 'auto' }}
											onClick={() => {
												acceptInvitation(el.invitationid)
											}}
										/>
										<CancelIcon
											style={{ cursor: 'pointer' }}
											onClick={() => {
												declineInvitation(el.invitationid)
											}}
										/>
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
