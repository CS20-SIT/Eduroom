


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

const WhyCantISendmyEducationalAnnouncementorPromotionalEmail = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Why Can't I Send my Educational Announcement or Promotional Email?</h1>
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

                                <p>If you're encountering issues or warning notifications while you're attempting to send an educational announcement or promotional email, then these troubleshooting steps should help. In addition, this article includes steps you can take to help avoid formatting and delivery errors.</p>
<h3>Troubleshooting Educational Announcement And Promotional Email Delivery Issues</h3>
<h4>Restricted Links</h4>
<p>If you're encountering a warning notification regarding links, please note that external links are not permitted in promotional emails, and Udemy course links cannot be sent in educational announcements. Please remove these links and try again.</p>
<h4>False External Link Warnings</h4>
<p>If you don't have any external links, the educational announcement and promotional email editor may be mistaking a string of text with a period in the middle as a link. Removing any unnecessary punctuation, and ensuring there's a space after every period, may resolve this. For example, the text "Here's a great deal.My course is only $15." could trigger the external link warning, because of "deal.My". </p>

<p>Occasionally false warnings for links can also occur when a promotional email or announcement is copied and pasted from another source (Microsoft Word, Google Doc, etc.). We recommend instructors compose the notification using the text editor, as embedded formatting may cause unexpected issues. Pasting the copy into the text editor tool with no formatting intact may also resolve the issue.</p>
<h4>Sending Promotional Emails to Free Courses</h4>
<p>Ensure that you are not attempting to send a promotional email to any free courses you're teaching. Promotional emails are not permitted to be sent to free courses.</p>

<p>If you continue to encounter issues sending your notification, please contact our support team and include its text, and any images you're including, so we can troubleshoot the issue further. Sending a screenshot of the error sign you're seeing will also help our support team.</p>
<h4>The Course Has Been Changed From “Free” to “Paid” Too Many Times</h4>
<p>Instructors are always free to change their courses from free to paid or paid to free. Once a course is published our system starts tracking "free to paid" switches, and if more than one "free to paid" switch is made the ability to send promotional emails to this course is disabled. Here are a few scenarios, and their implications for promotional emails:
1- Publish a course as free, and switch the course to paid - promotional emails not affected
2- Publish a course as paid, switch to free, switch to paid, switch it to free, switch it back to paid - promotional emails disabled
3- Publish as free, switch to paid, switch to free, switch paid - promotional emails disabled
The amount of changes is different in these scenarios, but if you look closely, you can see that in both cases where promotional emails are disabled, the published course changes from free to paid twice.</p>
<h3>Are You Listed as a Visible Instructor?</h3>
<p>In order to send a promotional email oreducational announcement, you must be listed as a visible instructor for the course. If you're not listed as a visible instructor, then the Create icon will not be active on the Communications page.</p>
<h3>Attempting to Send Emojis in Your Message</h3>
<p>The educational announcement and promotional email text editor does not support emojis, so do not include emojis in your message. Doing so will cause formatting and delivery errors.</p>
<h3>Formatting Issues in Sent Messages</h3>
<p>As noted above, we recommend creating your message in the announcement and promotional email text editor, rather than copying and pasting in your message, to help avoid unexpected formatting issues. </p>

                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Selling&Promotion">Selling & Promotion
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
                        <div style={{  marginBottom: theme.spacing(3) }}>
                                <Instructornav />

                            </div>

                            <Button variant='contained' style={{ backgroundColor: '#FB9CCB', marginBottom: theme.spacing(10), marginLeft: theme.spacing(8.5), marginTop: theme.spacing(1) }} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>

                        </Grid>
                    </Grid>
                </Grid>
    </Fragment>
  );
};
export default WhyCantISendmyEducationalAnnouncementorPromotionalEmail;
