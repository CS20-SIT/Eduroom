import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Input from '@material-ui/core/Input'
import SendIcon from './icons/SendIcon'
import InsertEmoticonIcon from './icons/InsertEmoticonIcon'

export default function chatRoomBottomBar(props) {
	const enter = (e) => {
			if (e.keyCode === 13) {
				props.sendMessage()
			}
		}

	return (
		<>
			<div className="bottomBar">
				<Avatar
					alt={props.userProfile.firstname + ' ' + props.userProfile.lastname}
					src={props.userProfile.avatar}
					style={{ marginTop: 4, marginRight: 15 }}
				/>
				<Input
					id="input"
					value={props.message}
					onChange={(e) => {
						props.setMessage(e.target.value)
          }}
          onKeyDown={(e)=>{
            enter(e)
          }}
					placeholder="Write here..."
					inputProps={{ 'aria-label': 'description' }}
          style={{ width: '50%' }}
          autoComplete="off"
				/>
				<InsertEmoticonIcon style={{ marginLeft: 15, cursor: 'pointer' }} />
				<SendIcon
					style={{ marginLeft: 15, cursor: 'pointer' }}
					id="button"
					onClick={() => {
						props.sendMessage()
					}}
				/>
			</div>
			<style jsx>{`
				.bottomBar {
					background-color: #ffffff;
					width: calc(100% - 28px);
					border-top: 1px solid #dddddd;
					height: 80px;
					bottom: 0;
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 1;
				}
			`}</style>
		</>
	)
}
