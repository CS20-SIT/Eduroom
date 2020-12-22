



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

const HowtoCloseanInstructorAccount = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>How to Close an Instructor Account</h1>
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

                                <p>We're sorry to hear you'd like to close your Udemy account. If you're having trouble with the site, or if there's anything we can help you with before you close your account, please contact Udemy Support.</p>
<p>If you’ve created a course on Udemy, or you have been added as a co-instructor to a course, the steps you need to take to close your account will vary depending on a few factors.</p>
<p>First, you will need to take the required steps as either a Course Instructor or Course Co-Instructor outlined below, before following the steps in the Closing Your Account section</p>
<h3>Course Instructor</h3>
<h4>Instructor of Courses with No Student Enrollments</h4>
<p>If you’ve created draft courses on Udemy, you must delete each of the courses you created before closing your account (more info here).</p>
<p>If you have published any of your courses, but don’t yet have any enrolled students, unpublish the courses first, then delete them in order to close your account (more info here). </p><p>After deleting all of your courses, you can navigate to the Close Account page to permanently close your account with Udemy. </p>
<h4>Instructor of Courses with Students Enrolled</h4>
<p>If you have created any courses that are published or have been published in the past, and a student has enrolled in them, please contact support for further instructions on how to close your account. Note that, per our student lifetime access feature, students who have enrolled in your courses will continue to have access to them after you close your account.</p>
<h4>Instructor of Courses in Udemy for Business Content Collection</h4>
<p>If any of your courses have been selected for inclusion in the Udemy for Business content collection, please contact our Udemy for Business Content team at ufbcontent@udemy.com for further assistance. Note that, per our Promotions Policy, your course will continue to be available for enrollment in the Udemy for Business catalogue for a period of up to 12 months. </p>
<h3>Course Co-Instructors</h3>
<h4>Co-Instructor with Course Manage Permissions</h4>
<p>If you are listed as a co-instructor of a course and the original course creator has assigned you the “Manage” permission for the course, first navigate to the Course Settings page and remove yourself as a course co-instructor (directions here). </p>
<p>After removing yourself as a co-instructor from all courses, navigate to the Close Account section to permanently close your Udemy account.</p>
<p>Note: If there are any payments due to be paid to you in your Udemy Revenue Report, you won’t be able to close your account until your last scheduled payout is sent by Udemy.</p>
<h4>Co-Instructor without Course Manage Permissions</h4>
<p>If you are listed as a co-instructor of a course and you do not have the “Manage” permission for the course, you will need to contact the original course creator to remove you from the course (directions here). </p><p>After you’ve been removed from all courses you teach as a co-instructor, you can close your account following the steps below.</p>
<p>Note: If there are any payments due to be paid to you in your Udemy Revenue Report, you won’t be able to remove your account until your last scheduled payout is sent by Udemy.</p>
<h3>Closing Your Account</h3>
<p>Once you’ve taken the necessary steps above, you can proceed to close your account by following these steps:</p>
 <ol> <li>Sign into your account.</li>
 <li>Move your cursor to your avatar at the top right-hand corner of the page.</li>
  <li>Click on <strong>Account </strong>in the drop-down menu</li>
  <li>Next, click <strong>Close Account</strong> on the right-hand side</li>
 <li>Enter your password and click <strong>Close Account</strong> again.</li></ol>


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
export default HowtoCloseanInstructorAccount;
