
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

const RequestingaW9ForYourCoursePurchase = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Requesting a W-9 For Your Course Purchase</h1>
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
                                <p>If you purchased a course or courses on behalf of a company you work for, and would like to get a copy of Udemy's W-9, you can download our W-9 by clicking here. But, please keep in mind that Udemy is an incorporated business and accordingly exempt from 1099s.</p>
<p>Also please note that when you purchase a course on our marketplace, you are getting a personal license to courses. For a business license, please use our Udemy for Business product here: https://business.udemy.com/.</p>
                                                                                                                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                                                    <Link href="/support/Purchase-Refunds">Purchase/Refunds  
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                        <div style={{ marginBottom: theme.spacing(3) }}>
                                <Studentnav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default RequestingaW9ForYourCoursePurchase;
