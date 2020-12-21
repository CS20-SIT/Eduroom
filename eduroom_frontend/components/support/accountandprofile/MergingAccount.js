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

const HowDoesEduroomdo = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Merging Accounts&nbsp;</h1>
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
                                <p>If you've accidentally created two Udemy accounts, we can merge them together for you. In the process, your course progress and purchase history will be transferred. Please note, however, that private messages and notes will not be transferred. Be sure to save any important information you wish to keep before proceeding with the process.</p>
<p>Please note that merges are permanent and cannot be reversed, and that they are limited to one per user.</p>
<p>In order to merge your accounts, we will need to verify that you are the account holder of both accounts. Please initiate the merge account process by submitting a support ticket here.</p>
<p>Please note: Udemy for Business accounts and Udemy marketplace accounts are treated separately and cannot be merged. In addition, instructor accounts cannot be merged at this time. Since instructor accounts have unique revenue reports and additional data that's been generated, merging this information with another account cannot be facilitated.</p>

                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Instructor-Payment">Instuctor Payment
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                            <h3>Other articles</h3>

                            <div style={{  marginBottom: theme.spacing(3) }}>
                                <Studentnav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default HowDoesEduroomdo;
