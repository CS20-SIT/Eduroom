import React from 'react'
import style from '../../../styles/advertisement/ads';
import { Grid} from '@material-ui/core'



const Content = () => {
    return (
        <div>
            <div style = {{marginLeft : '40px', marginTop:'10px'}}>
            <a className = "ad-ad-header">
            Need help getting started?
            </a>
            <br></br>
            <div style={{marginTop:'15px'}}>
                <a >Here are a few resources to point you in the right direction.
                </a>
                </div>
                <br></br>
            <a className = "ad-ad-header">
            FAQs
            </a>
         <style jsx>
         {style}
       </style> 
       </div>
        </div>
        
        )
    }
    export default Content