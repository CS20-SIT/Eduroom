const { default: Link } = require("next/link");


import InstructorProfile from '../index'
import EditProfile from '../EditProfile'
// import Logout from './Logout'
import Nav from '../../../../components/user/instructor/Nav';
import AddressForm from '../../../../components/user/instructor/AddressForm';
import Checkout from '../../../../components/user/instructor/Checkout';



function CreateCourse()
{
    return <div>
        <Nav />
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
        <a id="box">
        <Checkout />
        
       

        
        
      
        
        
        </a>
        
    </div>
}
export default CreateCourse;