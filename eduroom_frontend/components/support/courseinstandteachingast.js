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
} from "@material-ui/core";
import Studentnav from '../support/studentsidenav'

const Courseinstandteachingast = () => {
    return(
      
        <Fragment>
            
            <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Typography>
            <h1>Course Instructors and Teaching Assistantsd</h1>
          </Typography>
        </Grid>
        <Grid container>
          
          <Grid item xs={9} style={{paddingRight:'100px'}}>
            <Typography><p>Udemy instructors work hard to provide students with high quality courses and compelling learning experiences. Depending on the course, it may have more than one instructor, as well as teaching assistants to help answer questions you may have.

            </p>Instructors

<p>Udemy courses are created and overseen by experts in their respective fields. You can see who the instructors are for a course, and review information about them, by scrolling down to the “Instructor” section on the course landing page.

</p>Teaching Assistants<p>

Instructors can also add teaching assistants to their courses, who can help them with their course materials and respond to student questions in the Q&A.</p><p>

Even though a Teaching Assistant’s profile may not appear on the course landing page, they are also experts in the course subject, and can provide accurate answers to your questions.</p></Typography>
            
            </Grid>
            <Grid item xs={3} >
            <Typography>
        <h3>Other articles</h3>
      </Typography>
      
      
            <Typography><Link href='/support/getstart/EDUROOM-Platforms-and-Features'>Udemy Platforms and Features</Link></Typography>
            <Typography>How Does Udemy Work? FAQ</Typography>
            <Typography>Add a Course to Your Wishlist</Typography>
            <Typography>System Requirements</Typography>
            <Typography>How to Preview And Compare Courses</Typography><Studentnav/></Grid>
          
        </Grid>
      </Grid>
        </Fragment>
    )
}
export default Courseinstandteachingast;