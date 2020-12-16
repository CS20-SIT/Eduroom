import { Fragment} from 'react'
import style from '../../styles/package/createpackage'

const SelectedCourse = ({ course, idx }) => {
	return (
		<Fragment>
			<div className="confirm-course">
				<div className="confirm-text">
					<h2 style={{ margin: '0' }}>Course</h2>
					<h2 style={{ margin: '0' }}>{idx + 1}</h2>
				</div>
				<div className="confirm-detail">
					<img src={course.coursepicture} width="150px" height="90px"></img>
					<div style={{ marginLeft: '10px' }}>
						<h4>{course.coursename}</h4>
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default SelectedCourse
