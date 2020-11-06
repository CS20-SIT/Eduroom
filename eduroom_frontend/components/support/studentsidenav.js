import Head from "next/head";
import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  CssBaseline,
  makeStyles,
  Select,
  MenuItem,
  Paper,
  createMuiTheme,
  ThemeProvider,
  Link,
} from "@material-ui/core";

const Studentnav = () => {
  return (
    <Fragment>
      <Typography>
        <h3>Student Topics</h3>
      </Typography>
      <Grid container>
      <Grid item xs={12}>
      <Link href="/support/getstart">
      <Button>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2164/2164598.svg"
          style={{ height: "15px" }}
        />
        &nbsp;&nbsp;&nbsp;Getting Started
      </Button>
      </Link></Grid>
      <Grid item xs={12}><Button>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2521/2521782.svg"
          style={{ height: "15px" }}
        />
        &nbsp;&nbsp;&nbsp;Account/Profile
      </Button></Grid>
      <Grid item xs={12}><Button>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2920/2920249.svg"
          style={{ height: "15px" }}
        />
        &nbsp;&nbsp;&nbsp;Troubleshooting
      </Button></Grid>
      <Grid item xs={12}><Button>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/182/182321.svg"
          style={{ height: "15px" }}
        />
        &nbsp;&nbsp;&nbsp;Course Taking
      </Button></Grid>
      <Grid item xs={12}><Button>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/846/846023.svg"
          style={{ height: "15px" }}
        />
        &nbsp;&nbsp;&nbsp;Purchase/Refunds
      </Button></Grid>
      <Grid item xs={12}><Button>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/977/977411.svg"
          style={{ height: "15px" }}
        />
        &nbsp;&nbsp;&nbsp;Mobile
      </Button></Grid>
      </Grid>
      <br/>
      <Button variant='contained' style={{marginTop:'20px',backgroundColor:'#3D467F'}} href="/support/create">CONTACT US</Button>
    </Fragment>
  );
};

export default Studentnav;
