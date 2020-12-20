



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

const HowtoSearchforCoursesonEduroom = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>How to Search for Courses on Eduroom</h1>
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
                                <p>Udemy has an extensive, multi-language library, which includes over 130,000 courses that have been created by expert instructors. The courses range across a wide range of categories, some of these include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music, technology, games, and much more.  </p>
<p>This article outlines how you can search Udemy’s ever-growing library, and find courses you’re interested in taking.</p>
<h3>Using the Marketplace Search Tool</h3>
<p>You can quickly search for courses by using the search tool, which is located at the top of the Udemy marketplace page beside the Categories menu. You can also access the search tool on your My Courses page.</p>
<p>Search results can be created by entering words related to the course and or subject into the search tool, and then clicking enter.</p>

<h3>Searching by Category</h3>
<p>You can also search for courses by category. Simply move your cursor to the Categories icon at the top, and then select the category and or subcategory you wish to view.</p>
<h3>Using the Search Tool Filters</h3>
<p>There are multiple, different filters you can use to narrow your search. Some of the filters include level, language, features, ratings, duration, newest and subtitles, among others. You can access the filters on the left-hand side of the page.</p>
<p>Once you’ve located a course you’re interested in, you can see if the course is right for you by starting a free preview and watching a handful of lectures the instructor has selected. For more information on how to do this, please click here.</p>
<p>In addition, once you find a course you’re interested in, you can quickly let your friends, relatives or co-workers know about it by using the social media links on the course landing page.</p>
                                                                                                                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                                                    <Link href="/support/Purchase-Refunds">Purchase/Refunds  
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
export default HowtoSearchforCoursesonEduroom;
