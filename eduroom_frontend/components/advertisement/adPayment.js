import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/advertisement/ads';
import { withStyles, InputBase, Link, MenuItem, Select, Paper, Grid, FormControl, Typography } from '@material-ui/core'
import General from '../template/general'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router';


import api from "../../api";
const Total = (data)=>{
    return(
        <div>
             <Paper style={{ margin: '5% 5% 5% 25%', height:'150px', width:'45%',padding:'17px',paddingTop:'15px',position:'absolute',background: 'rgba(255, 255, 255, 0.7)',borderRadius:'10px' }}>
                <Grid container spacing={'2'}>
                <Grid item xs = {'1'}>
                 <a className="ad-owner">Total:</a>
                 </Grid>
                 <Grid item xs = {'3'}>
                 <a className="ad-id">฿900</a>
                 </Grid>
                 </Grid>
                 <br></br>
                 <Grid container spacing={'2'}>
                 <Grid item xs={4}>
                 <a className="ad-description">Numbers of ads: 1</a>
                 </Grid> 
                 <Grid item xs style={{marginLeft:'40%'}}>
                 <button className="ad-check-out-button"><a className="ad-check-out-button-text">Check Out</a></button>
                </Grid>
                 </Grid>
             </Paper>
             <style jsx>
          {style}
        </style>
        </div>
    )
}
const Box = (data) => {
    return (
        <div>
            <Paper style={{ margin: '10% 5% 5% 10%', height:'150px', width:'80%',padding:'17px',paddingTop:'15px',borderRadius:'10px'  }}>
                <Grid container spacing={'2'}>
                    <Grid item>
                <div style={{backgroundImage: "url('/images/ads/admock.png')",backgroundSize: '140px 120px',height:'200px',width:'200px',backgroundRepeat:'no-repeat',marginLeft:'2%'}}></div>
                </Grid>
                <Grid item xs={'4'}>
                 <a className="ad-id">Advertisement ID#1</a><br></br>
                 <a className="ad-owner">by John Lennon</a><br></br>
                 <a className="ad-description">StartDate: 2021-01-04 EndDate: 2021-02-04</a>
                </Grid>
                <Grid item xs style={{marginLeft:'10%'}}>
                 <button className="ad-remove-button"><a className="ad-button-text">Remove</a></button>
                </Grid>
                <Grid item xs style={{marginLeft:'10%'}}>
                 <a className="ad-price">฿900</a>
                </Grid>
                </Grid>
                
            </Paper>
            <style jsx>
          {style}
        </style>
        </div>
    )
}
const Content = () => {


    return (
        <Fragment>
            <General>
                <div style={{ backgroundImage: `url('/images/big-bg.svg')`, backgroundSize: 'cover', paddingTop: '3%', height: '100%' }} >
                    <div className="ad-ad-header" style={{ paddingTop: '50px', paddingBottom: '40%' }}>
                        <center>EDUROOM CART</center>
                       <Box ></Box>
                       <Total></Total>
                       <div style={{backgroundImage: "url('/images/ads/shopping.svg')",backgroundSize: 'auto',height:'1200px',width:'1200px',backgroundRepeat:'no-repeat',marginLeft:'40%'}}></div>
                    </div>
                  
                

                </div>
                <style jsx>
                    {style}
                </style>
            </General>

        </Fragment>
    )
}
export default Content

