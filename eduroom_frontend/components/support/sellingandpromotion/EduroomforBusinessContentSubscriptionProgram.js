

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

const EduroomforBusinessContentSubscriptionProgram = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Eduroom for Business Content Subscription Program</h1>
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

                                <p>Udemy for Business is Udemy’s B2B (business to business) learning solution. The Udemy for Business program empowers organizations to address their biggest workforce challenges, by engaging employees in skills training and development using Udemy courses. To read more about many of the companies that leverage Udemy for Business for their learning needs, please click here.</p>
<p>Udemy for Business offers a subscription package of over 5,000 Udemy courses; chosen for their quality and relevance to a business audience. Instructors included in Udemy for Business benefit from unique brand visibility in front of a new business audience, and also gain an additional revenue stream.</p>
<p>For more information on Udemy for Business, and how you can enroll in the program, please read below.</p>
<h3>How can Instructors get Involved With Udemy for Business?</h3>
<p>Opt-In: Make sure you’re opted into the Udemy for Business Content Subscription marketing program, so that your courses are eligible for inclusion. You can enroll in the program on your promotional agreements page.</p>
<p>Please note: as a means to highlight the uniquely valuable collection of courses on Udemy for Business and to reach a wider business audience, any content that is available on Udemy for Business must be hosted exclusively on Udemy while it’s in the Udemy for Business content collection. This policy does not apply to any content you’ve made available on your own websites or to any separate offerings like in-person trainings, books, etc. You can mark a single course as in violation of the exclusivity terms and ineligible for inclusion in the Udemy for Business content collection, by filling out the eligibility form found in your course settings.</p>
<p>For more information, see Section 2.4 of the Promotions Policy.</p>
<h3>How Does Udemy for Business Decide Which Courses are Selected for the Program?</h3>
<p>Udemy for Business uses a number of criteria to determine which courses are add to the collection. First, instructors must be opted into the Udemy for Business program in order for their courses to be considered. Next, Udemy for Business sees a lot of value in using the power of the marketplace to assist with course selection. Accordingly, one of the primary ways the Udemy for Business team chooses courses is based on student feedback, which is measured through recent course ratings. They then select the highest rated courses for the collection.</p>
<p>For more information on student reviews, and how to manage student feedback, please click here.</p>
<p>The Udemy for Business team also considers factors such as the course content’s demand with Udemy for Business customers, and their overall content strategy.</p>
<h3>How Does the Revenue Share Work for the Udemy for Business Program? And How is it Reported on Instructor Revenue Reports?</h3>
<p>For detailed information on how instructors are paid for their inclusion in the Udemy for Business Collection please click here.</p>
<p>Instructor revenue from the Udemy for Business program is added to the revenue report differently than other purchases. Udemy for Business revenue is added in the first week of the following month under the Udemy for Business tab on your revenue report. For example, your Udemy for Business revenue for the month of January, would appear in your January revenue report during the first week of February. </p>
<p>For sales inquiries, please complete this form.</p>

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
export default EduroomforBusinessContentSubscriptionProgram;
