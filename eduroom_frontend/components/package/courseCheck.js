import { Fragment } from 'react'
import Styles from '../../styles/package/courseCheck'

const CourseCheck = ({ course, handleClick, isSelected }) => {
	const getBoxClass = () => {
		return isSelected ? 'active box' : 'box';
	}
	return (
		<Fragment>
			<div className={getBoxClass()} onClick={() => handleClick(course.courseid)}>
				<div className="image-container">
					<img src={course.coursepicture} className="coursepic"></img>
				</div>
				<div className="detail">
					<h3 className="title">{course.coursename}</h3>$ <span>{course.price}</span>
				</div>
			</div>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}

export default CourseCheck
