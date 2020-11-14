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

const Courseinstandteachingast = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Grid container style={{ marginTop: theme.spacing(4) }}>
        <Grid container>
          <Typography style={{ marginLeft: theme.spacing(2) }}>
            {" "}
            <h1>Course Instructors and Teaching Assistantsd</h1>
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
                <p>
                  Udemy instructors work hard to provide students with high
                  quality courses and compelling learning experiences. Depending
                  on the course, it may have more than one instructor, as well
                  as teaching assistants to help answer questions you may have.
                </p>
                Instructors
                <p>
                  Udemy courses are created and overseen by experts in their
                  respective fields. You can see who the instructors are for a
                  course, and review information about them, by scrolling down
                  to the “Instructor” section on the course landing page.
                </p>
                Teaching Assistants
                <p>
                  Instructors can also add teaching assistants to their courses,
                  who can help them with their course materials and respond to
                  student questions in the Q&A.
                </p>
                <p>
                  Even though a Teaching Assistant’s profile may not appear on
                  the course landing page, they are also experts in the course
                  subject, and can provide accurate answers to your questions.
                </p>
                <p style={{marginLeft:theme.spacing(78),marginTop:theme.spacing(25)}}>
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
export default Courseinstandteachingast;
