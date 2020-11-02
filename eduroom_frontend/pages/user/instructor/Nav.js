const { default: Link } = require("next/link");
import React,{Fragment} from 'react'



const Nav = () => {
    return <Fragment><div>
    <style jsx>
        {
            `
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #333;
              }
              
              li {
                float: right;
              }
              
              li a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
              }
              
              li a:hover {
                background-color: #111;
              }
            `
        }
    </style>
    <ul>
        <li><img src="https://img.icons8.com/bubbles/50/000000/anonymous-mask.png"/></li>
        <li><Link href="/user/instructor/course"><a style={{marginRight:15}}>Package</a></Link></li>
        <li><Link href="/user/instructor/course/create"><a style={{marginRight:15}}>Create Course</a></Link></li>
        <li><Link href="/InstructorProfile"><a style={{marginRight:15}}>Instructor</a></Link></li>
    </ul>
    
    
    
    








</div></Fragment>
}
export default Nav