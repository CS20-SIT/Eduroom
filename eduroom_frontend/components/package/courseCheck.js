import { Fragment } from 'react'
import Courselist from './courselist'

const CourseCheck = ({ course }) => {
	return (
		<Fragment>
			<div style={{ display: 'flex' }}>
				<input style={{ margin: 'auto 20px' }} type="checkbox" name="courseid" value="courseid"></input>
				<Courselist course={course}></Courselist>
			</div>
		</Fragment>
	)
}

export default CourseCheck
