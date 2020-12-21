


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

const HowtoFindTheCourseURL = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>How to Find The Course URL</h1>
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
                                <p>If you need to locate the URL of a course you’re taking, this article explains how you can do so from the course player on a web browser.</p>
<h3>How to locate the course URL on a web browser</h3>
<p>The course URL is the web address of the course page. You can copy the URL for the course, which appears above the course player in your web browser.</p>
<p>Steps on how to access the course player can be read here.</p>

<h3>How to locate the course URL on a mobile device</h3>
<p>Please note that the course URL is only visible on a web browser and not in the Udemy mobile app. To locate the course URL while using a mobile device, please log into Udemy.com on a web browser and navigate to the course page.</p>
                                                                                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                                                    <Link href="/support/Purchase-Refunds">Purchase/Refunds  
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                        <div style={{ marginBottom: theme.spacing(3) }}>
                                <Studentnav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default HowtoFindTheCourseURL;
