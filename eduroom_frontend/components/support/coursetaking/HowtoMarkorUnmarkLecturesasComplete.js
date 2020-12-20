

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

const HowtoMarkorUnmarkLecturesasComplete = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>How to Mark or Unmark Lectures as Complete</h1>
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
                                <p>Lectures will be automatically marked as complete once you have watched every minute of the lecture, but, if you need to manually mark the lecture as complete, you can easily do so.</p>
<p>To learn how to mark or unmark a lecture as complete, please read below.</p>
<h3>Lectures Marked as Complete</h3>
<p>Lectures that have been completed will have a checkmark beside the lecture title in the course player. If the square is blank, however, then the lecture is not marked as complete.</p>
<h3>How to Mark a Lecture as Complete</h3>
<p>You can mark a lecture as complete by following the steps below:</p>
<ol> <li>Move your cursor to the course curriculum in the right hand side of the course player.</li>
<li>Click on the lecture you wish to mark as complete.</li>
<li>Click the blank square beside the lecture.</li></ol>

<h3>Unmarking Lectures as Complete</h3>
<p>If you mark a lecture as complete by accident, or decide you wish to take a lecture again and want its completion reset, then you can mark the lecture as incomplete. To do so, please follow the same steps outlined above, except in this case, you'll need to click on the completed checkmark to remove it.
Please note that assignments cannot be unmarked as complete.</p>
                                                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                                                    <Link href="/support/Course-Taking">Course Taking   
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
export default HowtoMarkorUnmarkLecturesasComplete;
