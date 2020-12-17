import React, { Fragment, useState } from 'react'
import style from '../../styles/universityEmail/Uregister'
import {Typography,Link} from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import General from '../template/general'
import api from "../../api";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Content = () => {
  
  

  
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    setinfo({ ...createinfo, [e.target.name]: e.target.value });
  };
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Fragment>
      <General>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >

          <Grid>

            <div style={{ padding: 50, background: 'rgba(196, 196, 196, 0.5)' }}>

              <Typography variant="h4" component="h2" style={{ paddingRight: 200, color: '#3D467F' }}>
                We already sent a verifycode to your universityEmail!
            </Typography>

              <br></br>
              <Paper style={{
                height: '5px', width: '100%', backgroundColor: '#A880F7', paddingRight: 300
                , opcacity: '50%'
              }}></Paper>

              <Typography variant="h6" style={{ paddingTop: 15, color: '#979797' }}>
                Please check your universityEmail and get a verifycode to verify your universityEmail
              </Typography>

              <br></br>
              

              
              <Grid container spacing={3} direction="column" alignItems="center"
                justify="center">

                <Grid container spacing={3} direction="row"
                  alignItems="center"
                  justify="center" style={{ marginTop: '20px' }}>
                </Grid>
                
                <Link href = "/universityemail/verifyCode">
                <Grid item xs={6} >
                  <button className="register-button"
                   type="submit"
                   >
                    <span className="register-button-text">Next</span>
                  </button>
                </Grid>
                </Link>

              </Grid>
            </div>


          </Grid>

        </Grid>


      </General>
      <img alt="register-img" src="/images/eduroom_logo_box.svg" width="1152" height="558.6" style={{
        position: 'absolute', left: '657px',
        top: '153px', opacity: 0.3
      }} />
      <style jsx>
        {style}
      </style>
    </Fragment>
  )
}
export default Content

