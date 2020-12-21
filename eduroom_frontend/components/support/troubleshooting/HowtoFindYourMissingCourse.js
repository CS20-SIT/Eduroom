

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

const HowtoFindYourMissingCourse = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>How to Find Your Missing Course</h1>
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
                                <p>If you've bought a course and it’s not showing up in the My Courses section of your Udemy account, this article explains the most common reasons for this, and how you can find your course. </p>
<p>Please note: if you've tried purchasing a course with the Udemy mobile app, but are unable to locate it in your account, please review our missing mobile app purchases article. </p>
<p>If you don’t see the course you purchased on the My Courses page, and it’s not located in the Archived section of your account, please do the following:</p>
<h3>Confirm you received a confirmation email for the course purchase </h3>
<ol> <li>After enrolling in a course, check to see that you’ve received a confirmation email from Udemy. A confirmation email from udemy@email.udemy.com will be sent to the email address registered to your Udemy account. Be sure to also check your junk mail folder.</li>
<li>If you don’t see a confirmation email in that email account, this could indicate you purchased the course while logged into Udemy with a different email address (or with an account that was created with an accidental typo: see below for more information).  </li></ol>
<ul> <li>See if you have multiple accounts registered with Udemy: occasionally students create more than one Udemy account by mistake. If you use multiple email accounts, or have an Apple, Facebook, or Google account, try logging in with the associated email addresses. Check to see if the course you purchased is in that account.</li>
  <li>If you discover that you have created a second Udemy account by accident, and would like to merge the two accounts, please click here for rules and instructions on how to merge accounts. </li></ul>
<p>If you didn’t receive a confirmation email in your email accounts, and it’s not in your spam folders, this could indicate the purchase did not go through.</p>
<h3>Check your banking information </h3>
<p>Confirm that the course was in fact purchased by double checking the payment history in your banking or PayPal account.  
If the purchase is showing in your financial information, but you have not been able to locate the course following the steps outlined above, you may have entered your email address incorrectly when you first signed up for Udemy. As a result, our system would attempt sending the confirmation email to that address, instead of the correct one. </p>
<p>If you believe this may have happened, please contact our support team by clicking here, and provide the information that’s requested in the form.</p>
                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Troubleshooting">Troubleshooting
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
export default HowtoFindYourMissingCourse;
