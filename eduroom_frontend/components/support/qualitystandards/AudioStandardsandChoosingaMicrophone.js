

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

const AudioStandardsandChoosingaMicrophone = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Audio Standards and Choosing a Microphone</h1>
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

                                <h3>What are Udemy’s minimum standards regarding audio?</h3>
<p>In order to publish your course, each of your course videos must contain an audio track that plays from both speakers (left and right channels). Additionally, Udemy requires that the quality of audio is not distracting students. Text to speech software is not allowed; students want to hear directly from you as an instructor to build trust.</p>
<p>You can read more about our requirements and recommendations for good audio in our Course Quality Checklist linked here. For additional tips from Udemy about recording great audio for your course please check out this resource. </p> 
<h3>What microphone should I use to record my course?</h3>
<p>Most microphones are capable of producing audio that meets Udemy’s minimum standards. Listed below are some common microphones that Udemy instructors have used to produce their courses:</p>
<li>Blue Yeti</li>
<li>Blue Snowball</li>
<li>Samson Go Mic</li>
<li>Sony ECM CS3 (lapel mic)</li>
<p>Please note that it’s not required that you use these microphones. There are many other options that will produce audio that’s acceptable for your Udemy course. If you have any question about whether your equipment will suffice, Udemy is happy to review a <strong>Test Video </strong>from you, which you can submit before you start filming the content of your course (read more here).</p>
<h3>What are Udemy’s recommended audio settings when recording/exporting files?</h3>
<p>When exporting video files in your video editing software, Udemy recommends that you select MP3 or AAC as your audio codec. Our video upload process supports many audio codecs, but selecting MP3 or AAC provides the most seamless upload experience.</p>

                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                    <Link href="/support/Selling&Promotion">Selling & Promotion
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                        <div style={{ marginBottom: theme.spacing(3) }}>
                                <Instructornav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default AudioStandardsandChoosingaMicrophone;
