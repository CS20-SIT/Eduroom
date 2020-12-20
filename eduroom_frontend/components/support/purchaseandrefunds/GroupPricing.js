


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

const GroupPricing = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Group Pricing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
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
                                <p> You can buy a package of high-quality, business-focused Udemy courses for your team or entire organization through our Udemy for Business offering. Thousands of businesses have chosen Udemy for Business to upskill their workforce and drive learning forward. To read more about many of the companies that leverage Udemy for Business for their learning needs, please click here. Our business package provides over 5,000+ engaging courses on a variety of topics ranging from management and leadership skills to programming and stress management.</p>
                                                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                                                    <Link href="/support/Purchase-Refunds">Purchase/Refunds  
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                            <h3>Other articles</h3>

                            <p>
                                <Link href="/support/getstart/Course-Instructors-and-Teaching-Assistants">
                                    Course Instructors and Teaching Assistantsd
              </Link>
                            </p>
                            <p>Add a Course to Your Wishlist</p>
                            <p>System Requirements</p>
                            <p>How to Preview And Compare Courses</p>
                            <div style={{ marginTop: theme.spacing(7), marginBottom: theme.spacing(3) }}>
                                <Studentnav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default GroupPricing;
