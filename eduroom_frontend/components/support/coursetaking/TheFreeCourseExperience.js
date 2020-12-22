


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

const TheFreeCourseExperience = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>The Free Course Experience</h1>
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
                                <p>Free courses on Udemy offer students a simplified learning experience. This simplified experience limits the features that are available in a free course compared to a paid course. For example, free courses do not offer a certificate of completion, and additional course features like the Q&A and direct messaging are not included in free course enrollments.</p>
<p>All of these features are available in our paid course offerings. If you want access to these additional features, we recommend enrolling in a paid course (note: students who enroll in paid courses via promotional coupons, our gifting option or Udemy credits will also have access to all the course features).</p>
<p>If you have enrolled in a free course prior to March 17, 2020 you will retain access to Q&A and your certificate of completion for those free courses only. All new enrollments in free courses on March 17, 2020 and beyond, will not have access to the additional features.</p>
                                                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Course-Taking">Course Taking
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
export default TheFreeCourseExperience;
