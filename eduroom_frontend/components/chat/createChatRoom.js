import { useState, useEffect } from 'react'
import style from '../../styles/chat/chat'
import Avatar from '@material-ui/core/Avatar'
import AddMember from './addMember'
import CancelIcon from './icons/CancelIcon'
import CameraAltIcon from './icons/CameraAlt'
import BlueInput from './blueInput'
import Submit from './submit'
import ExitIcon from './icons/ExitIcon'
import SearchResult from '../chat/searchResult'
import api from '../../api'

export default function createChatRoom(props) {
	const [scrollBarStyle, setscrollBarStyle] = useState('nochat')
	const [createGroupForm, setCreateGroupForm] = useState({ profilePic: null, groupName: null, members: [] })
	const [searchInput, setSearchInput] = useState(null)
	const [searchResult, setSearchResult] = useState(null)
	const [ignoreBlur, setIgnoreBlur] = useState(false)
	const handleSelect = (el) => {
		if (!createGroupForm.members.some((user) => user.userid == el.userid) && el.userid != props.userProfile.userid) {
			setCreateGroupForm({ ...createGroupForm, members: [...createGroupForm.members, el] })
		}
		setSearchResult(null)
	}
	const getSearchResult = async () => {
		try {
			setSearchResult(null)
			const res = await api.get(`/api/chat/getSearchResult`, { params: { keyword: searchInput } })
			setSearchResult(res.data)
		} catch (err) {}
	}
	const sendCreateRoomForm = async () => {
		if (createGroupForm.profilePic != null) {
			var bodyFormData = new FormData()
			bodyFormData.append('profilePic', createGroupForm.profilePic)
			const config = { headers: { 'Content-Type': 'multipart/form-data' } }
			if (createGroupForm.groupName != null && createGroupForm.groupName != '' && createGroupForm.members.length >= 1) {
				api
					.post(`/api/chat/uploadpic`, bodyFormData, config)
					.then(async (re) => {
						try {
							const res = await api.get(`/api/chat/createGroupChat`, {
								params: {
									profilepic: re.data.path,
									chatroomname: createGroupForm.groupName,
									members: createGroupForm.members,
								},
							})
							props.handleClose()
							props.getChatList()
						} catch (err) {}
					})
					.catch((err) => {})
			}
		} else if (
			createGroupForm.groupName != null &&
			createGroupForm.groupName != '' &&
			createGroupForm.members.length >= 1
		) {
			try {
				const res = await api.get(`/api/chat/createGroupChat`, {
					params: {
						profilepic: '',
						chatroomname: createGroupForm.groupName,
						members: createGroupForm.members,
					},
				})
				props.handleClose()
				props.getChatList()
			} catch (err) {}
		}
	}
	const uploadPic = (e) => {
		setCreateGroupForm({ ...createGroupForm, profilePic: e.target.files[0] })
	}
	useEffect(() => {
		setSearchResult(null)
		getSearchResult()
	}, [searchInput])
	useEffect(() => {
		console.log(createGroupForm.members)
	}, [createGroupForm])

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
					<div>
						<div
							onClick={() => {
								document.getElementById('uploadChatPicture1').click()
							}}
							className="chatPic"
						>
							<div className="picOverlay">
								<CameraAltIcon />
							</div>
							<Avatar
								style={{ width: 60, height: 60 }}
								src={createGroupForm.profilePic && URL.createObjectURL(createGroupForm.profilePic)}
							/>
						</div>
					</div>
					<input id={'uploadChatPicture1'} type="file" accept="image/*" hidden={true} onChange={uploadPic} />
					<BlueInput input={createGroupForm} setInput={setCreateGroupForm} />
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
							getSearchResult()
							setIgnoreBlur(false)
						}}
						onBlur={() => {
							if (!ignoreBlur) {
								setIgnoreBlur(false)
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
										createGroupForm={createGroupForm}
										setCreateGroupForm={setCreateGroupForm}
										setIgnoreBlur={setIgnoreBlur}
										setSearchResult={setSearchResult}
										handleSelect={handleSelect}
									/>
								)
							}
						})()}
					</div>
					{createGroupForm.members.map((el, i) => {
						return (
							<div key={i} className="memberDiv">
								<Avatar
									style={{ width: 35, height: 35 }}
									alt={el.userfirstName + ' ' + el.userlastName}
									src={el.userprofile}
								/>
								<p className="memberName" style={{ color: '#7279A3' }}>
									{el.userfirstname + ' ' + el.userlastname}
								</p>
								<CancelIcon
									style={{ cursor: 'pointer', marginLeft: 'auto' }}
									onClick={() => {
										setCreateGroupForm({
											...createGroupForm,
											members: createGroupForm.members.filter((i) => i.userid != el.userid),
										})
									}}
								/>
							</div>
						)
					})}

					<Submit onClick={sendCreateRoomForm} />
				</div>
			</div>
			<style jsx>{style}</style>
		</>
	)
}
