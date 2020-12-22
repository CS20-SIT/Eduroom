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
import Studentnav from "../studentsidenav";

const HowtoChangeorResetYourPassword = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>How to Change or Reset Your Password</h1>
                    </Typography>
                    <Grid item xs={9} style={{ paddingRight: "100px" }}>
                        <Paper
                            style={{
                                padding: "20px",

                                backgroundColor: fade("#ffffff", 0.6),
                            }}
                        >
                            <Typography>
                                {" "}
                                <p>This article explains how you can change the password for your Udemy account, and request a reset password email if you have forgotten it.</p>
<h3>How to reset your password</h3>
<p>If you can’t remember the password for your Udemy account, you can request a reset password email from the login page:</p>
<ol> <li>Move your cursor to the top right of Udemy's homepage, then click on Login </li>
<li>Click Forgot Password </li>
<li>Enter your email and click the I'm not a robot box </li>
<li>Select the correct images and then click VERIFY </li>
<li>Next, click on Reset Password </li>
<li>Check your inbox for the reset password email and complete the steps to change your password </li></ol>
                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Account&Profile">Account / Profile
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                            <h3>Other articles</h3>

                            <div style={{  marginBottom: theme.spacing(3) }}>
                                <Studentnav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default HowtoChangeorResetYourPassword;
