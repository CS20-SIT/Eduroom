import React,{Fragment} from 'react'
import Pathline from '../../components/learningpath/Path'
import Navbar from '../../components/layouts/navbar'
import SideNav from '../../components/layouts/sidenav/sidenav'
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
const Temp = (props) => {
    return <Fragment>  
      <div className={Styles.img}>
        <SideNav />
        <div id="content">
          <Navbar />
          <main>{props.children}</main>
          <Pathline></Pathline>
        </div>
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