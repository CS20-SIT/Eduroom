import React, { Fragment, useState,useEffect} from 'react'
import style from '../../styles/advertisement/ads'
import { useRouter} from 'next/router';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'
import api from '../../api'



const Content = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/api/ads/getAdsDetail',{params:{adid:props.id}});
      setData(res.data[0]);
      console.log(res.data[0])
    }
    fetchData()
  }, [])
    return (
        <div>
        <Paper style={{margin:"5% 5% 5% 0%", padding:"1% 5% 5% 5%"}}>
        <div className="ad-ad-header" style={{marginLeft:"35%"}}><h2>Advertisement</h2></div>
        
        <div className="ad-ad-header"><h4>
        <Grid container spacing={3} style={{backgroundColor:"#EFF0F6"}}>
          <Grid item xs={3}>
            Userid
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
        {data.ownerid}
          </Grid>
          <Grid item xs={3}>
          {data.firstname}
          </Grid>
          <Grid item xs={3}>
          {data.lastname}
          </Grid>
          <Grid item xs={3}>
          {data.contactemail}
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
        {data.adid}
          </Grid>
          <Grid item xs={3}>
          {data.tagname}
          </Grid>
          <Grid item xs={3}>
          {data.adstarttime.substring(0,10)}
          </Grid>
          <Grid item xs={3}>
          {data.adexpiretime.substring(0,10)}
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginLeft:"30%", marginTop:"5%"}}>
          <Grid item xs={6} > <button
                  className="Approve-button"
                  //onClick={handleClick}
                >
                  <a className="ad-button-text">Approve</a>
                </button></Grid>
                <Grid item xs={6} style={{marginLeft:"-35%"}}> <button
                  className="Disapprove-button"
                  //onClick={handleClick}
                >
                  <a className="ad-button-text">Disapprove</a>
                </button></Grid>
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