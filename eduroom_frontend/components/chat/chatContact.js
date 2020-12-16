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
	const [userProfile, setUserProfile] = useState(null)
	const [chatList, setChatList] = useState(null)
	const [searchInput, setSearchInput] = useState('')
	const [searchResult, setSearchResult] = useState(null)
	const [ignoreBlur, setIgnoreBlur] = useState(false)
	const [invitations, setInvitations] = useState(null)

	const getUserProfileInfo = async () => {
		api.get(`/api/chat/getUserProfileMockup`).then((res) => {
			setUserProfile(res.data)
		})
	}
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
	useEffect(() => {
		const contact = [
			{
				name: 'Krishadawut',
				recentMessage: 'Hi Tom',
				recentMessageDate: new Date("12/14/2020").getTime(),
			},
			{
				name: 'Boyplus',
				recentMessage: 'Hi Tom',
				recentMessageDate: new Date().getTime() - 10000,
			},
			{
				name: 'GGolfz',
				recentMessage: 'Hi Tom',
				recentMessageDate: new Date("12/08/2020").getTime(),
			},
    ]
    contact.sort((a,b)=>b.resentMessageDate - a.resentMessageDate)
    setContact(contact)
	}, [])

	const handleClickOpenNotification = () => {
		setOpenNotification(true)
	}
	const handleCloseNotification = () => {
		setOpenNotification(false)
	}
	const handleClickOpenCreateChat = () => {
		setOpenCreateChat(true)
	}
	const handleCloseCreateChat = () => {
		setOpenCreateChat(false)
	}
	const handleSelect = (el) => {
		if (true) {
			console.log('check')
		}
		setSearchResult(null)
	}
	useEffect(() => {
		getUserProfileInfo()
		getChatList()
		getInvitations()
	}, [])

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
						}}
						onBlur={() => {
							if (!ignoreBlur) {
								setSearchResult(null)
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
											setSearchResult={setSearchResult}
											setIgnoreBlur={setIgnoreBlur}
											handleSelect={handleSelect}
										/>
									)
								}
							})()}
						</div>
						<AddCircleIcon
							style={{ marginLeft: 20, color: '#FB9CCB', cursor: 'pointer' }}
							onClick={handleClickOpenCreateChat}
						/>
						<Dialog disableBackdropClick onClose={handleCloseCreateChat} open={openCreateChat}>
							<CreateChatRoom handleClose={handleCloseCreateChat} />
						</Dialog>
					</div>
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
											resentMessageDate: el.sendtime,
										}}
									/>
								)
							} else {
								return (
									<ContactPerson
										key={el.chatroomid}
										contact={{
											name: el.roomname,
											resentMessage: el.firstname + ': ' + el.message,
											resentMessageDate: el.sendtime,
										}}
									/>
								)
							}
						})}
						{contact?.map((el) => {
							return <ContactPerson contact={el} />
						})}
				</div>
			</div>
			<style jsx>{style}</style>
		</>
	)
}
