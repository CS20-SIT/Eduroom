import { Fragment, useEffect, useState } from 'react'
import TextField from './textfield'
import api from '../../../api'
const EditProfile = (props) => {
	useEffect(() => {
		const { firstname, lastname, displayname, avatar } = props.profile
		setProfileData({ firstname, lastname, displayname })
		setAvatar(avatar)
	}, [props.profile])
	const [avatar, setAvatar] = useState('')
	const [profileData, setProfileData] = useState({
		firstname: '',
		lastname: '',
		displayname: '',
	})
	const handleChange = (e) => {
		setProfileData({ ...profileData, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e) => {
		console.log(profileData)
		api
			.post('/api/admin/editAdminProfile', profileData)
			.then((res) => {
				props.handleClose()
			})
			.catch((err) => {})
	}
	const handleSelectImage = () => {
		document.getElementById('avatar').click()
	}
	const handleUploadImage = (e) => {
		const file = e.target.files[0]
		if (file) {
			const formData = new FormData()
			formData.append('avatar', file, file.name)
			api
				.post('/api/admin/editProfilePic', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
				.then((res) => {
					setAvatar(res.data.avatarURL)
				})
				.catch((err) => {})
		}
	}
	return (
		<Fragment>
			<div className="editprofile-form">
				<div className="avatar-box">
					<div className="editprofile-avatar" onClick={handleSelectImage}>
						<i className="fas fa-camera" />
						<div className="feature" />
						<input type="file" accept="image/*" id="avatar" onChange={handleUploadImage} />
					</div>
				</div>
				<div className="editprofile-fnln">
					<div style={{ width: '50%', paddingRight: '.5rem' }}>
						<TextField
							name="firstname"
							placeholder="Firstname"
							handleChange={handleChange}
							value={profileData.firstname}
						/>
					</div>
					<div style={{ width: '50%', paddingLeft: '.5rem' }}>
						<TextField
							name="lastname"
							placeholder="Lastname"
							handleChange={handleChange}
							value={profileData.lastname}
						/>
					</div>
				</div>
				<div className="editprofile-dn">
					<TextField
						name="displayname"
						placeholder="Display Name"
						handleChange={handleChange}
						value={profileData.displayname}
					/>
				</div>
				<div className="editprofile-btn-div">
					<button className="editprofile-btn" onClick={handleSubmit}>
						Save
					</button>
				</div>
			</div>
			<style jsx>
				{`
					.editprofile-form {
						width: 100%;
						display: flex;
						flex-flow: column;
						justify-content: center;
						padding-top: 1rem;
                    }
                    .avatar-box {
                        display:flex;
                        padding: .5rem;
                        margin-bottom: .75rem;
                        justify-content:center;
					}
					#avatar {
						display:none;
					}
                    .editprofile-avatar {
                        position:relative;
                        width: 150px;
                        height: 150px;
                        background-image: url(${avatar});
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        border-radius: 75px;
                        display:flex;
                        justify-content:center;
                        align-items: center;
                        color: #fff;
                        font-size: 2em;
                        overflow:auto;
                        z-index:20;
                    }
                    .feature {
                        background: rgba(0,0,0,0.3);
                        z-index: -1;
                        width: 100%;
                        height:100%;
                        position:absolute;
                        top:0;
                        left:0;
                    }
                    .editprofile-fnln {
                        display:flex;
                        width: 100%;
                    }
					.editprofile-btn-div {
						display: flex;
						justify-content: center;
						padding: 0.5rem;
					}
					.editprofile-btn {
						padding: 0.5rem 2rem;
						font-size: 1.2em;
						font-weight: bold;
						color: white;
						background: #fb9ccb;
						text-transform: uppercase;
						border-radius: 25px;
						border: none;
                        outline: none;
                        min-width: 150px;xx
					}
				`}
			</style>
		</Fragment>
	)
}
export default EditProfile
