import React, { Fragment, useState, useEffect, useContext } from 'react'
import General from '../../components/template/general'
import UserContext from '../../contexts/user/userContext'
import styles from '../../styles/user/profile'

const User = () => {
	const userContext = useContext(UserContext)
	const user = userContext.user
	console.log(user)
	const renderProfile = () => {
		if (!user) return null
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
						<span>01-01-2020</span>
					</div>

					<div className="topic">
						<p className="header">Joined</p>
						<span>01-01-2020</span>
					</div>

					<div className="topic">
						<p className="header">Bio</p>
						<span>Computer Science student at SIT KMUTT</span>
					</div>
				</div>
				<style jsx>{styles}</style>
			</div>
		)
	}
	return (
		<Fragment>
			<General>
				<div className="container">{renderProfile()}</div>
			</General>
			<style jsx>{styles}</style>
		</Fragment>
	)
}
export default User
