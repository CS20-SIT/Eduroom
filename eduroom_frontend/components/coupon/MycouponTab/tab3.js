import React, { Fragment, useEffect, useState} from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter} from 'next/router';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'
import api from '../../../api'
import {format } from 'date-fns'




const Content = () => {
  const router = useRouter();
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await api.get('/api/auth/profile')
      const res2 = await api.get('/api/coupon/getExpiredCodeList', {params : {id : res1.data.userid}});
      setData(res2.data);
    };
    fetchData();
  }, []);
  console.log(data);
    return (

       
        <div className="tab1">
        <Grid container spacing ={3}>
        {data != null ? 
        data.map((element, key) => {
          return (
            <Grid item xs ={4} key={key}>
              <Paper>
                <center>
                <div style={{paddingTop:"10px"}}><h2>{element.ccname}</h2></div>
                <img src={element.picture} style={{width: '200px' , height: '200px', marginBottom : '3rem', objectFit: "cover"}}></img>
                <div style={{ marginTop:"-30px",paddingBottom:"10px",color:"red"}}><h4>Expired on : {format(Date.parse(element.expiretime), 'P') + ' ' + format(Date.parse(element.expiretime), 'pp')}</h4></div>
                </center>
              </Paper>
            </Grid>
          )
        })
        : 
        null }
        </Grid>
         <style jsx>
         {style}
       </style> 
       </div>
        
     

        
        )
    }
    export default Content