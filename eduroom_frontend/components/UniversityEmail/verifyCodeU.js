import React, { Fragment, useState} from 'react'
import style from '../../styles/universityEmail/Uregister'
import {Link,Typography,InputBase, Paper, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
  const [createinfo, setinfo] = useState({
    verifyCode: "",
  }); 
  const handleSubmit = (e) => {
      console.log(createinfo);
      // api.post("/api/registerUemail", createinfo).then((res) => {
      //   console.log(res);
      //   router.push("/registerUemail");
      //   console.log("PASSPUSH");
      // });
     
      
  };
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
                Activate UniversityEmail
            </Typography>

              <br></br>
              <Paper style={{
                height: '5px', width: '100%', backgroundColor: '#A880F7', paddingRight: 300
                , opcacity: '50%'
              }}></Paper>

              <Typography variant="body2" style={{ paddingTop: 15, color: '#979797' }}>
                Type the verify code sent to your university email.
              </Typography>

              <br></br>
             
              <Grid container spacing={3} direction="column" alignItems="center"
                justify="center">
                  <Grid item xs={6} >
                  <Paper style={{ padding: 10 }}>
                    <form>
                      <InputBase
                        onChange={handleChange}
                        name = "verifyCode"
                        fullWidth
                        autoFocus
                        type={"text"}
                        value={createinfo.localPart}
                        className={classes.margin}
                        placeholder = {"XXXXXXXXXX"}
                        inputProps={{ 'aria-label': 'naked' }}
                      />
                    </form>
                  </Paper>
                  </Grid>

                <Grid container spacing={3} direction="column"
                  alignItems="center"
                  justify="center" style={{ marginTop: '15px' }}>

                 
                  <Grid item xs={4} >
                    <Typography variant="body2">Didn't get the verify email? <a >Resend the verify code</a></Typography>
                  </Grid>
                </Grid>

                <Grid item xs={6} >
                  <Link href = "/universityemail/verifysuccess">
                  <button className="register-button"
                   type="submit"
                   onClick={handleSubmit}>
                    <span className="register-button-text">Activate</span>
                  </button>
                  </Link>
          
                </Grid>

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

