import React, { Fragment, useState } from 'react'
import style from '../../styles/universityEmail/Uregister'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import General from '../template/general'
import api from "../../api";
import Button from '@material-ui/core/Button'


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
    localPart: "",
    domainName: ""
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
                You already verify your universityEmail!
            </Typography>

              <br></br>
              <Paper style={{
                height: '5px', width: '100%', backgroundColor: '#A880F7', paddingRight: 300
                , opcacity: '50%'
              }}></Paper>

              <Typography variant="h5" style={{ paddingTop: 15, color: '#979797' }}>
                Thank you for being a part of us.
              </Typography>

              <br></br>
              <Typography variant="h5" style={{ paddingTop: 1, color: '#979797' }}>
                Your universityEmail is : -querry from database-
              </Typography>

              
              <Grid container spacing={4} direction="column" alignItems="center "
                justify="center">

                

                <Grid item xs={12} >
                  <button className="register-button"
                   type="submit"
                   onClick={handleSubmit} style={{marginLeft:'600px'}} >
                    <span className="register-button-text">Shop now!</span>
                  </button>
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

