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

export default function chatContact(props) {
	const [contact, setContact] = useState(props.contact)
	const [peopleTest, setPeopleTest] = useState('nopeople')
	const [openNotification, setOpenNotification] = useState(false)
	const [openCreateChat, setOpenCreateChat] = useState(false)
	const [userProfile, setUserProfile] = useState(props.userProfile)
	const [chatList, setChatList] = useState(null)
	const [searchInput, setSearchInput] = useState('')
	const [searchResult, setSearchResult] = useState(null)
	const [ignoreBlur, setIgnoreBlur] = useState(false)
	const [invitations, setInvitations] = useState(null)

    const getInvitations = async () => {
		const res = await api.get(`/api/chat/getInvitationListMockup`)
		setInvitations(res.data)
    }
	const getChatList = async () => {
		const res = await api.get(`/api/chat/getChatListMockup`)
		setChatList(res.data)
	}
	const getSearchResult = async () => {
		const res = await api.get(`/api/chat/getSearchResultMockup`)
		setSearchResult(res.data)
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
	}
	useEffect(() => {
		getChatList()
		getInvitations()
	}, [])
	useEffect(()=>{
		if(contact){
			contact.sort((a,b)=>b.resentMessageDate - a.resentMessageDate)
        setContact(contact)
		}
	},[contact])
	useEffect(() => {
		if(chatList){
			props.setSelectChat(chatList[0])
		}
	}, [chatList])

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
				{<NotificationIcon
					style={{
						position: 'absolute',
						top: 20,
						right: 10,
						fontSize: 18,
						cursor: 'pointer',
					}}
					onClick={handleClickOpenNotification}
					dot={invitations&&invitations.invitations.length>0}
				/>}
				<Dialog disableBackdropClick onClose={handleCloseNotification} open={openNotification}>
					<ChatInvitation handleClose={handleCloseNotification} />
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
						alt={userProfile && userProfile.userFirstName + ' ' + userProfile.userLastName}
						src={userProfile && userProfile.profilePicture}
					/>
					<h4 style={{ textAlign: 'center' }}>
						{userProfile && userProfile.userFirstName + ' ' + userProfile.userLastName}
					</h4>
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
							<CreateChatRoom handleClose={handleCloseCreateChat} />
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
					{chatList &&
						chatList.map((el) => {
							if (el.roomname == null) {
								return (
									<ContactPerson
										key={el.chatroomid}
										contact={{
											chatRoomID: el.chatroomid,
											name: el.firstname,
											resentMessage: el.firstname + ': ' + el.message,
											resentMessageDate: new Date(el.sendtime).getTime(),
										}}
										onClick={()=>{props.setSelectChat(el)}}
										selectChat={props.selectChat}
									/>
								)
							} else {
								return (
									<ContactPerson
										key={el.chatroomid}
										contact={{
											chatRoomID: el.chatroomid,
											name: el.roomname,
											resentMessage: el.firstname + ': ' + el.message,
											resentMessageDate: new Date(el.sendtime).getTime(),
										}}
										onClick={()=>{props.setSelectChat(el)}}
										selectChat={props.selectChat}
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
