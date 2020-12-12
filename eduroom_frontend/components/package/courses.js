import { Fragment, useEffect, useState } from 'react'
import CourseCheck from './courseCheck'
import api from '../../api'

const Courses = (props) => {
	const [pagination, setPagonation] = useState(1)
	const [courses, setCourses] = useState([])
	const fetchCourses = async () => {
		const res = await api.get('/api/package/courses', { params: { page: pagination } })
		setCourses(res.data)
	}
	useEffect(() => {
		fetchCourses()
	}, [])

	const handleClick = (id) => {
		const idx = props.selectedCourses.indexOf(id)
		if (idx === -1) {
			props.selectedCourses.push(id)
		} else {
			props.selectedCourses.splice(idx, 1)
		}
		props.handleSelectedCourses(props.selectedCourses)
	}
	const renderCourses = () => {
		return (
			<Fragment>
				{courses.map((course, idx) => {
					const isSelected = props.selectedCourses.includes(course.courseid)
					return (
						<div className="course" key={idx}>
							<CourseCheck course={course} key={idx} handleClick={handleClick} isSelected={isSelected} />
						</div>
					)
				})}
				<style jsx>{`
					.course {
						width: 33%;
						padding: 20px;
					}
				`}</style>
			</Fragment>
		)
	}
	return (
		<div>
			<div className="container">{renderCourses()}</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-wrap: wrap;
				}
			`}</style>
		</div>
	)
}
export default Courses
