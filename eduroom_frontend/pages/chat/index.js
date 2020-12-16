import Grid from '@material-ui/core/Grid'
import React, { useState, useEffect } from 'react'
import ChatRoom from '../../components/chat/chatRoom'
import ChatContact from '../../components/chat/chatContact'
import EditChat from '../../components/chat/editChat'
import Nav from '../../components/template/generalnonav'

export default function Chat() {
	const [messageLeftColor, setMessageLeftColor] = useState('#5B5B5B')
	const [messageRightColor, setMessageRightColor] = useState('#EB7DB1')
	const [expand, setExpand] = useState({
		width: 'calc(75% - 14px)',
		position: 'relative',
		marginLeft: 14,
	})
	const [expand2, setExpand2] = useState({
		display: 'none',
	})

	return (
		<>
			<Nav>
				<Grid container justify="center" direction="row">
					<div style={{ width: '25%', backgroundColor: '#f4f5f7' }}>
						<ChatContact />
					</div>
					<div style={expand}>
						<ChatRoom
							style={{ backgroundColor: '#f4f5f7' }}
							chatRoom={{
								setExpandChat: setExpand,
								setExpandEdit: setExpand2,
								messageLeftColor: messageLeftColor,
								messageRightColor: messageRightColor,
							}}
						/>
					</div>
					<div item style={expand2}>
						<EditChat
							edit={{
								messageLeftColor: messageLeftColor,
								messageRightColor: messageRightColor,
								setMessageLeftColor: setMessageLeftColor,
								setMessageRightColor: setMessageRightColor,
							}}
						/>
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