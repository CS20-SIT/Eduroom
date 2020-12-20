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

const ClosingYourAccount = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Closing Your Account</h1>
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
                                <p>This article outlines how you can close your Udemy account. If you're having trouble with the site, or if there's anything we can help you with before you close your account, please contact Udemy Support.</p>
<p>Please note that by closing your Udemy account you will lose access to all the courses you’ve enrolled in, including purchased courses.  If a course was purchased within the past 30 days, however, you can request a refund before closing your account.</p>
<p>For a complete list of the information we collect and how it is used, please refer to our Privacy and Cookie Policy.</p>
<h3>How to Close Your Udemy Account</h3>
<ol> <li> Sign in to your account.</li>
<li> Move your cursor to your avatar at the top right-hand corner of the page.</li>
 <li> Click on your name from the drop down menu to navigate to your Profile page.</li>
 <li> Next, click Close Account on the left-hand side and then Close Account on the right.</li>
 <li> Enter your password and click Close Account again. </li></ol>
                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Account&Profile">Account / Profile
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
export default ClosingYourAccount;
