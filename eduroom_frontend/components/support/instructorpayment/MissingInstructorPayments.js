
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

const MissingInstructorPayments = () => {
  const theme = createMuiTheme();
  return (
    <Fragment>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid container>
          <Typography style={{ marginLeft: "20px" }}>
            {" "}
            <h1>Missing Instructor Payments</h1>
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
                <p>Udemy pays instructors 30 days after the end of the month. For example, if a student purchases your course at any time in August, you will receive a payment within the first ten days of October. This delay allows all purchases to pass the 30 day refund period.
Take a look at your revenue report to confirm that a payment is past due.</p>
<h3>My Payment is Due and I Haven't Received Anything</h3>
<p>If your revenue report is showing that you should have received a payment, but you haven't received it, please check the following:
On your Payout Settings page, check to see that your PayPal or Payoneer account is listed as Active and can receive payments. For information on how to set up your payment method, please click here.
Check that your PayPal or Payoneer account is verified to receive payments.
Contact PayPal or Payoneer to see if there are any issues with your account.</p>
<p>If you're still having trouble please contact our support team. Please be sure to mention the monthly payments that you haven't received.</p>

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
export default MissingInstructorPayments;
