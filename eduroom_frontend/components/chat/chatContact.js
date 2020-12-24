import React, { Fragment, useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import SearchChat from '../chat/searchChat'
import ContactPerson from '../chat/contactPerson'
import AddCircleIcon from './icons/AddCircleIcon'
import style from '../../styles/chat/chat'
import Dialog from '@material-ui/core/Dialog'
import CreateChatRoom from '../chat/createChatRoom'
import NotificationIcon from './icons/NotificationIcon'
import ChatInvitation from '../chat/chatInvitation'
import SearchResult from '../chat/searchResult'
import api from '../../api'
import socketIOClient from 'socket.io-client'

export default function chatContact(props) {
	const [contact, setContact] = useState(props.contact)
	const [peopleTest, setPeopleTest] = useState('nopeople')
	const [openNotification, setOpenNotification] = useState(false)
	const [openCreateChat, setOpenCreateChat] = useState(false)
	const [userProfile, setUserProfile] = useState(props.userProfile)
	const [searchInput, setSearchInput] = useState('')
	const [searchResult, setSearchResult] = useState(null)
	const [ignoreBlur, setIgnoreBlur] = useState(false)
	const [invitations, setInvitations] = useState(null)

	const getInvitations = async () => {
		const res = await api.get(`/api/chat/getInvitationList`)
		setInvitations(res.data)
	}
	const getSearchResult = async () => {
		setSearchResult(null)
		const res = await api.get(`/api/chat/getSearchResult`, { params: { keyword: searchInput } })
		setSearchResult(res.data)
	}
	const clickSelectResult = async (el) => {
		const res = await api.get(`/api/chat/selectSearchResult`, { params: { member: el.userid } })
		if (res.data.chatroomid) {
			props.setSelectChat(res.data)
			props.getChatList()
		} else {
			props.getChatList()
		}
	}
	const handleClickOpenNotification = () => {
		setOpenNotification(true)
	}
	const handleCloseNotification = () => {
		setOpenNotification(false)
	}
	const handleOpenCreateChat = () => {
		setOpenCreateChat(true)
	}
	const handleCloseCreateChat = () => {
		setOpenCreateChat(false)
	}
	const handleSelect = (el) => {
		setSearchResult(null)
		clickSelectResult(el)
	}
	useEffect(() => {
		getInvitations()
	}, [])
	useEffect(() => {
		if (contact) {
			contact.sort((a, b) => b.resentMessageDate - a.resentMessageDate)
			setContact(contact)
		}
	}, [contact])
	useEffect(() => {
		if (searchInput != '' || searchInput != null) {
			setSearchResult(null)
			getSearchResult()
		}
	}, [searchInput])

	return (
		<>
			<div
				className={peopleTest}
				style={{
					overflowY: 'scroll',
					overflowX: 'hidden',
					position: 'relative',
				}}
				onMouseOver={() => {
					setPeopleTest('people')
				}}
				onMouseOut={() => {
					setPeopleTest('nopeople')
				}}
			>
				{
					<NotificationIcon
						style={{
							position: 'absolute',
							top: 20,
							right: 10,
							fontSize: 18,
							cursor: 'pointer',
						}}
						onClick={handleClickOpenNotification}
						dot={invitations && invitations.invitations.length > 0}
					/>
				}
				<Dialog disableBackdropClick onClose={handleCloseNotification} open={openNotification}>
					<ChatInvitation handleClose={handleCloseNotification} getChatList={props.getChatList} />
				</Dialog>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						paddingTop: 20,
						flexDirection: 'column',
						marginLeft: 14,
					}}
				>
					<Avatar
						style={{ width: 60, height: 60 }}
						alt={userProfile && userProfile.firstname + ' ' + userProfile.lastname}
						src={userProfile && userProfile.avatar}
					/>
					<h4 style={{ textAlign: 'center' }}>{userProfile && userProfile.firstname + ' ' + userProfile.lastname}</h4>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onFocus={() => {
							getSearchResult()
							setIgnoreBlur(false)
						}}
						onBlur={() => {
							if (!ignoreBlur) {
								setSearchResult(null)
								setIgnoreBlur(false)
							}
						}}
					>
						<div style={{ position: 'relative', display: 'inline-block' }}>
							<SearchChat
								input={searchInput}
								setInput={setSearchInput}
								getSearchResult={getSearchResult}
								searchResult={searchResult}
							/>
							{(() => {
								if (!searchInput == null || !searchInput == '') {
									return (
										<SearchResult
											searchResult={searchResult}
											setIgnoreBlur={setIgnoreBlur}
											handleSelect={handleSelect}
										/>
									)
								}
							})()}
						</div>
						<AddCircleIcon
							style={{ marginLeft: 20, color: '#FB9CCB', cursor: 'pointer' }}
							onClick={handleOpenCreateChat}
						/>
					</div>
					<Dialog disableBackdropClick onClose={handleCloseCreateChat} open={openCreateChat}>
						<CreateChatRoom
							handleClose={handleCloseCreateChat}
							userProfile={userProfile}
							getChatList={props.getChatList}
						/>
					</Dialog>
					<div
						style={{
							width: '100%',
							borderBottom: '1px solid #dddddd',
							marginLeft: 14,
							marginTop: 30,
						}}
					/>
				</div>
				<div style={{ marginLeft: 14 }}>
					<h4 style={{ marginLeft: 14 }}>Chat</h4>
					{props.chatList &&
						props.chatList.map((el, i) => {
							if (el.roomname == null) {
								return (
									<ContactPerson
										key={el.chatroomid}
										chatRoomID={el.chatroomid}
										roomname={el.roomname}
										name={el.firstname}
										hide={el.hide}
										resentMessage={'Message: ' + el.message}
										recentMessageDate={new Date(el.sendtime).getTime()}
										onClick={() => {
											props.setSelectChat(el)
										}}
										selectChat={props.selectChat}
										getChatList={props.getChatList}
										setChatRoomDetail={props.setChatRoomDetail}
										socket={props.socket}
									/>
								)
							} else if (el.message == null) {
								return (
									<ContactPerson
										key={el.chatroomid}
										chatRoomID={el.chatroomid}
										name={el.firstname}
										hide={el.hide}
										roomname={el.roomname}
										resentMessage={'Message: ' + el.message}
										recentMessageDate={new Date(el.sendtime).getTime()}
										onClick={() => {
											props.setSelectChat(el)
										}}
										selectChat={props.selectChat}
										getChatList={props.getChatList}
										setSelectChat={props.setSelectChat}
										setChatRoomDetail={props.setChatRoomDetail}
										socket={props.socket}
									/>
								)
							} else if (el.sticker == true) {
								return (
									<ContactPerson
										key={el.chatroomid}
										chatRoomID={el.chatroomid}
										name={el.firstname}
										hide={el.hide}
										roomname={el.roomname}
										resentMessage={'Message: ' + el.message}
										recentMessageDate={new Date(el.sendtime).getTime()}
										onClick={() => {
											props.setSelectChat(el)
										}}
										selectChat={props.selectChat}
										getChatList={props.getChatList}
										setSelectChat={props.setSelectChat}
										setChatRoomDetail={props.setChatRoomDetail}
										socket={props.socket}
									/>
								)
							} else {
								return (
									<ContactPerson
										key={el.chatroomid}
										chatRoomID={el.chatroomid}
										name={el.firstname}
										roomname={el.roomname}
										hide={el.hide}
										resentMessage={'Message: ' + el.message}
										recentMessageDate={new Date(el.sendtime).getTime()}
										onClick={() => {
											props.setSelectChat(el)
										}}
										selectChat={props.selectChat}
										getChatList={props.getChatList}
										setSelectChat={props.setSelectChat}
										setChatRoomDetail={props.setChatRoomDetail}
										socket={props.socket}
									/>
								)
							}
						})}
				</div>
			</div>
			<style jsx>{style}</style>
		</>
	)
}
