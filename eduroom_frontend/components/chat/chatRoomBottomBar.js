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
					onKeyDown={(e) => {
						enter(e)
					}}
					placeholder="Write here..."
					inputProps={{ 'aria-label': 'description' }}
					style={{ width: '50%' }}
					autoComplete="off"
				/>
				<div className="dropdown">
				    <InsertEmoticonIcon style={{ marginLeft: 15, cursor: 'pointer' }} />
					<div className="dropdown-content">
						<p>Hello World!</p>
					</div>
				</div>
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
				.dropdown {
					position: relative;
					display: inline-block;
				  }
				  
				  .dropdown-content {
					display: none;
					position: absolute;
					background-color: #f5f5f5;
					border-radius:10px 10px 0 10px;
					width: 250px;
					height:250px;
					box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
					padding: 12px 16px;
					!z-index: 1;
					bottom: 100%; 
					margin-bottom:10px;
					right:0;
					margin-right:5px;
				  }
				  
				  .dropdown:hover .dropdown-content {
					display: block;
				  }
			`}</style>
		</>
	)
}
