import React, { useState, useEffect } from 'react'
import style from '../../styles/chat/chat'
import Avatar from '@material-ui/core/Avatar'
import Colour from './colour'
import ChangeThemeColorTitle from './changeThemeColorTitle'
import AddMember from './addMember'
import CreateIcon from './icons/CreateIcon'
import CancelIcon from './icons/CancelIcon'
import Leave from './leave'
import DeleteGroup from './/deleteGroup'
import CameraAltIcon from './icons/CameraAlt'
import Input from '@material-ui/core/Input'
import BlueInput from './blueInput'
import AcceptIcon from './icons/AcceptIcon'
import SearchResult from '../chat/searchResult'
import api from '../../api'

export default function editChat(props) {
	const [scrollBarStyle, setscrollBarStyle] = useState('nochat')
	const [changeImage, setChangeImage] = useState(null)
	const [changeChatRoomName, setChangeChatRoomName] = useState(false)
	const [roomName, setRoomName] = useState(null)
	const [searchInput, setSearchInput] = useState(null)
	const [searchResult, setSearchResult] = useState(null)
	const [isFocus, setIsFocus] = useState(false)
	const [isSelect, setIsSelect] = useState(false)
	const [ignoreBlur, setIgnoreBlur] = useState(false)
	const [chatRoomMembers, setChatRoomMembers] = useState(null)
	const getSearchResult = async () => {
		setSearchResult(null)
		const res = await api.get(`/api/chat/getSearchResult`, { params: { keyword: searchInput } })
		setSearchResult(res.data)
	}
	const edit = props.edit

	const changeColor = async (l, r) => {
		const res = await api.get(`/api/chat/changeThemeColor`, {
			params: { chatroomid: props.chatRoomDetail.chatroomid, sendcolor: r, recievecolor: l },
		})
		props.getChatRoomDetail()
	}
	const getChatRoomMembers = async () => {
		let message = []
		for (let i = 0; i < props.chatRoomDetail.membersID.length; i++) {
			const res = await api.get(`/api/chat/getUserProfileFromID`, {
				params: { userid: props.chatRoomDetail.membersID[i] },
			})
			message.push(res.data)
		}
		setChatRoomMembers(message)
	}
	const uploadPic = async (e) => {
		var bodyFormData = new FormData();
		bodyFormData.append('profilePic', e.target.files[0]);
		const config = { headers: { 'Content-Type': 'multipart/form-data' }};
		api.post(`/api/chat/uploadpic`,bodyFormData,config).then(async(rs)=>{
			const res = await api.get(`/api/chat/changeChatRoomProfilePicture`, {params:{profilepic:rs.data.path,chatroomid:props.chatRoomDetail.chatroomid}})
			props.socket.emit('changeProfilePic', props.chatRoomDetail.chatroomid)
			props.getChatRoomDetail()
		})

	}
	const editChatRoomName = async () => {
		const res = await api.get(`/api/chat/changeChatRoomName`, {
			params: { roomname: roomName, chatroomid: props.chatRoomDetail.chatroomid },
		})
		props.socket.emit('changeChatRoomName', props.chatRoomDetail.chatroomid)
		props.getChatRoomDetail()
	}
	const handleSelect = async (el) => {
		const res = await api.get(`/api/chat/addChatRoomMember`, { params:{chatroomid: props.chatRoomDetail.chatroomid,member: el.userid}})
		props.getChatRoomDetail()
		setSearchResult(null)
	}
	const deleteMember = async (el)=>{
		const res = await api.get(`/api/chat/deleteMember`, { params:{chatroomid: props.chatRoomDetail.chatroomid,member: el.userid}})
		props.getChatRoomDetail()
	}
	useEffect(() => {
		setChangeImage(null)
		setChangeChatRoomName(false)
	}, [props.chatRoomDetail.chatRoomID])
	useEffect(() => {
		setSearchResult(null)
		getSearchResult()
	}, [searchInput])
	useEffect(() => {
		getChatRoomMembers()
	}, [])

	return (
		<>
			<div
				style={{
					borderLeft: '1px solid #dddddd',
					overflowY: 'scroll',
					overflowX: 'hidden',
				}}
				className={scrollBarStyle}
				onMouseOver={() => {
					setscrollBarStyle('chat')
				}}
				onMouseOut={() => {
					setscrollBarStyle('nochat')
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						paddingTop: 20,
						flexDirection: 'column',
						height: '100%',
					}}
				>
					<div>
						<div
							onClick={() => {
								document.getElementById('uploadChatPicture').click()
							}}
							className="chatPic"
						>
							<div className="picOverlay">
								<CameraAltIcon />
							</div>
							<Avatar
								style={{ width: 60, height: 60 }}
								alt={props.chatRoomDetail.chatroomname}
								src={(() => {
									if (changeImage) {
										return URL.createObjectURL(changeImage)
									} else {
										return props.chatRoomDetail.chatRoomProfile
									}
								})()}
							/>
							<input id={'uploadChatPicture'} type="file" accept="image/*" hidden={true} onChange={uploadPic} />
						</div>
					</div>
					{(() => {
						if (!changeChatRoomName) {
							return (
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<h4 style={{ textAlign: 'center', display: 'inline-block', marginTop: 14, marginBottom: 14 }}>
										{props.chatRoomDetail.chatroomname}
									</h4>
									<CreateIcon
										style={{ marginLeft: 7, cursor: 'pointer' }}
										onClick={() => {
											setChangeChatRoomName(true)
										}}
									/>
								</div>
							)
						} else {
							return (
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<Input
										placeholder={'Chat Name'}
										style={{ width: 150, marginBottom: 10, marginRight: 7, marginTop: 6, textAlign: 'center' }}
										value={roomName}
										onChange={(e) => {
											setRoomName(e.target.value)
										}}
									/>
									<AcceptIcon
										onClick={() => {
											editChatRoomName()
										}}
										style={{ cursor: 'pointer' }}
									/>
								</div>
							)
						}
					})()}
					<ChangeThemeColorTitle />
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							paddingBottom: 20,
							flexDirection: 'row',
							flexWrap: 'wrap',
							width: '90%',
						}}
					>
						<div onClick={() => changeColor('#5B5B5B', '#EB7DB1')}>
							<Colour
								color={{ color1: '#5B5B5B', color2: '#EB7DB1' }}
								active={(() => {
									if (
										props.chatRoomDetail.themeColor.sendcolor == '#EB7DB1' &&
										props.chatRoomDetail.themeColor.recievecolor == '#5B5B5B'
									) {
										return true
									} else {
										return false
									}
								})()}
							/>
						</div>
						<div onClick={() => changeColor('#5B5B5B', '#A27CEF')}>
							<Colour
								color={{ color1: '#5B5B5B', color2: '#A27CEF' }}
								active={(() => {
									if (
										props.chatRoomDetail.themeColor.sendcolor == '#A27CEF' &&
										props.chatRoomDetail.themeColor.recievecolor == '#5B5B5B'
									) {
										return true
									} else {
										return false
									}
								})()}
							/>
						</div>
						<div onClick={() => changeColor('#5B5B5B', '#F3B496')}>
							<Colour
								color={{ color1: '#5B5B5B', color2: '#F3B496' }}
								active={(() => {
									if (
										props.chatRoomDetail.themeColor.sendcolor == '#F3B496' &&
										props.chatRoomDetail.themeColor.recievecolor == '#5B5B5B'
									) {
										return true
									} else {
										return false
									}
								})()}
							/>
						</div>
						<div onClick={() => changeColor('#3D467F', '#8CC0EA')}>
							<Colour
								color={{ color1: '#3D467F', color2: '#8CC0EA' }}
								active={(() => {
									if (
										props.chatRoomDetail.themeColor.sendcolor == '#8CC0EA' &&
										props.chatRoomDetail.themeColor.recievecolor == '#3D467F'
									) {
										return true
									} else {
										return false
									}
								})()}
							/>
						</div>
					</div>
					{(() => {
						if (props.chatRoomDetail.isgroup==true) {
							return (
								<div
									id="addMember"
									style={{
										display: 'inline-block',
										position: 'relative',
										width: '90%',
										marginTop: 10,
										marginBottom: 10,
										marginLeft: 14,
									}}
									onFocus={() => {
										setIsFocus(true)
										getSearchResult()
										setIgnoreBlur(false)
									}}
									onBlur={() => {
										if (!ignoreBlur) {
											setIsFocus(false)
											setSearchResult(null)
										}
									}}
								>
									<AddMember input={searchInput} setInput={setSearchInput} getSearchResult={getSearchResult} />
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
							)
						} else {
							return <span style={{width:'100%'}}><h4 style={{marginTop:5,marginBottom:5,marginLeft:20}}>Members</h4></span>
						}
					})()}
					{chatRoomMembers &&
						chatRoomMembers.map((el) => {
							return (
								<>
									<div className="memberDiv">
										<Avatar style={{ width: 35, height: 35 }} alt={el.firstname + ' ' + el.lastname} src={el.avatar} />
										<p className="memberName" style={{ color: '#7279A3' }}>
											{el.firstname + ' ' + el.lastname}
										</p>
										<CreateIcon style={{ marginLeft: 'auto', cursor: 'pointer' }} />
										<CancelIcon style={{ cursor: 'pointer' }} onClick={()=>{deleteMember(el)}} />
									</div>
								</>
							)
						})}
					<Leave />
					<DeleteGroup />
				</div>
			</div>
			<style jsx>{style}</style>
		</>
	)
}
