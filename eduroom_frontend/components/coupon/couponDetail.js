import React, { Fragment, useState, useEffect} from 'react'
import style from '../../styles/advertisement/ads'
import { useRouter} from 'next/router';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'
import api from '../../api'




const Content = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/api/coupon/getCouponById', {params : {id : props.id}});
      setData(res.data[0]);
    };
    fetchData();
  }, []);
  
    return (
        <Fragment>
          {data != null ? 
          <div>
          <div className="ad-ad-header" style={{marginLeft:"43%"}}><h3>Code {props.id}</h3></div>
          <div className="ad-ad-description" style={{margin:"-2% 0% 1% 20%"}}>Code Name
            <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"35%", margin:"1% 0% 1% 0%" }}>
              {data.ccname}
            </Paper>
            Description
            <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"70%", marginTop:"1%" }}>
              
              {data.description}
              
            </Paper>
            <Grid container spacing={3} style={{marginTop:"20px"}}>
              <Grid item xs={6}>Discount
                <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                  {data.discount}
                </Paper>
                Duration
                <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                  {data.duration}
                </Paper>
                Minimum Price
                <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                  {data.min_total}
                </Paper>
              </Grid>
              <Grid item xs={6} style={{marginLeft:"-10%"}}>Coin Price
              <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                {data.coin_use}          
              </Paper>
              Code Picture
              <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                <img src={data.picture} width="200px"/>  
              </Paper>
                CodeType
                <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                {data.coinUse > 0 ? "Public" : (data.codelimit == -1) ? "Limited public" : "Private"}
                </Paper></Grid>
            </Grid>
          </div>
           <style jsx>
           {style}
         </style> 
         </div>
         : null
         }
        </Fragment>
        )
    }
    export default Content