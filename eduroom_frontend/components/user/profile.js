import React, { Fragment, useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import UserContext from '../../contexts/user/userContext'
import styles from '../../styles/user/profile'
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router'

const Profile = () => {
	const userContext = useContext(UserContext)
	const user = userContext.user
	const [birth, setBirth] = useState(null)
	const [joined, setJoined] = useState(null)
	useEffect(() => {
		if (user) {
			const d = new Date(user.birthdate)
			setBirth({ year: d.getFullYear(), month: d.getMonth() + 1, date: d.getDate() })
			const j = new Date(user.createat)
			setJoined({ year: j.getFullYear(), month: j.getMonth() + 1, date: j.getDate() })
		}
	}, [user])
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
						<div style={{ marginTop: '20px' }}>
							<Link href="/user/edit">
							<div className="edit">
								<Link href="/user/edit">
									<h2 className="editText" style={{ margin: '0' }}>
										Edit
									</h2>
								</Link>
								<i className="fas fa-edit edit-icon" style={{ marginTop: '7px' }}></i>
							</div>
							</Link>
						</div>
					</div>

					<span style={{ color: '#A880F7', fontWeight: '700', marginTop: '4px' }}>{getRole(user.role)}</span>
					<span style={{ marginLeft: '5px' }}>{getVerified()}</span>
					<div className="topic">
						<p className="header">Email</p>
						<span>{user.email}</span>
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
						<TextField style={{ width: '100%' }}
							disabled
							multiline
							rows={4}
							defaultValue={user.bio ? user.bio : '-'}
							inputProps={{ readOnly: true }}
						/>
						{/* <textarea rows="4" cols="50" readonly>
							{user.bio ? user.bio : '-'}
						</textarea> */}
						{/* <span>{user.bio ? user.bio : '-'}</span> */}
					</div>
					<Link href="/user/courses">
							<button className="btn">MyCourse</button>
					</Link>
					{renderRegister()}
				</div>
				<style jsx>{styles}</style>
			</div>
		)
	}

	const renderRegister = () => {
		return (
			<Fragment>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					{user.role === 'general' ? (
						<Link href="/user/instructor/register">
							<button className="btn">Become an instructor</button>
						</Link>
					) : user.isverified ? (
						<Link href="/user/instructor">
							<button className="btn">Instructor Mode</button>
						</Link>
					) : (
						<span>Waiting for approve</span>
					)}
				</div>
				<style jsx>{styles}</style>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<div className="container">{renderProfile()}</div>
			<style jsx>{styles}</style>
		</Fragment>
	)
}
export default Profile
