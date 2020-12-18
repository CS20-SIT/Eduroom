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
                <div style={{margin:"6% 7% 2% 7%"}}><h1>List Of Advertisement</h1></div>
                <Paper style={{margin:"0% 7% 3% 7%",background: 'rgba(255, 255, 255, 0.7)'}}>
        
        <Grid container spacing={12} direction="column" alignItems="center"
                justify="center" style={{ marginTop: '30px',padding:"2% 2% 2% 2%" }}>
                 
                 <div className="ad-border" style={{marginTop:"30px"}}>
                <Grid container spacing={3}style={{paddingLeft:'20px'}}>
                    <Grid item xs={2} style={{marginTop:"30px"}}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3064/3064943.svg"
                        width='100px' ></img>
                    </Grid>
                    <Grid item xs={8}> <h2>Advertisement01</h2><br></br>
                        <h4 style={{marginTop:"-30px"}}>By Jeong Jaehyun</h4><br></br>
                        <h4 style={{marginTop:"-40px"}}>Tags ad</h4>
                        <Link href="../../advertisement/addetail" style={{marginTop:"-40px"}} >see detail</Link>
                    </Grid> 
                    <Grid item xs={2} >
                        <h4 style={{marginLeft:"15px"}}>Online</h4>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1827/1827855.svg"
                        width='80px' style={{marginTop:"-20px"}}></img>
                    </Grid>
              </Grid>
              </div>
              <div className="ad-border" style={{marginTop:"30px"}}>
                <Grid container spacing={3}style={{paddingLeft:'20px'}}>
                    <Grid item xs={2} style={{marginTop:"30px"}}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3064/3064943.svg"
                        width='100px' ></img>
                    </Grid>
                    <Grid item xs={8}> <h2>Advertisement02</h2><br></br>
                        <h4 style={{marginTop:"-30px"}}>By Jeong Jaehyun</h4><br></br>
                        <h4 style={{marginTop:"-40px"}}>Tags ad</h4>
                        <Link href="../../advertisement/addetail" style={{marginTop:"-40px"}} >see detail</Link>
                    </Grid> 
                    <Grid item xs={2} >
                        <h4 style={{marginLeft:"15px"}}>Online</h4>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1827/1827855.svg"
                        width='80px' style={{marginTop:"-20px"}}></img>
                    </Grid>
              </Grid>
              </div>
              <div className="ad-border-new" style={{marginTop:"30px"}}>
              <img src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740600.svg"
                        width='60px' style={{marginTop:"20px", marginLeft:"45%"}}></img>
                <h4 style={{marginLeft:"43%", marginTop:"5px"}}>Add new Ads</h4>
              </div>
            </Grid>
            </Paper>
                </div>
            </General>
            <style jsx>{style}</style>
        </Fragment>
    )
}
export default Content