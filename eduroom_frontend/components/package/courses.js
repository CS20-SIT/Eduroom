import Courselist from './courselist'
import style from '../../styles/package/createpackage'
const Courses = () => {
  return (
    <div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course1"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course2"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course3"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course4"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course5"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course6"></Courselist></div>
      <div className="list"><input style={{margin: "auto 20px"}} type="checkbox" name="courseid" value="courseid"></input><Courselist name="course7"></Courselist></div>

      <style jsx>{style}</style>
    </div>
    
  )
}
export default Courses
