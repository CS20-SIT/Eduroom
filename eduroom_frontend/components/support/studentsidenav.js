
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
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Paper style={{width:theme.spacing(32), paddingTop:theme.spacing(1.2), paddingLeft:theme.spacing(5), paddingBottom:theme.spacing(4)}} elevation={3}>

          
      <Typography>
        <h3>Student Topics</h3>
      </Typography>

      
      <Button href="/support/getstart">

        Getting Started
      </Button>
      <br></br>
      <Button href="/support/Account&Profile">

        Account/Profile
      </Button>
      <br></br>
      <Button href="/support/Troubleshooting">

        Troubleshooting
      </Button>
<br></br>
      <Button href="/support/Course-Taking">

        Course Taking
      </Button>
      <br></br>
      <Button href="/support/Purchase-Refunds">

        Purchase/Refunds
      </Button>
      <br></br>
      <Button href="/support/Mobile">

        Mobile
      </Button>
      
      
      </Paper>
    </Fragment>
  );
};

export default Studentnav;
