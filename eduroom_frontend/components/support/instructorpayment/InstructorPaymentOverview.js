

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

const InstructorPaymentOverview = () => {
  const theme = createMuiTheme();
  return (
    <Fragment>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid container>
          <Typography style={{ marginLeft: "20px" }}>
            {" "}
            <h1>Instructor Payment Overview</h1>
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
                <p>All Udemy instructors are contracted with the U.S.-based Udemy, Inc. Udemy pays instructors through PayPal and Payoneer. For more information on setting up your payment method, please refer to this article.</p>
<h3>Instructor Payments Flow</h3>
<p>1.As an instructor, a contract is signed with U.S.-based Udemy, Inc.</p>
<p>2.The course is published on udemy.com</p>
<p>3.In the first month, a student purchases your course(s). Student fees are transferred to Udemy</p>
<p>4.Months 1 & 2: Udemy, Inc. processes refunds, etc.</p>
<p>5.Month 3: Udemy pays instructor [(total Month 1 student payments –  total refunds) x % revenue share]</p>
<p>6.All payments to instructors are from U.S.-based Udemy, Inc.</p>
<p>7.As an instructor, you are free to publish as many free and paid courses as you like.  We believe in a sustainable partnership, in which instructors are rewarded for creating amazing content and bringing students to the platform, and Udemy is rewarded for driving traffic to all our instructors.</p>
<p>You can view expected payment dates and the payment amount for a specific month on your Revenue Report. To see a more detailed sales report for a specific month, simply click on the month in the Time Period column. </p>
                <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                  <Link href="/support/Instructor-Payment">Instuctor Payment
                  </Link>
                </p>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            
            
            <div style={{  marginBottom: theme.spacing(3) }}>
            <Instructornav />
             
            </div>

            <Button variant='contained' style={{backgroundColor:'#FB9CCB', marginBottom:theme.spacing(10),marginLeft:theme.spacing(8.5),marginTop:theme.spacing(1)}} href="/support/create"><label style={{color:'#ffffff'}}>CONTACT US</label></Button>

          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default InstructorPaymentOverview;
