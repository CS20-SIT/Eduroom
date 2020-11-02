import React,{Fragment} from 'react'
import Nav from '../Nav';
import SideNav from '../../../../components/layouts/sidenav/sidenav'
const CourseCreate = () => {
    return <Fragment>
        <div>
        <Nav />
        <SideNav />
        <style jsx>
            {
                `
                #box {
                  border-radius: 25px;
                  border: 2px solid black;
                  padding: 20px; 
                  width: 772px;
                  height: 987px;  
                  position: absolute;
                  left: 300px;
                  top: 100px;
                  
                }
                #title{
                  font-size: 25px;
                }
                #info {
                  font-size: 18px;
                }
                #q {
                  color: pink;
                }
                `
            }
        </style>
        <a id="box"><a id="title">Create 
        <br></br>
        <a>Course</a>
        </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <a id="info">
          

          <a id="info">Course Title   ..........</a><br></br>
          <br></br>
          <a id="info">Course Picture ..........</a><br></br>
          <br></br>
          <a id="info">Sample Video   ..........</a><br></br>
          <br></br>
          <a id="info">Subject        ..........</a><br></br>
          <br></br>


        
        
        </a>
        
        
        </a>
        
    </div>
    </Fragment>
}
export default CourseCreate