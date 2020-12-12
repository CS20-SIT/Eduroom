<<<<<<< HEAD
import { Fragment } from 'react'
import CourseCheck from './courseCheck'
=======
import Courselist from './courselist'
import style from '../../styles/package/createpackage'
const Courses = () => {
  return (
    <div id="course-checkbox">
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course1"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course2"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course3"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course4"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course5"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course6"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course7"></Courselist></div>
>>>>>>> cf9aef62a90b052c775f64a70db3d471cc10d932

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
