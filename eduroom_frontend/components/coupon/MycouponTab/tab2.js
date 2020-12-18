import React, { Fragment, useState} from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter} from 'next/router';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'




const Content = () => {
  const router = useRouter();
    return (

       
        <div className="tab1">
        <Grid container spacing ={3}>
        <Grid item xs ={4}>
        <Paper style={{paddingLeft: "50px"}}>
          <div style={{paddingLeft:"25px",paddingTop:"10px"}}><h2>coupon discount 10%</h2></div>
          <img src="https://www.flaticon.com/svg/static/icons/svg/815/815252.svg" style={{width: 300 , heigth: 600, marginTop:"-50px"}}></img>
          <div style={{paddingLeft:"130px", marginTop:"-30px",paddingBottom:"10px",color:"#A880F7"}}><h4>Used</h4></div>
        </Paper>
        </Grid>
        </Grid>
         <style jsx>
         {style}
       </style> 
       </div>
        
     

        
        )
    }
    export default Content