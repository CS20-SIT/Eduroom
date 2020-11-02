import Nav from '../instructor/Nav'
import React,{Fragment} from 'react'
import Bord from '../instructor/bord'
import Course1 from '../instructor/Course1'
import Course2 from '../instructor/Course2'
import Course3 from '../instructor/Course3'
import GoCreate from '../instructor/GoCreate'
import SideNav from '../../../components/layouts/sidenav/sidenav'

function Home()
{
    return <Fragment>
    <div>
       
        <Nav />       
        <SideNav />  
     
        <Bord />
        <Course1 />
        <Course2 />
        <Course3 />
        <GoCreate />
        
        
    </div>
    </Fragment>
}
export default Home;