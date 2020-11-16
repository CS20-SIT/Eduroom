import General from '../../../components/template/general'
import React, { Fragment, useContext } from 'react'
import Courses from '../../../components/user/instructor/Courses'
import UserContext from '../../../contexts/user/userContext'
import styles from '../../../styles/user/instructor/profile'

const InstructorProfile = () => {
	const userContext = useContext(UserContext)
	const user = userContext.user

	const renderProfile = () => {
		if (!user) return null
		return (
			<Fragment>
				<h2 style={{ color: '#353E6C' }}>Profile</h2>
				<img src={user.avatar} width="50px" height="50px" alt="avatar" className="avatar"></img>

				<div className="box">
					<div className="topic">Firstname</div> <div className="det">{user.firstname}</div>
				</div>

				<div className="box">
					<div className="topic">lastname</div> <div className="det">{user.lastname}</div>
				</div>

				<div className="box">
					<div className="topic">Expert</div> <div className="det">Algorithms</div>
				</div>

				<style jsx>{styles}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<General>
				<div className="container">
					<div className="courses">
						<Courses></Courses>
					</div>
					<div className="profile">
						<div className="header">
							<div style={{ color: 'white', padding: '20px 30px' }}>
								<h1>Instructor</h1>
								<h1>Profile</h1>
							</div>
						</div>
						<div className="detail">
							<div className="human">
								<div className="detailProfile">{renderProfile()}</div>
								<div className="img">
									<img src="/images/instructor/Human.svg" width="250px"></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</General>
			<style jsx>{styles}</style>
		</Fragment>
	)
}
export default InstructorProfile
