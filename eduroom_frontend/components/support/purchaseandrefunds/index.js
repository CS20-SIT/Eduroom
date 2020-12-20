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
import Studentnav from "../studentsidenav";

const Index = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Link href='/support'><label>Eduroom Support
                    </label></Link><label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label><label>Purchase/Refunds</label>
      <Grid container style={{ marginTop: theme.spacing(2) }}>
        <Grid item xs={12}>
          <Typography style={{marginBottom:theme.spacing(5)}}>
            <h1>Purchase/Refunds</h1>
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
                paddingBottom: theme.spacing(4),
                paddingLeft: theme.spacing(5),
                paddingTop: theme.spacing(2),
                backgroundColor: fade("#ffffff", 0.7),
                marginBottom: theme.spacing(10),
                width:theme.spacing(110)
              }}
            >
              <Typography>
                <h2>Purchase/Refunds - General</h2>
              </Typography>
              <hr style={{ marginRight: theme.spacing(5), marginBottom: theme.spacing(3) }}></hr>
              <p>
                <Link href="/support/Purchase-Refunds/Group-Pricing">
                Group Pricing
                </Link>
              </p>
              
                <Link href="/support/Purchase-Refunds/How-to-Find-The-Course-URL">
                <p>
                How to Find The Course URL
                  </p>
                </Link>
              
                <Link href="/support/Purchase-Refunds/Requesting-a-W-9-For-Your-Course-Purchase"><p>Requesting a W-9 For Your Course Purchase</p></Link>
                <Link href="/support/Purchase-Refunds/How-to-Search-for-Courses-on-Eduroom"><p>How to Search for Courses on Eduroom</p></Link>
                <Link href="/support/Purchase-Refunds/Shopping-Cart-FAQ"><p>Shopping Cart FAQ</p></Link>
              
              <Grid container justify='flex-end'>
              <img src='/images/it_support.svg' style={{marginRight:theme.spacing(8)}}></img>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Index;
