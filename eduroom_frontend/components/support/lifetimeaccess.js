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

const Lifetime = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Grid container style={{ marginTop: theme.spacing(4) }}>
        <Grid container>
          <Typography style={{ marginLeft: theme.spacing(2),marginRight:theme.spacing(10) }}>
            {" "}
            <h1>Lifetime Access</h1>
          </Typography>
          <Grid item xs={9} style={{ paddingRight: theme.spacing(13) }}>
            <Paper
              style={{
                padding: theme.spacing(3),
                marginBottom: theme.spacing(10),
                backgroundColor: fade("#ffffff", 0.6),
              }}
            >
              <Typography>
                {" "}
                <p>One of the best things about Udemy is that you can login to your account from virtually anywhere, whenever you want, and access your courses easily! We strongly believe that students will benefit from the limitless educational possibilities this feature presents.</p>
                <p>Once you enroll in a course, you'll have access for life, provided that your account is in good standing and Udemy continues to have a license to that course.</p>
                <p>You have the freedom to learn at your own pace. Udemy is your academy - learn what you want, when you want.</p>
                <h4>Lifetime Access: Commonly Asked Questions</h4>
                <p>Below are answers to questions we often receive regarding lifetime access.</p>
                <h4>Will I continue to have access to the course even after I complete it?</h4>
                <p>Yes. You will continue to have access to the course after you complete it, provided that your account’s in good standing, and Udemy continues to have a license to the course. So, if you wish to review specific content in the course after you finish it, or take it all over again, you can.</p>
                <h4>I bought the course on sale. Does this affect how long I have access to the course?</h4>
                <p>No. Your access to a course is not affected by the price you paid for it.</p>
                <h4>Do free courses offer lifetime access?</h4>
                <p>Yes. Students also receive lifetime access to free courses, provided their account remains in good standing and Udemy continues to have a license to the course.</p>
                <h4>What if I used an instructor coupon to purchase the course? Does lifetime access still apply?</h4>
                <p>Yes. Students receive lifetime access to a Udemy course regardless of what price they paid, or whether they used a coupon to enrol or not.</p>
                <h4>What happens if the instructor removes the course from Udemy?</h4>
                <p>We host more than 130,000 courses on our online learning marketplace. Our marketplace model means we do not own the copyright to the content of the courses; the respective instructors own these rights. On rare occasions, instructors may remove their courses from our marketplace, or, Udemy may have to remove a course from the platform for policy or legal reasons. If this does happen to a course you're enrolled in, please contact us and we'll be ready to help.</p>
                <p><b>Please note:</b> occasionally instructors may decide to unpublish their course and close it to additional enrollments. For example, an instructor might unpublish an older course until they’ve had a chance to update the course content. In situations where an instructor unpublishes their course, however, the course content remains on the platform and is still accessible to students who are enrolled in the course.</p>
                <h4>Can my courses ever be removed from Udemy?</h4>
                <p>On rare occasions, Udemy may be required to remove a course from the platform due to policy or legal reasons. If this does happen to a course you're enrolled in, please contact us and we'll be ready to help.</p>
<p style={{marginLeft:theme.spacing(78),marginTop:theme.spacing(5)}}>
                  <Link href="/support/getstart"><label style={{marginRight:theme.spacing(1.7)}}>&lt;</label>Getting Started</Link>
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
            <div style={{ marginTop: theme.spacing(7), marginBottom: theme.spacing(3) }}>
              <Studentnav />
             
            </div>

            <Button variant='contained' style={{backgroundColor:'#FB9CCB', marginBottom:theme.spacing(10),marginLeft:theme.spacing(8.5),marginTop:theme.spacing(1)}} href="/support/create"><label style={{color:'#ffffff'}}>CONTACT US</label></Button>

          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Lifetime;
