import React, { Fragment, useState, useEffect } from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router';
import { Link, Typography, InputBase, Paper, Grid, List } from '@material-ui/core'

import api from '../../../api';
import Table from './adTable';




const Content = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    checkedA: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/api/ads/getPaidRejectedAds');
      setData(res.data);
    }
    fetchData()
  }, [])
    const renderTable = () =>{
      const arr = data.map((el,idx)=>{
        return <Table item={el}></Table>
      })
      return arr
    }
    console.log(data);
    return (

       
        <div>
          <div className="search-coupon" style={{width:"30%", height:"40px", marginLeft:"68%",padding:"0.25% 1% 1% 1% "}}>search Ads...</div>
        <div className="ad-ad-header" style={{marginLeft:"35%"}}><h2>List of Advertisement</h2></div>
        <div className="ad-ad-header"><h4>
        <Grid container spacing={3} style={{backgroundColor:"#EFF0F6"}}>
          <Grid item xs={2}>
            Ad ID
          </Grid>
          <Grid item xs={2}>
            Ad tag
          </Grid>
          <Grid item xs={2}>
            Ad Detail
          </Grid>
          <Grid item xs={2}>
            start date
          </Grid>
          <Grid item xs={2}>
            expire date
          </Grid>
          <Grid item xs={2}>
            Status
          </Grid>
        </Grid>        
        </h4></div>
       
      {renderTable()}
     
        
         <style jsx>
         {style}
       </style> 
       </div>
        
     

        
        )
    }
    export default Content