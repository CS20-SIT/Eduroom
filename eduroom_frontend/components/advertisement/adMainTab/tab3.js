
import React from 'react'
import style from '../../../styles/universityEmail/Uregister';
import { Grid} from '@material-ui/core'

const Content = () => {
    return (
      
           <div className="Ad-Detail-text" >
             <Grid container spacing={3} direction="column" alignItems="center"
                justify="center" style={{ marginTop: '10px' ,marginBottom: '30px'}}>
                  TERM OF CONDITION
                </Grid>
                
        <Grid container spacing={3} alignItems="center"  justify="center" style={{ marginTop: '15px', marginLeft:'50px' }}>
        <a id = "condition">
1. Customers must fully comply with all advertising policies. <br></br>
2. Content in the form of advertisements must not contain any written or expressive <br></br>Discriminate genders, allude to religion, personal beliefs or create divisions in society.<br></br>
3. Your ad will have an expiration date. And need to be renewed for publicity purposes Continuously<br></br>
4. If you violate any of these terms, Eduroom will reserve the right to advertise your particular<br></br> advertisement until modified.<br></br>
</a>
                </Grid>
                <Grid container spacing={12} direction="column" alignItems="center"
                justify="center" style={{ marginTop: '100px' }}>
                  
                  <button className="Get-Ad-button"
                   type="MyCoupon">
                   
                    <span className="Get-Ad-text">Get AD!</span>
                  </button>
                </Grid>
                <style jsx>
         {style}
       </style> 
        </div>

        )
    }
    export default Content;