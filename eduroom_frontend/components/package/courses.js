import Courselist from './courselist'
import style from '../../styles/package/createpackage'
const Courses = ({ courses }) => {
	const renderCourses = () => {
		const arr = courses.map((course, idx) => {
			return (
				<div>
          <Courselist course={course}></Courselist>
				</div>
			)
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
