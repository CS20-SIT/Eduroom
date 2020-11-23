import General from '../../../components/template/general'
import React, { Fragment, useState, useContext, useEffect } from 'react'
import Courses from '../../../components/user/instructor/Courses'
import CreateCourseButton from '../../../components/user/instructor/CreateCourseButton'
import UserContext from '../../../contexts/user/userContext'
import styles from '../../../styles/user/instructor/profile'
import api from '../../../api'

const InstructorProfile = () => {
	const userContext = useContext(UserContext)
	const user = userContext.user
	const [instructor, setInstructor] = useState(null)
	const fetchInstructor = async () => {
		const res = await api.get('/api/instructor/profileDetail')
		setInstructor(res.data)
	}
	useEffect(() => {
		fetchInstructor()
	}, [])
	const renderExpert = () => {
		return instructor.expert.map((exp, index) => {
			return index === 0 ? exp : ', ' + exp
		})
	}
	const renderProfile = () => {
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
					<div className="topic">Expert</div> <div className="det">{renderExpert()}</div>
				</div>
				<style jsx>{styles}</style>
			</Fragment>
		)
	}
	const renderDegree = () => {
		return instructor.degree.map((deg, index) => {
			return index === 0 ? deg : ', ' + deg
		})
	}
	const renderDetail = () => {
		return (
			<Fragment>
				<div className="boxBio">
					<div className="topic">Degree</div> <div className="detBio">{renderDegree()}</div>
				</div>

				<div className="boxBio">
					<div className="topic">Bio</div> <div className="detBio">{instructor.bio}</div>
				</div>
				<style jsx>{styles}</style>
			</Fragment>
		)
	}
	const renderPage = () => {
		if (!user || !instructor) {
			return null
		}
		return (
			<div className="container">
				<div className="courses">
					<Courses></Courses>
					<CreateCourseButton></CreateCourseButton>
				</div>
				<div className="profile">
					<div className="header">
						<div style={{ color: 'white', padding: '20px 40px' }}>
							<div style={{ display: 'flex', marginTop: '20px' }}>
								<h1 style={{ margin: '0' }}>Instructor</h1>
								<i style={{ margin: '15px 0 0 20px' }} className="fas fa-edit"></i>
							</div>
							<h1>Profile</h1>
						</div>
					</div>
					<div className="detail">
						<div className="human">
							<div className="detailProfile">{renderProfile()}</div>
							<div className="img">
								<img src="/images/instructor/Human.svg" width="100%"></img>
							</div>
						</div>
						<div style={{ margin: '30px 40px', borderTop: '2px solid #DEDEDE' }}>{renderDetail()}</div>
					</div>
				</div>
				<style jsx>{styles}</style>
			</div>
		)
	}
	return (
		<Fragment>
			<General>{renderPage()}</General>
		</Fragment>
	)
}
export default InstructorProfile
