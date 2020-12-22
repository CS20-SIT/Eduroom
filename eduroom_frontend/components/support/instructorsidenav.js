
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

const Instructornav = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Paper style={{width:theme.spacing(32), paddingTop:theme.spacing(1.2), paddingLeft:theme.spacing(5), paddingBottom:theme.spacing(4)}} elevation={3}>

          
      <Typography>
        <h3>Instructor Topics</h3>
      </Typography>

      
      <Button href="/support/Instructor-Payments">

        Instructor Payments
      </Button>
      <br></br>
      <Button href="/support/Selling&Promotion">

      Selling & Promotion
      </Button>
      <br></br>
      <Button href="/support/Quality-Standards">

        Quality Standards
      </Button>
<br></br>
      <Button href="/support/Course-Building">

        Course Building
      </Button>
      <br></br>
      <Button href="/support/Course-Management">

        Course Management
      </Button>
      <br></br>
      <Button href="/support/Trust&Safety">

        Trust & Safety
      </Button>
      
      
      </Paper>
    </Fragment>
  );
};

export default Instructornav;
