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

const Addacourse = () => {
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
            <h1>Add a Course to Your Wishlist</h1>
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
                <p>Adding free or paid courses to your wishlist is a quick and easy way to save a course for later, and enroll in it when you’re ready. This article outlines how you can add courses to your wishlist from the course card, course landing page or from your shopping cart.</p>

<h4>How to Add a Course to Your Wishlist​ From the Course Card</h4>

<p>To add a course to your wishlist from the course card, please follow the steps below.</p>

<p>1. Search or browse for a course</p>
<p>2. Hover your mouse over the course card</p>
<p>3. Click the heart that appears beside Add to Cart, and the course will be added to your wishlist</p>



<h4>How to Add a Course to Your Wishlist From the Course Landing Page</h4>

<p>If you need to add a course to your wishlist, from the course landing page, please follow these steps:</p>

<p>1. Search or browse for a course</p>
<p>2. Click on the course icon and you’ll be directed to the course landing page</p>
<p>3. The wishlist icon is located above the course details at the top right hand of the page</p>
<p>4. Click the Wishlist heart, and the course will be added to your wishlist</p>



<h4>How to Add a Course to Your Wishlist From Your Shopping Cart </h4>

<p>You can also add courses to your wishlist from the Shopping Cart, by following these steps:</p>

<p>1. Click on the Shopping Cart icon at the top right hand of the page</p>
<p>2. Click Move to Wishlist on the course icon</p>
<p>3. The course will be moved to the Recently Wishlisted Courses section below</p>
<p>When you decide you would like to enroll in the course, you can return it to your Shopping Cart by clicking on Move to Cart.</p>



<h4>Finding Your Wishlist</h4>

<p>You can quickly access your Wishlist by following the steps below</p>

<p>1. Click My Courses at the top right of the page</p>
<p>2. Click the Wishlist tab</p>
<p>3. All of the courses you have added to your Wishlist will appear on the page</p>



<h4>Remove Courses From Wishlist</h4>

<p>To remove a courses from the Wishlist, click the red heart located on the course card. The course will no longer be included.</p>
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
export default Addacourse;
