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

const UnsubscribeFromEduroomorInstructorNotifications = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Unsubscribe From Eduroom or Instructor Notifications</h1>
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
                                <p>If you no longer wish to receive certain notifications from Udemy and instructors, you can unsubscribe from them by changing your notification settings.</p>
<p>You can edit the notification settings for your account by following the steps below:</p>
<ol> <li>Move your cursor to your initials or profile image at the top right of the page.</li>
 <li>Click Account Settings in the dropdown menu and then Notifications on the left hand-side of the page.</li>
 <li>Select the notifications you wish to receive. If you don't wish to receive any promotional emails, however, then click on the box beside Don't send me any promotional emails.</li>
 <li>Click Save.</li></ol>
                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Instructor-Payment">Instuctor Payment
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

          <Grid item xs={3}>
            
            
            <div style={{  marginBottom: theme.spacing(3) }}>
              <Studentnav />
             
            </div>

            <Button variant='contained' style={{backgroundColor:'#FB9CCB', marginBottom:theme.spacing(10),marginLeft:theme.spacing(8.5),marginTop:theme.spacing(1)}} href="/support/create"><label style={{color:'#ffffff'}}>CONTACT US</label></Button>

          </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default UnsubscribeFromEduroomorInstructorNotifications;
