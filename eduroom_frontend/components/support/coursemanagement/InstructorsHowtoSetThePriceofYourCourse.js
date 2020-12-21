



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
import Instructornav from "../instructorsidenav";

const InstructorsHowtoSetThePriceofYourCourse = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Instructors: How to Set The Price of Your Course</h1>
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

                                <p>This article outlines how instructors can set or change the base price of their course. If instructors wish to charge a fee for their courses, however, they will need to apply to become a premium instructor first.</p>
<p>More information on how to become a premium instructor is available in this article.</p>
<h3>How instructors can set or change the price of their course</h3>
<p>Instructors set a base price for each of their courses, which by default, is used as the course's list price. If you’re an instructor and wish to set or change the base price of your course, please follow the steps below:</p>
<ol> <li>Navigate to the course management page (steps on how to can be viewed here).</li>
<li>Click Pricing on the left-hand side. The minimum and maximum base prices instructors can set for courses are also listed in our global price matrix.</li>
<li>Select the price you wish to set and click Save.</li></ol>

<p><strong>Please note</strong>: the new price may not be immediately reflected in the Udemy marketplace or on mobile devices, and coupons that were created before the price change may still be applied to your course.</p>
<h3>Course prices with Udemy deals</h3>
<p>For courses of instructors who are opted into Udemy Deals, Udemy may generate and display a market-specific list price for your course that is different from the base price (except in Japan).</p>
Changing a course from free to paid
<p>While instructors can change the price of their course at any time, a course can only be switched from Free to Paid once. If the course is switched from free to paid and back to free (or vice versa) after the course is published, the promotional announcements for the course will be permanently disabled. </p>
<p>Courses that you charge for on Udemy cannot be offered for free off of Udemy (e.g. YouTube, your own site, other sites).</p>



                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                    <Link href="/support/Course-Building">Course Building
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                        <div style={{ marginBottom: theme.spacing(3) }}>
                                <Instructornav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default InstructorsHowtoSetThePriceofYourCourse;
