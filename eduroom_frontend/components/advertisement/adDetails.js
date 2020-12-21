import React, { Fragment, useState} from 'react'
import style from '../../styles/advertisement/ads'
import { useRouter} from 'next/router';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'




const Content = () => {
  const router = useRouter();
    return (


        <div>
        <Paper style={{margin:"5% 5% 5% 0%", padding:"1% 5% 5% 5%"}}>
        <div className="ad-ad-header" style={{marginLeft:"35%"}}><h2>Advertisement</h2></div>
        
        <div className="ad-ad-header"><h4>
        <Grid container spacing={3} style={{backgroundColor:"#EFF0F6"}}>
          <Grid item xs={3}>
            userID
          </Grid>
          <Grid item xs={3}>
            Firstname
          </Grid>
          <Grid item xs={3}>
            Lastname
          </Grid>
          <Grid item xs={3}>
            Email
          </Grid>
        </Grid>        
        </h4></div>
        <Grid container spacing={3}  style={{margin:"-2% 0% 0% 1%"}}>
        <Grid item xs={3}>
            userID
          </Grid>
          <Grid item xs={3}>
            Firstname
          </Grid>
          <Grid item xs={3}>
            Lastname
          </Grid>
          <Grid item xs={3}>
            Email
          </Grid>
          <Grid item xs={2} style={{marginLeft:"-1.5%"}}>
          </Grid>
        </Grid><div className="ad-ad-header"><h4>
        <Grid container spacing={3} style={{backgroundColor:"#EFF0F6"}}>
        <Grid item xs={3}>
            Ad ID
          </Grid>
          <Grid item xs={3}>
            Ad tag
          </Grid>
          <Grid item xs={3}>
            start date
          </Grid>
          <Grid item xs={3}>
            expire date
          </Grid>
        </Grid>        
        </h4></div>
        <Grid container spacing={3}  style={{margin:"-2% 0% 0% 1%"}}>
        <Grid item xs={3}>
            Ad ID
          </Grid>
          <Grid item xs={3}>
            Ad tag
          </Grid>
          <Grid item xs={3}>
            start date
          </Grid>
          <Grid item xs={3}>
            expire date
          </Grid>
        </Grid>
        <div style={{marginTop:"5%"}}>
                  <Link href="../../admin/advertisement">Back</Link></div>
        </Paper>
         <style jsx>
         {style}
       </style> 
       </div>
        
     

        
        )
    }
    export default Content