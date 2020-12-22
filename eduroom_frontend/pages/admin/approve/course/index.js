import React, { Fragment, useEffect, useState } from 'react'
import api from '../../../../api'
import Course from '../../../../components/admin/course/course.js'
import ProtectedAdminRoute from '../../../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../../../components/admin/template/default'
const AdminApproveCourse = () => {
	const [courseList, setCourseList] = useState([])
	const fetchData = () => {
		api
			.get('/api/admin/course/getAllCourse')
			.then((res) => {
				console.log(res.data)
				setCourseList(res.data)
			})
			.catch((err) => {})
	}
	useEffect(() => {
		fetchData()
	}, [])
	const handleApprove = (id) => {
		api
			.post('/api/admin/course/approve', { courseid: id })
			.then((res) => {
				fetchData()
			})
			.catch((err) => {})
	}
	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
					<div style={{padding:'2rem 5rem'}}>
					<div style={{fontSize:'1.5em',fontWeight:'bold',marginBottom:'2rem'}}>Course Approve</div>
					{courseList.map((el) => {
						return <Course data={el} handleApprove={handleApprove}/>
					})}</div>
				</AdminTemplate>
			</ProtectedAdminRoute>
		</Fragment>
	)
}
export default AdminApproveCourse
