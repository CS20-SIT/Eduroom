import React,{Fragment} from 'react'
import Pathline from '../../components/learningpath/Path'
import Navbar from '../../components/layouts/navbar'
import SideNav from '../../components/layouts/sidenav/sidenav'
const Temp = (props) => {
    return <Fragment>  
        <SideNav />
        <div id="content">
          <Navbar />
          <main>{props.children}</main>
          <Pathline></Pathline>
        </div>
        <style jsx>
        {`
          #content {
            width: 95%;
            left: 5%;
            top: 0;
            z-index: 20;
            height:100vh;
            overflow-y: auto;
            position: fixed;
        `}
      </style>
    </Fragment>
}
export default Temp