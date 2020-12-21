import { Fragment, useState, useEffect } from 'react'
import Course from './Course'
import api from '../../../api'

const Courses = () => {
	const [courses, setCourses] = useState([])
	const fetchCourses = async () => {
		try {
			const res = await api.get('/api/instructor/courses')
			setCourses(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchCourses()
	}, [])
	const renderCourses = () => {
		return courses.map((course, index) => {
			return <Course key={index} course={course} fetchCourses={fetchCourses}></Course>
		})
	}
	return <Fragment>{renderCourses()}</Fragment>
}

export default Courses
