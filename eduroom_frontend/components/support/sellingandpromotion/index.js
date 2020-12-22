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
  createMuiTheme,
  Link,
  fade,
} from "@material-ui/core";
import Instructornav from "../instructorsidenav";

const Index = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Link href='/support'><label>Eduroom Support
                    </label></Link><label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label><label>Selling & Promotion</label>
      <Grid container style={{ marginTop: theme.spacing(2) }}>
        <Grid item xs={12}>
          <Typography style={{marginBottom:theme.spacing(5)}}>
            <h1>Selling & Promotion</h1>
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <Instructornav />
          </Grid>

          <Grid item xs={9}>
            <Paper
              elevation={3}
              style={{
                paddingBottom: theme.spacing(4),
                paddingLeft: theme.spacing(5),
                paddingTop: theme.spacing(2),
                backgroundColor: fade("#ffffff", 0.7),
                marginBottom: theme.spacing(10),
                width:theme.spacing(110)
              }}
            >
              <Typography>
                <h2>Selling & Promotion - General</h2>
              </Typography>
              <hr style={{ marginRight: theme.spacing(5), marginBottom: theme.spacing(3) }}></hr>
              <p>
                <Link href="/support/Selling&Promotion/Eduroom-for-Business-Content-Subscription-Program">
                Eduroom for Business Content Subscription Program
                </Link>
              </p>
              
                <Link href="/support/Selling&Promotion/Instructors:-Eduroom's-Pricing-Tiers-For-Courses">
                <p>
                Instructors: Eduroom's Pricing Tiers For Courses
                  </p>
                </Link>
              
                <Link href="/support/Selling&Promotion/Why-Can't-I-Send-my-Educational-Announcementor-Promotional-Email"><p>Why Can't I Send my Educational Announcement or Promotional Email?</p></Link>

              
              <Grid container justify='flex-end'>
              <img src='/images/sellingandpromotion.svg' style={{marginRight:theme.spacing(8), width:'45%'}}></img>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Index;
