import React, { Fragment, useState} from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router';
import {Link,Typography,InputBase, Paper, Grid} from '@material-ui/core'



const Content = () => {

    return (

        <Fragment>
        <div className="tab2" style={{marginTop:"12%" ,marginLeft:"-50px",marginBottom:"100px"}}>
        <Grid containner spacing={3}>  
            <Grid item xs={6}>
            <div style={{marginTop:"-20px" ,marginLeft:"150px"}}>
            <div className="ad-tab1-header">Be seen where </div>
            <div className="ad-tab1-header" style={{marginTop:"-10px"}}>everyone is watching </div>
        
            <div className="ad-tab1-description">
                With EDUROOM ads, reach potential customers <br></br>
                and have them take action when they watch <br></br>
                or search for videos on YouTube – and only <br></br>
                pay when they show interest.
            </div>
        
            <div className="ad-question" >Already have a ADs?</div>
                <button style={{marginTop:"10px"}}
                className = "ad-tab1-button"
                onClick={() => router.push('/login')}
                >
                <a className="ad-button-text">Start Now</a>
                </button>
            </div>
        </Grid>       
        </Grid>  
         <style jsx>
         {style}
       </style> 
       </div>
        
        </Fragment>

        
        )
    }
    export default Content