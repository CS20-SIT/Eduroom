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

const HowDoesEduroomdo = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>How Does Udemy Handle VAT / GST?</h1>
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

                                <p>The VAT (Value Added Tax) and GST (Goods & Services Tax) is a form of consumption tax on goods and services. The Japanese Consumption Tax in Japan is a type of VAT. VAT / GST rates and regulations vary across geographies.</p>
                                <p>Udemy currently handles VAT / GST for all purchases made on the website by students as applicable based on local tax rules. In countries where VAT / GST applies, Udemy displays course prices as “tax-inclusive” and Students in these countries will see the tax-inclusive price as a single total, just as they would for other goods and services sold in their countries. Students will receive an email receipt which breaks down the course price excluding tax and VAT / GST separately.</p>
                                <h3>VAT / GST on Mobile</h3>
                                <p>Apple and Google, who run the App Store and Google Play stores, respectively, handle all purchases on the mobile platform and will handle VAT / GST.</p>

                                <p>If you have any further questions, please feel free to <Link href="/support/create">contact our support team.</Link></p>


                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Instructor-Payment">Instuctor Payment
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
export default HowDoesEduroomdo;
