import { Fragment } from 'react'
import SelectedCourse from './selectedCourse'
import style from '../../styles/package/createpackage'
const SelectedCourses = ({ courses }) => {
	const renderCourses = () => {
		const arr = courses.map((course, idx) => {
			return <SelectedCourse course={course} key={idx} idx={idx}></SelectedCourse>
		})
		return arr
	}
	return (
		<Fragment>
			<div>{renderCourses()}</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default SelectedCourses
