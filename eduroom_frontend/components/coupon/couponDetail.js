import React, { Fragment, useState} from 'react'
import style from '../../styles/advertisement/ads'
import { useRouter} from 'next/router';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'




const Content = () => {
  const router = useRouter();
    return (

       
        <div>
        <div className="ad-ad-header" style={{marginLeft:"43%"}}><h3>Code 1</h3></div>
        <div className="ad-ad-description" style={{margin:"-2% 0% 1% 20%"}}>Code Name
          <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"35%", margin:"1% 0% 1% 0%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="Codename"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Code name"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                      Description
                      <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"70%", marginTop:"1%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="Description"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Description"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
          <Grid container spacing={3} style={{marginTop:"20px"}}>
            <Grid item xs={6}>Discount
            <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="Discount"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Discount"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                      Duration
                      <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="Duration"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Duration"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                      Minimum Price
                      <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="Minimum Price"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Minimum Price"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
            </Grid>
            <Grid item xs={6} style={{marginLeft:"-10%"}}>Coin Price
            <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="Coin Price"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Coin Price"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                      Code Picture
                      <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="Code Picture"
                            fullWidth
                            autoFocus
                            type={"file"}
                            placeholder={"Code Picture"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                      CodeType
                      <Paper style={{padding: 10, backgroundColor: '#EFF0F6',width:"60%", marginTop:"1%" }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="CodeType"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Minimum Price"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper></Grid>
          </Grid>
        </div>
         <style jsx>
         {style}
       </style> 
       </div>
        
     

        
        )
    }
    export default Content