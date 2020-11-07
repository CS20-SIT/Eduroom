import Head from "next/head";
import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  CssBaseline,
  Paper,
  ThemeProvider,
  Link,
  fade,
} from "@material-ui/core";
import Studentnav from "../support/studentsidenav";

const GetStart = () => {
  return (
    <Fragment>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Typography>
            <h1>Getting started</h1>
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <Studentnav />
          </Grid>

          <Grid item xs={9}>
            <Paper
              elevation={3}
              style={{
                paddingBottom: "100px",
                paddingLeft: "40px",
                paddingTop: "20px",
                backgroundColor: fade("#ffffff", 0.7),
              }}
            >
              <Typography>
                <h2>Getting Started - General</h2>
              </Typography>
              <hr style={{ marginRight: "30px", marginBottom: "25px" }}></hr>
              <p>
                <Link href="/support/getstart/Course-Instructors-and-Teaching-Assistants">
                  Course Instructors and Teaching Assistants
                </Link>
              </p>
              
                <Link href="/support/getstart/How-Does-Eduroom-Work">
                <p>
                  How Does Eduroom Work? FAQ
                  </p>
                </Link>
              
                <Link href="/support/getstart/Add-a-Course-to-Your-Wishlist"><p>Add a Course to Your Wishlist</p></Link>
                <Link href="/support/getstart/System-Requirements"><p>System Requirement</p></Link>
              <p>How to Preview And Compare Courses</p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default GetStart;
