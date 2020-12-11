import CourseCheck from './courseCheck'
import style from '../../styles/package/createpackage'

const Courses = ({ courses }) => {
	const renderCourses = () => {
		const arr = courses.map((course, idx) => {
			return <CourseCheck course={course} key={idx} />
		})
		return arr
	}
	return (
		<div>
			<div className="list">{renderCourses()}</div>
			<style jsx>{style}</style>
		</div>
	)
}
export default Courses
