import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'


import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
	Dialog,
	DialogTitle,
	InputBase 
  } from '@material-ui/core';
import { useRouter } from 'next/router'
import styles from '../../styles/user/profile'
import api from '../../api';


import TextField from '@material-ui/core/TextField';
// import TextField from './utils/textfield'
import Select from './utils/select'
import Textarea from './utils/textarea'

const EditForm = () => {
	const [firstnameError,setFirstnameError] = useState(null)
	const [lastnameError,setLastnameError] = useState(null)
	const [passwordError,setPasswordError] = useState(null)

	const [newPassword,setNewPassword] = useState(null)
	const [oldPassword,setOldPassword] = useState(null)

	const [firstname,setFirstname] = useState(null)
	const [lastname,setLastname] = useState(null)
	const [birth, setBirth] = useState(null)
	const [bio, setBio] = useState(null)
	const [avatar, setAvatar] = useState(null)
	const [password,setPassword] = useState(null)

	const [email,setEmail] = useState(null)
	const [open,setOpen] = useState(false)
	const router = useRouter()

	useEffect(() => {
        const fetchData=async()=>{
			try{
				const res=await api.get('api/user/getProfile');
				
				setFirstname(res.data.firstname);
				setLastname(res.data.lastname);
				setBio(res.data.bio);
				setAvatar(res.data.avatar);
				setEmail(res.data.email);

				const d = new Date(res.data.birthdate)
				setBirth(getDate(d.getDate(),d.getMonth()+1,d.getFullYear()));
			} catch (err) {
				router.push('/login')
			}
			// console.log("1"+res.data);
			// setUser(res.data);
        }
        fetchData();
	}, [])

	const getDate=(d,m,y)=>{
        if((''+m).length<2) m='0'+m;
		if((''+d).length<2) d='0'+d;
		return ""+y+"-"+m+"-"+d;
	}
	
	// const handleClick = async (e) => {
	// 	setLoading(true)
	// 	try {
	// 		let formData = { degree: data.degree.value, expert: data.expert.value, bio: data.bio.value }
	// 		const myForm = new FormData()
	// 		myForm.append('evidence-degree-1', data.degreePicture)
	// 		myForm.append('evidence-expert-1', data.expertPicture)
	// 		const res = await api.post('/api/instructor/upload/evidence', myForm)
	// 		const degreepath = res.data[0].linkUrl
	// 		const expertpath = res.data[1].linkUrl
	// 		formData.degreepath = degreepath
	// 		formData.expertpath = expertpath
	// 		handleSubmit(formData)
	// 	} catch (err) {}
	// }

	const handleSubmit = async (body) => {
		try {
			const res = await api.post('/api/instructor/register', body)
			console.log('success')
			setLoading(false)
			props.complete()
		} catch (err) {}
		setLoading(false)
	}

	const handleClick = async (e) => {
		try {
			// let formData = { degree: data.degree.value, expert: data.expert.value, bio: data.bio.value }
			const myForm = new FormData()
			myForm.append('avatar',avatar);
			const res=await api.post('/api/user/upload/picture',myForm);
			const avatar= res.data[0].linkUrl

			handleSave();
		} catch (err) {}
	}

	const handleSave = () => {
		if(firstname!=""&&lastname!=""){
			console.log("2");
			//const myForm=new FormData();
			//myForm.append('avatar',avatar);
			//const res=await api.post('/api/user/upload/picture',myForm);
			api.patch('api/user/postEditProfile', {
				avatar: avatar,
				firstname: firstname,
				lastname: lastname,
				birthdate: birth,
				bio: bio
			}).then(()=>{
				router.push('/user');
			});
		}else{
			if(firstname==""){
				setFirstnameError("*require Firstname");
			}else{
				setFirstnameError("");
			}
			if(lastname==""){
				setLastnameError("*require Lastname");
			}else{
				setLastnameError("");
			}
		}
	}
	const handleCancel = () => {
		router.push('/user')
	}
	const handleOpen = () => {
		setOpen(!open);
	}

	const savePassword=async() => {
		const res=await api.post('api/user/getCheckPassword', {
			password: oldPassword
		})
		if(res.data.match){
			setPasswordError(null);
			const res=await api.patch('api/user/postNewPassword', {
				password: newPassword
			}).then((e)=>{
				handleOpen();
			});
		}else{
			setPasswordError('The current password are mismatch');
		}
	}

	const savePic=(e) => {
		console.log("save pic");
		console.log(e.target.target);
		setAvatar(e.target.target);
		console.log(avatar);
	}

	const changePic = (e) => {
		let newValue = e.target.files[0];
		setAvatar(newValue);
	}

	return (
		<Fragment>
			<div className="container">
				<div className="box">
					<div className="editImage">
						<div className="uploadImage">
							<img src={avatar} className="avatar" width="200px" height="200px"></img>
							
							{/* <i className="fas fa-camera"></i> */}
						</div>
						<InputBase
								accept="image/*"
								name="imgLocation"
								fullwidth
								autofocus
								type={"file"}
								placeholder={"attrach your avatar"}
								inputProps={{'aria-label':'naked'}}
								onChange={changePic}
							/>
							
					</div>
					<div className="editInfo">
						<div className="w-100 form-title">General Information</div>
						<div className="w-50 pr-1 textfield">
							<TextField style={{ padding: '18px' }}  className="w-50 pr-1 textfield"
							placeholder="Firstname"
							value={firstname}
							defaultValue={firstname}
							onChange={(e) => {
								setFirstname(e.target.value);
							}}
							/>
						</div>
						<div className="w-50 pr-1 textfield">
							<TextField style={{ padding: '18px' }}  className="w-50 pr-1 textfield"
							placeholder="Lastname"
							value={lastname}
							defaultValue={lastname}
							onChange={(e) => {
								console.log('sdsd');
								setLastname(e.target.value);
							}}
							/>
						</div>
						<span style={{color:'red'}} className="w-50 pr-1">{firstnameError}</span>
						<span style={{color:'red'}} className="w-50 pr-1">{lastnameError}</span>

						<div style={{width:'100%'}} className="textfield">
						<MuiPickersUtilsProvider utils={DateFnsUtils} >
								<KeyboardDatePicker style={{width:'100%'}} className="textfield"
								placeholder="Date Of Birthdate"
								disableToolbar
								variant="inline"
								format="dd/MM/yyyy"
								margin="normal"
								value={birth}
								onChange={(e) => {
									const d = new Date(e);
									setBirth(getDate(d.getDate(),d.getMonth()+1,d.getFullYear()));
								}}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
								/>
						</MuiPickersUtilsProvider>
						</div>

						{/* <div className="w-100">
							<Textarea style={{ padding: '18px' }}
							placeholder="Bio"
							row="5"
							defaultValue={bio}
							value={bio}
							onChange={(e) => {
								setBio(e.target.value);
							}}
							/>
						</div> */}
						
						<div className="w-100 textfield">
						<TextField
							style={{width:'100%'}}
							placeholder="Bio"
							multiline
							rows={4}
							defaultValue={bio}
							value={bio}
							variant="outlined"
							onChange={(e) => {
								setBio(e.target.value);
							}}
						/>
						</div>

						<div className="w-100 form-title">Personal Information</div>
						<div className="w-100 textfield">
							<TextField style={{ padding: '18px' }}
								disabled
								placeholder="Email"
								value={email}
								defaultValue={email}
								inputProps={{ readOnly: true }}
								/>
						</div>
						<div className="w-100 textfield">
							<TextField style={{ padding: '18px' }}
								type="password"
								placeholder="Password"
								inputProps={{ readOnly: true }}
								defaultValue={''}
								onClick={handleOpen}
								/>
						</div>
						{/* <div className="w-100">
							<TextField style={{ padding: '18px' }} placeholder="Phone number" />
						</div>
						<div className="w-100">
							<Select
								style={{ padding: '18px' }}
								placeholder="Country"
								selectValue={[
									{ label: 'Thailand', value: 'Thailand' },
									{ label: 'New York', value: 'New York' },
								]}
							/>
						</div> */}
						<div className="w-100" style={{display:'flex',justifyContent:'center'}}>
							<span className="pr-1">
								<button className="user-edit-button" onClick={handleClick}>
									<a className="user-edit-button-text">Confirm</a>
								</button>
							</span>
							<span className="pl-1">
								<button className="user-cancel-button" onClick={handleCancel}>
									<a className="user-cancel-button-text">Cancel</a>
								</button>
							</span>
							<Dialog open={open}>
								<DialogTitle>
									Current Password
									<div className="w-100 textfield">
										<TextField style={{ padding: '18px' }}
											type="password"
											placeholder="Current Password"
											defaultValue={oldPassword}
											onChange={(e) => {
												setOldPassword(e.target.value);
											}}
											/>
									</div>
									New Password
									<div className="w-100 textfield">
										<TextField style={{ padding: '18px' }}
											type="password"
											placeholder="New Password"
											defaultValue={newPassword}
											onChange={(e) => {
												setNewPassword(e.target.value);
											}}
											/>
									</div>
									<span className="pr-1">
										<button className="user-edit-button" onClick={savePassword}>
											<a className="user-edit-button-text">Confirm</a>
										</button>
									</span>
									<span className="pl-1">
										<button className="user-cancel-button" onClick={handleOpen}>
											<a className="user-cancel-button-text">Cancel</a>
										</button>
									</span>
									<div style={{color:'red'}}>{passwordError}</div>
								</DialogTitle>
							</Dialog>
						</div>
					</div>
				</div>
			</div>
			
			<style jsx>
				{`
					          div.input-text {
								text-align: start;
							  }
							  .label-text {
								font-size: 1.1em;
								font-weight: 500;
							  }
							  .error-text {
								font-size: 0.8em;
								color: #ed3f14;
								font-weight: 500;
								margin-bottom: 4px;
							  }
							  .textfield {
								background: #eff0f6;
								border-radius: 10px;
								width: 100%;
								border: none;
								font-size: 1em;
								color: #3d467f;
							  }
							  .textfield.error {
								border: 1px solid #ed3f14;
							  }
							  .textfield ::placeholder {
								color: #3d467f;
								opacity: 0.75;
							  }

					.user-edit-button {
						background: #fb9ccb;
						border-radius: 25px;
						padding: 0.5rem 1.5rem;
						border: none;
						outline: none;
						transition: 0.25s;
					}
					.user-edit-button:hover {
						cursor: pointer;
						opacity: 0.8;
						transition: 0.25s;
					}
					.user-edit-button-text {
						color: white;
						font-weight: 700;
						font-size: 1.2em;
						font-family: 'Quicksand', sans-serif;
					}
					.user-cancel-button {
						background: #ffffff;
						border-radius: 25px;
						padding: 0.5rem 1.5rem;
						outline: none;
						transition: 0.25s;
						border: 1px solid #3d467f;
					}
					.user-cancel-button:hover {
						cursor: pointer;
						transition: 0.25s;
						background: #3d467f;
					}
					.user-cancel-button:hover .user-cancel-button-text {
						color: white;
					}
					.user-cancel-button-text {
						color: #3d467f;
						font-weight: 700;
						font-size: 1.2em;
						font-family: 'Quicksand', sans-serif;
					}
					.box {
						display: flex;
						background: #fff;
					}
					.container {
						margin: 20px 80px;
						padding: 30px;
						background: rgba(255, 255, 255, 0.8);
						box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
					}
					.editImage {
						width: 20%;
						padding: 0 20px;
					}
					.editInfo {
						width: 80%;
						padding: 0 20px;
						display: flex;
						flex-wrap: wrap;
					}
					.form-title {
						font-weight: 500;
						font-size: 1.4em;
						color: #969bba;
					}
					.w-100 {
						width: 100%;
						margin: 8px 0;
					}
					.pr-1 {
						padding-right: 12px;
					}
					.pl-1 {
						padding-left: 12px;
					}
					.w-50 {
						width: 50%;
						margin: 8px 0;
					}
					.uploadImage {
						width: 160px;
						height: 160px;
						border-radius: 80px;
						border: 1px solid black;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 2.2em;
						color: white;
						background: black;
						cursor: pointer;
					}
				`}
			</style>
		</Fragment>
	)
}
export default EditForm
