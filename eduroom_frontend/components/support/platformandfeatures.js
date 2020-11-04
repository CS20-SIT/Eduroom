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
import Studentnav from "../support/studentsidenav";

const Platformandfeature = () => {
  return (
    <Fragment>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Typography>
            <h1>Udemy Platforms and Features</h1>
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={9} style={{ paddingRight: "100px" }}>
            <Typography>
                <p>One of the great things about learning on Udemy is that you can access your courses from several different devices and platforms, including a desktop / laptop, Android app, and iOS app.</p>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              <h3>Other articles</h3>
            </Typography>

            <Typography>
              <Link href="/support/getstart/EDUROOM-Platforms-and-Features">
                Udemy Platforms and Features
              </Link>
            </Typography>
            <Typography>How Does Udemy Work? FAQ</Typography>
            <Typography>Add a Course to Your Wishlist</Typography>
            <Typography>System Requirements</Typography>
            <Typography>How to Preview And Compare Courses</Typography>
            <Studentnav />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Platformandfeature;
