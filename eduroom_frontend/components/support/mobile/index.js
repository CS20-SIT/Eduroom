import Head from "next/head";
import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  CssBaseline,
  Paper,
  ThemeProvider,
  createMuiTheme,
  Link,
  fade,
} from "@material-ui/core";
import Studentnav from "../studentsidenav";

const Index = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Link href='/support'><label>Eduroom Support
                    </label></Link><label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label><label>Mobile</label>
      <Grid container style={{ marginTop: theme.spacing(2) }}>
        <Grid item xs={12}>
          <Typography style={{marginBottom:theme.spacing(5)}}>
            <h1>Mobile</h1>
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <Studentnav />
          </Grid>

          <Grid item xs={9}>
            <Paper
              elevation={3}
              style={{
                paddingBottom: theme.spacing(4),
                paddingLeft: theme.spacing(5),
                paddingTop: theme.spacing(2),
                backgroundColor: fade("#ffffff", 0.7),
                marginBottom: theme.spacing(10),
                width:theme.spacing(110)
              }}
            >
              <Typography>
                <h2>Mobile - General</h2>
              </Typography>
              <hr style={{ marginRight: theme.spacing(5), marginBottom: theme.spacing(3) }}></hr>
              <p>
                <Link href="/support/Mobile/Unrecognized-Lecture-Format">
                Unrecognized Lecture Format
                </Link>
              </p>
              
                <Link href="/support/Mobile/How-to-Access-Resources-on-The-Eduroom-iOS-App">
                <p>
                How to Access Resources on The Eduroom iOS App
                  </p>
                </Link>
              
                <Link href="/support/Mobile/Disable-Push-Notifications-on-iOS"><p>Disable Push Notifications on iOS</p></Link>
                <Link href="/support/Mobile/Manually-Mark-a-Lecture-as-Complete-on-iOS-Devices"><p>Manually Mark a Lecture as Complete on iOS Devices</p></Link>
                <Link href="/support/Mobile/How-to-Access-Resources-on-The-Eduroom-Android-App"><p>How to Access Resources on The Eduroom iOS App</p></Link>
              
              <Grid container justify='flex-end'>
              <img src='/images/mobile.svg' style={{marginRight:theme.spacing(8), width:'45%'}}></img>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Index;
