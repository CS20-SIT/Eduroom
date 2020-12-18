// import React, { Fragment } from 'react'
// import Link from 'next/link'
// const UserEdit = () => {
//   return (
//     <Fragment>
//       <button>
//         <Link href="/user">Apply</Link>
//       </button>
//     </Fragment>
//   )
// }
// export default UserEdit


import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { useRouter } from 'next/router'
import styles from '../../styles/user/profile'
import api from '../../api';

const UserEditProfile = () => {
    // const [joined, setJoined] = useState(null)
	// const [user,setUser] = useState([])

	const [firstnameError,setFirstnameError] = useState(null)
	const [lastnameError,setLastnameError] = useState(null)

	const [firstname,setFirstname] = useState(null)
	const [lastname,setLastname] = useState(null)
	const [birth, setBirth] = useState(null)
	const [bio, setBio] = useState(null)
	const [avatar, setAvatar] = useState(null)
	const router = useRouter()
	useEffect(() => {
        const fetchData=async()=>{
            const res=await api.get('api/user/getProfile');
			// setUser(res.data);
			setFirstname(res.data.firstname);
			setLastname(res.data.lastname);
			setBio(res.data.bio);
			setAvatar(res.data.avatar);

			const d = new Date(res.data.birthdate)
			setBirth(getDate(d.getDate(),d.getMonth()+1,d.getFullYear()));
        }
        fetchData();
	}, [])

	// const userContext = useContext(UserContext)
	// const user = userContext.user
	// const [birth, setBirth] = useState(null)
	// const [joined, setJoined] = useState(null)
	// useEffect(() => {
	// 	if (user) {
	// 		const d = new Date(user.birthdate)
	// 		setBirth({ year: d.getFullYear(), month: d.getMonth() + 1, date: d.getDate() })
	// 		const j = new Date(user.createat)
	// 		setJoined({ year: j.getFullYear(), month: j.getMonth() + 1, date: j.getDate() })
	// 	}
	// }, [user])
	
	const getDate=(d,m,y)=>{
        if((''+m).length<2) m='0'+m;
		if((''+d).length<2) d='0'+d;
		return ""+y+"-"+m+"-"+d;
    }


	const getRole = (role) => {
		return role.charAt(0).toUpperCase() + role.slice(1)
	}
	const getVerified = () => {
		if (user.role === 'instructor') {
			if (user.isverified) {
				return <span style={{ color: 'green' }}>(Verified)</span>
			} else {
				return <span style={{ color: 'red' }}>(Not Verified)</span>
			}
		} else {
			return null
		}
	}
	const renderProfile = () => {
		// if (!user || !birth || !joined) return null
		return (
			<div className="profile-container">
				<div style={{ marginRight: '40px' }}>
					<img src={avatar} className="avatar" width="200px" height="200px"></img>
				</div>
				<div style={{ width: '100%' }}>
					{/* <div className="head">
						<h1 style={{ marginBottom: '0px' }}>
							{user.firstname} {user.lastname}
						</h1>
						<div style={{ marginTop: '20px' }}>
							<Link href="/user/edit">
							<div className="edit">
								<h2 className="editText" style={{ margin: '0' }}>
									Edit
								</h2>
								<i className="fas fa-edit edit-icon" style={{ marginTop: '7px' }}></i>
							</div>
							</Link>
						</div>
					</div> */}

					{/* <span style={{ color: '#A880F7', fontWeight: '700', marginTop: '4px' }}>{getRole(user.role)}</span>
					<span style={{ marginLeft: '5px' }}>{getVerified()}</span> */}
					
					{/* <div className="topic"> */}
						<p className="header">Firstname</p>
						<input
							id="fn"
							required
							placeholder="Firstname"
							type="text"
							value={firstname}
							onChange={(e) => {
								setFirstname(e.target.value);
							}}
						></input>
					{/* </div> */}
					<span style={{color:'red'}}>{firstnameError}</span>

					{/* <div className="topic"> */}
						<p className="header">Lastname</p>
						<input
							id="ln"
							required
							placeholder="Lastname"
							type="text"
							value={lastname}
							onChange={(e) => {
								setLastname(e.target.value);
							}}
						></input>
					{/* </div> */}
					<span style={{color:'red'}}>{lastnameError}</span>
					
					<div className="topic">
						<p className="header">Birthday</p>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							{/* <Grid container justify="space-around"> */}
								<KeyboardDatePicker
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
							{/* </Grid> */}
						</MuiPickersUtilsProvider>
					</div>
					
					<div className="topic">
						<p className="header">Bio</p>
						<TextField
							multiline
							rows={4}
							defaultValue={bio}
							variant="outlined"
							onChange={(e) => {
								setBio(e.target.value);
							}}
						/>
					</div>

					{/* <center> */}
						{/* <Link href="/user"> */}
							{/* <input type="submit" className="btn" onClick={()=>{Apply()}}>Confirm</input> */}
							<button className="btn" onClick={()=>{Apply()}}>Confirm</button>
						{/* </Link> */}
						{/* <Link href="/user"> */}
							<button className="btn" onClick={()=>{Cancel()}}>Cancel</button>
						{/* </Link> */}
					{/* </center> */}
					
					{/* {renderRegister()} */}
				</div>
				<style jsx>{styles}</style>
			</div>
		)
	}

	const Apply=()=>{
		if(firstname!=""&&lastname!=""){
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
    };
	const Cancel=()=>{
		router.push('/user');
    };

	return (
		<Fragment>
			<div className="container">{renderProfile()}</div>
			<style jsx>{styles}</style>
            {/* <input type="text" id="1" value='-'></input> */}
			
			{/* <input
							name="name"
							className="textfield"
							placeholder="Course Title"
							type="date"
							value={birth}
							id="1"
							onChange={(e) => {
								setBirth(e.target.value);
								// setLastname(e.target.value);
								// test(e.target.value);
								// console.log(e.target.value);
								// document.getElementById("1").value=e.target.value
							}}
						></input>

						<input
							name="name"
							className="textfield"
							placeholder="Course Title"
							type="text"
							value={lastname}
							id="2"
							onChange={(e) => {
								setLastname(e.target.value);
								// test(e.target.value);
								// console.log(e.target.value);
								// document.getElementById("1").value=e.target.value
							}}
						></input> */}
		</Fragment>
    )
}
export default UserEditProfile
