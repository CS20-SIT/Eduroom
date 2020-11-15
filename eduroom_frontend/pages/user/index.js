import React, { Fragment, useState, useEffect, useContext } from 'react'
import General from '../../components/template/general'
import UserContext from '../../contexts/user/userContext'
import styles from '../../styles/user/profile'
import api from '../../api';

const User = () => {
	const userContext = useContext(UserContext)
	const user = userContext.user
	const [birth, setBirth] = useState(null)
	const [joined, setJoined] = useState(null)
	const [instructor, setInstructor] = useState(null);
	console.log(user)
	const fetchProfile = async () => {
		try {
			const res = await api.get('/api/instructor/profile');
			console.log(res.data);
			setInstructor(res.data);
		} catch (err) {
			
		}
	}

	useEffect(() => {
		if (user) {
			const d = new Date(user.birthdate)
			setBirth({ year: d.getFullYear(), month: d.getMonth() + 1, date: d.getDate() })
			const j = new Date(user.createat)
			setJoined({ year: j.getFullYear(), month: j.getMonth() + 1, date: j.getDate() })
			fetchProfile();
		}
	}, [user])

	const renderProfile = () => {
		if (!user || !birth || !joined) return null
		return (
			<div className="profile-container">
				<div style={{ marginRight: '40px' }}>
					<img src={user.avatar} className="avatar" width="200px" height="200px"></img>
				</div>
				<div style={{ width: '100%' }}>
					<div className="head">
						<h1 style={{ marginBottom: '0px' }}>
							{user.firstname} {user.lastname}
						</h1>
						<div>
							<h1 className="edit">Edit</h1>
						</div>
					</div>

					<p style={{ color: '#A880F7', fontWeight: '700', marginTop: '4px' }}>Student</p>
					<div className="topic">
						<p className="header">Email</p>
						<span>thnapahon.me@mail.kmutt.ac.th</span>
					</div>

					<div className="topic">
						<p className="header">Birthday</p>
						<span>{`${birth.date}-${birth.month}-${birth.year}`}</span>
					</div>

					<div className="topic">
						<p className="header">Joined</p>
						<span>{`${joined.date}-${joined.month}-${joined.year}`}</span>
					</div>

					<div className="topic">
						<p className="header">Bio</p>
						<span>{user.bio}</span>
					</div>
					<div style={{display:'flex', justifyContent:'flex-end'}}>
						<button className="register">Become an instructor</button>
					</div>
				</div>
				<style jsx>{styles}</style>
			</div>
		)
	}

	const renderRegister = () => {
		return null
	}

	return (
		<Fragment>
			<General>
				<div className="container">
					{renderProfile()}
				</div>
			</General>
			<style jsx>{styles}</style>
		</Fragment>
	)
}
export default User
