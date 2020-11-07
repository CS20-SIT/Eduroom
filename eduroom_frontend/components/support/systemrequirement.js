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
  fade,
} from "@material-ui/core";
import Studentnav from "../support/studentsidenav";

const Systemrequirement = () => {
  return (
    <Fragment>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid container>
          <Typography style={{ marginLeft: "20px" }}>
            {" "}
            <h1>System Requirement</h1>
          </Typography>
          <Grid item xs={9} style={{ paddingRight: "100px" }}>
            <Paper
              style={{
                padding: "20px",
                marginBottom: "80px",
                backgroundColor: fade("#ffffff", 0.6),
              }}
            >
              <Typography>
                {" "}
                <p>You can access your Udemy courses from various devices and platforms, on both PC and Mac desktops / laptops, as well as Android and iOS mobile devices. Our system requirements for these follow below.</p>

<h4>Minimum System Requirements</h4>
<li style={{marginLeft:'25px'}}><p>The latest Chrome, Firefox, Safari, Edge, Opera or IE11 for desktop/laptop</p></li>
<li style={{marginLeft:'25px'}}><p>A broadband connection with a minimum speed of 5Mbit or 800kbps</p></li>
<li style={{marginLeft:'25px'}}><p>Please note that Flash Player is not required</p></li>
<h4>PC Specific Requirements</h4>
<li style={{marginLeft:'25px'}}><p>Platform: Windows 8 or higher with the latest updates installed</p></li>
<li style={{marginLeft:'25px'}}><p>RAM: 4GB or more</p></li>
<li style={{marginLeft:'25px'}}><p>Video: Graphics output capability</p></li>
<li style={{marginLeft:'25px'}}><p>Sound: Sound output capability</p></li>
<h4>Mac Specific Requirements</h4>
<li style={{marginLeft:'25px'}}><p>Platform: Mac OS X 10.12 or higher with the latest updates installed</p></li>
<li style={{marginLeft:'25px'}}><p>RAM: 4GB or more</p></li>
<li style={{marginLeft:'25px'}}><p>Video: Graphics output capability</p></li>
<li style={{marginLeft:'25px'}}><p>Sound: Sound output capability</p></li>
<h4>Mobile Specific Requirements</h4>
<li style={{marginLeft:'25px'}}><p>iOS 12.0 and above</p></li>
<li style={{marginLeft:'25px'}}><p>Android 6.0 and above</p></li>
<p>You can download the Udemy mobile app for iOS or Android devices by clicking here.</p>

<p>Please note that the Udemy Android mobile app is not supported on Chromebooks or Chrome OS devices. </p>

<p>The Udemy app supports Chromecast on iOS and Android, and AirPlay on iOS.</p>

<p>Mobile browsers: Safari or Chrome on iOS and Chrome on Android. </p>

<h4>What Browser am I Using?</h4>

<p>To find out more about your specific system, this site will tell you which browser and OS you're currently using.</p>

<p>To watch courses, we recommend using Google Chrome. You can download Chrome for free here.</p>
                <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                  <Link href="/support/getstart">
                    <label style={{ marginRight: "8px" }}>&lt;</label>Getting
                    Started
                  </Link>
                </p>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <h3>Other articles</h3>

            <p>
              <Link href="/support/getstart/How-Does-Eduroom-Work">
                How does Eduroom work
              </Link>
            </p>
            <p>How Does Udemy Work? FAQ</p>
            <p>Add a Course to Your Wishlist</p>
            <p>System Requirements</p>
            <p>How to Preview And Compare Courses</p>
            <div style={{ marginTop: "50px", marginBottom: "100px" }}>
              <Studentnav />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Systemrequirement;
