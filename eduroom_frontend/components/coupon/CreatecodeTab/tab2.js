import React, { Fragment, useState} from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter} from 'next/router';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'




const Content = () => {
  const router = useRouter();
    return (

       
        <div>
          <div className="search-coupon" style={{width:"30%", height:"40px", marginLeft:"68%",padding:"0.25% 1% 1% 1% "}}>search coupon...</div>
        <div className="ad-ad-header" style={{marginLeft:"40%"}}><h2>Coupon Avaible</h2></div>
        <div className="ad-ad-header"><h4>
        <Grid container spacing={3} style={{backgroundColor:"#EFF0F6"}}>
          <Grid item xs={2}>
            status
          </Grid>
          <Grid item xs={4}>
            Code Name
          </Grid>
          <Grid item xs={4}>
            Code type
          </Grid>
          <Grid item xs={2}>
            Detail
          </Grid>
        </Grid>        
        </h4></div>
        <Grid container spacing={3}  style={{margin:"-2% 0% 0% 1%"}}>
          <Grid item xs={2}>
            <div className="online" ></div>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={2} style={{marginLeft:"-1.5%"}}>
            <Link href="../../admin/createcoupon/couponDetail">see detail..</Link>
          </Grid>
        </Grid>
         <style jsx>
         {style}
       </style> 
       </div>
        
     

        
        )
    }
    export default Content