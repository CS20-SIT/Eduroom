import Courselist from './courselist'
import style from '../../styles/package/createpackage'
const Selected = () => {
  return (
    <div style={{alignItems: "center"}}>
      <div className="list"><div className="courseno">course<br/>1</div><Courselist name="course1"></Courselist></div>
      <div className="list"><div className="courseno">course<br/>2</div><Courselist name="course2"></Courselist></div>
      <div className="list"><div className="courseno">course<br/>3</div><Courselist name="course3"></Courselist></div>
      <div className="list"><div className="courseno">course<br/>4</div><Courselist name="course4"></Courselist></div>
      <div className="list"><div className="courseno">course<br/>5</div><Courselist name="course5"></Courselist></div>
      <div className="list"><div className="courseno">course<br/>6</div><Courselist name="course6"></Courselist></div>
      <div className="list"><div className="courseno">course<br/>7</div><Courselist name="course7"></Courselist></div>
    <style jsx>{style}</style>
    </div>
  )
}
export default Selected
