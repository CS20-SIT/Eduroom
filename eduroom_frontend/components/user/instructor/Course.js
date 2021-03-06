import { Fragment } from 'react'
import api from '../../../api'
const Course = ({ course, fetchCourses }) => {
	const deleteCourse = async () => {
		try {
			const body = { courseId: course.courseid }
			await api.post('/api/instructor/deletecourse', body)
			await fetchCourses()
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<Fragment>
			<div className="container">
				<div style={{ display: 'flex' }}>
					<img src={course.coursepicture} alt="course-img" width="150px" height="120px"></img>
					<div style={{ marginLeft: '30px', width: '100%' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
							<h2 style={{ margin: '0' }}>{course.coursename}</h2>
							<div style={{ margin: '7px 0 0 0' }}>
								<i className="fas fa-trash icon" onClick={deleteCourse}></i>
							</div>
						</div>
						<div className="det">{course.coursedescription}</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.container {
					background: #ffffff;
					box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
					border-radius: 10px;
					padding: 20px 10px;
					margin-bottom: 20px;
				}
				.det {
					color: #858585;
				}
				.icon {
					color: #858585;
					transition: 0.3s;
					padding: 0 7px;
				}
				.icon:hover {
					color: black;
					transition: 0.3s;
					cursor: pointer;
				}
			`}</style>
		</Fragment>
	)
}

export default Course
