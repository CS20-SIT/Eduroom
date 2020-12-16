import React, { Fragment, useState} from 'react'
import style from '../../styles/advertisement/ads';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'
import General from '../template/general'
import { useRouter } from 'next/router';

const Content = () =>{
    const rounter = useRouter();
    return (
        <Fragment>
            <General>
                <div className="adList">
                <div style={{margin:"6% 5% 2% 7%"}}><h1>List Of Advertisement</h1></div>
                <Paper style={{margin:"0% 7% 7% 7%",background: 'rgba(255, 255, 255, 0.7)'}}>
                    <div style={{margin:"0% 0% 0% 42%", paddingTop:"20px"}}><h1>Advertisement</h1></div>
                <Grid container spacing={3} style={{paddingBottom:"1%"}}>
                <div style={{backgroundColor:'#828282', height:'10px',marginTop:'145px',marginLeft:'18%',position:'absolute', width:'50%', opacity:'50%'}}></div>
                <div className="circle" style={{margin:"5% 0% 0% 18.5%"}}></div>
                <div className="circle" style={{margin:"5% 0% 0% 16%"}}></div>
                <div className="circle" style={{margin:"5% 0% 0% 16%"}}></div><br></br>
                <div className="ad-ad-header"  style={{margin:"1% 0% 0% 20.7%"}}>paid</div>
                <div className="ad-ad-header"  style={{margin:"1% 0% 0% 23%"}}>wait</div>
                <div className="ad-ad-header"  style={{margin:"1% 0% 0% 20.7%"}}>success</div>
                </Grid>
                <div style={{margin:"5% 0% 2% 25%"}}><h1>Information</h1></div>
                <Grid container spacing={3}>
                    <Grid item xs></Grid>
                    <Grid item xs><h2>AD Name<br></br>
                    AD Tags<br></br>
                    Start Date<br></br>
                    EXP Date<br></br>
                    Number of visitors</h2></Grid>
                    <Grid item xs><h2>Advertisement<br></br>
                    BRABRABRA<br></br>
                    01/01/2020<br></br>
                    01/04/2020<br></br>
                    43</h2></Grid>
                    <Grid item xs></Grid>
                </Grid>
                
            </Paper>
                </div>
            </General>
            <style jsx>{style}</style>
        </Fragment>
    )
}
export default Content