import { Fragment } from 'react'
import CourseCheck from './courseCheck'

const Courses = ({ courses }) => {
	const renderCourses = () => {
		return (
			<Fragment>
				{courses.map((course, idx) => {
					return (
            <div className="course" key={idx}>
							<CourseCheck course={course} key={idx} />
						</div>
					)
				})}
        <style jsx>{`
          .course{
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
