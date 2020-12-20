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
                    </label></Link><label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label><label>Account / Profile</label>
      <Grid container style={{ marginTop: theme.spacing(2) }}>
        <Grid item xs={12}>
          <Typography style={{marginBottom:theme.spacing(5)}}>
            <h1>Account / Profile</h1>
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
                <h2>Account / Profile - General</h2>
              </Typography>
              <hr style={{ marginRight: theme.spacing(5), marginBottom: theme.spacing(3) }}></hr>
              <p>
                <Link href="/support/Account&Profile/Merging-Accounts">
                  Merging Accounts
                </Link>
              </p>
              
                <Link href="/support/Account&Profile/Keeping-Your-Account-Secure">
                <p>
                  Keeping Your Account Secure
                  </p>
                </Link>
              
                <Link href="/support/Account&Profile/Unsubscribe-From-Eduroom-or-Instructor-Notifications"><p>Unsubscribe From Eduroom or Instructor Notifications</p></Link>
                <Link href="/support/Account&Profile/Closing-Your-Account"><p>Closing Your Account</p></Link>
              <Link href="/support/Account&Profile/How-to-Change-or-Reset-Your-Password"><p>How to Change or Reset Your Password</p></Link>
              <Grid container justify='flex-end'>
              <img src='/images/it_support.svg' style={{marginRight:theme.spacing(8)}}></img>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Index;
