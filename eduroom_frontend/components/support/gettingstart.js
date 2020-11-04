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
import Studentnav from '../support/studentsidenav'

const GetStart = () => {
  return (
    <Fragment>
      
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Typography>
            <h1>Getting started</h1>
          </Typography>
        </Grid>
        <Grid container >
          <Grid item xs={3}><Studentnav/></Grid>
          <Grid item xs={9}>
            <Typography><h2>Getting Started - General</h2></Typography>
            <Typography><Link href='/support/getstart/Course-Instructors-and-Teaching-Assistants'>Course Instructors and Teaching Assistants</Link></Typography>
            <Typography><Link href='/support/getstart/EDUROOM-Platforms-and-Features'>Udemy Platforms and Features</Link></Typography>
            <Typography><Link href='/support/getstart/Course-Instructors-and-Teaching-Assistants'>How Does Udemy Work? FAQ</Link></Typography>
            <Typography>Add a Course to Your Wishlist</Typography>
            <Typography>System Requirements</Typography>
            <Typography>How to Preview And Compare Courses</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default GetStart;
