import React, { Fragment, useState} from 'react'
import style from '../../styles/advertisement/ads';
import {Link,Typography,InputBase, Paper, Grid,List} from '@material-ui/core'
import General from '../template/general'
import { useRouter } from 'next/router';


import api from "../../api";


const Content = () => {
  const router = useRouter();
  return (
    <Fragment>
      <General>
        <div >
          <Paper style={{margin:'8% 5% 5% 5%'}}>
            <div className="ad-ad-header" style={{paddingTop:'100px', marginLeft:'50px',paddingBottom:'50px'}}>
              information
            </div>
            <div>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper style={{ marginLeft:'50px',padding: 10 , backgroundColor:'#EFF0F6'}}>
                    
                      </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper style={{ marginLeft:'5px',padding: 10 , backgroundColor:'#EFF0F6'}}>
                    <form>
                      <InputBase
                        name = "startdate"
                        fullWidth
                        autoFocus
                        type={"datetime-local"}
                        placeholder = {"start date"}
                        inputProps={{ 'aria-label': 'naked' }} 
                      />
                      </form>
                      </Paper>
                </Grid>
              </Grid>
            </div>
            <div>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper style={{ marginLeft:'50px',padding: 10 , backgroundColor:'#EFF0F6'}}>
                    <form>
                      <InputBase
                        name = "adTag"
                        fullWidth
                        autoFocus
                        type={"text"}
                        placeholder = {"Ad Tag"}
                        inputProps={{ 'aria-label': 'naked' }}
                        
                      />
                      </form>
                      </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper style={{ marginLeft:'5px',padding: 10 , backgroundColor:'#EFF0F6'}}>
                    <form>
                      <InputBase
                        name = "expiredate"
                        fullWidth
                        autoFocus
                        type={"datetime-local"}
                        placeholder = {"expire date"}
                        inputProps={{ 'aria-label': 'naked' }} 
                      />
                      </form>
                      </Paper>
                </Grid>
              </Grid>
            </div>
            <div>
            <Grid container spacing={3}>
            <Grid item xs={4}>
                <Paper style={{ marginTop:'5px',marginLeft:'50px',padding: 10 , backgroundColor:'#EFF0F6'}}>
                    <form>
                      <InputBase
                        name = "contactEmail"
                        fullWidth
                        autoFocus
                        type={"email"}
                        placeholder = {"Contact email"}
                        inputProps={{ 'aria-label': 'naked' }} 
                      />
                      </form>
                      </Paper>
                      </Grid>
                 </Grid>
            </div>
            <div>
            <Grid item xs={4}>
                <Paper style={{ marginTop:'100px',marginLeft:'50px',padding: 10 , backgroundColor:'#EFF0F6'}}>
                    <form>
                      <InputBase
                        name = "imgLocation"
                        fullWidth
                        autoFocus
                        type={"file"}
                        placeholder = {"attrach your ad img"}
                        inputProps={{ 'aria-label': 'naked' }} 
                      />
                      </form>
                      </Paper>
                      
                 </Grid>
            </div>
            
            <div style={{marginTop:'50px', display: 'flex',  justifyContent:'center', alignItems:'center',paddingBottom:'50px'}}>
            <button
                      className = "next-button"
                        onClick={() => router.push('/login')}
                      >
                       <a className="ad-button-text">Next</a>
                      </button> 
            </div>  
         
          </Paper>
        

             
             
              
            


          

        
        </div>
                <style jsx>
        {style}
      </style> 
      </General>
      
    </Fragment>
  )
}
export default Content

