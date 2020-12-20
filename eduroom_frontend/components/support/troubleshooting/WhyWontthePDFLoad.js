
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

const WhyWontthePDFLoad = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Why Won't the PDF Load?</h1>
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
                                
                                <p>Sometimes, a PDF document will take a while time to load. From the course dashboard, check how many pages is included in the document. If the document has multiple pages it's likely that the large file size is impacting the load time. Try refreshing the page to fix the issue.</p>
<h3>The PDF is Loading as a Grey Screen</h3>
<ol> <li>Right-click on the grey rectangle..</li>
<li>Click Save As... to download the PDF to your computer..</li>
<li>Manually mark the lecture as complete.</li></ol> 
                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Troubleshooting">Troubleshooting
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                            <h3>Other articles</h3>

                            <p>
                                <Link href="/support/getstart/Course-Instructors-and-Teaching-Assistants">
                                    Course Instructors and Teaching Assistantsd
              </Link>
                            </p>
                            <p>Add a Course to Your Wishlist</p>
                            <p>System Requirements</p>
                            <p>How to Preview And Compare Courses</p>
                            <div style={{ marginTop: theme.spacing(7), marginBottom: theme.spacing(3) }}>
                                <Studentnav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default WhyWontthePDFLoad;
