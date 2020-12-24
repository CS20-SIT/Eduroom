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

const KeepingYourAccountSecure = () => {
    const theme = createMuiTheme();
    return (
        <Fragment>
            <Grid container style={{ marginTop: "30px" }}>
                <Grid container>
                    <Typography style={{ marginLeft: "20px" }}>
                        {" "}
                        <h1>Keeping Your Account Secure</h1>
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
                                <p>Udemy has security protocols in place to help keep your account secure, but there are several things you can also do to protect your account, and dramatically reduce the likelihood of it being compromised.</p>
<h3>Create a Strong Password</h3>
<p>Choosing a strong and unique password is an extremely effective way to protect your account and prevent unauthorized access. While selecting a password for your account, we strongly recommend you consider the following:</p>
<ul> <li>Passwords must be at least 6 characters long. Remember that longer passwords are always better since they are harder to crack.</li>
<li>The best passwords are longer and contain a mix of letters, numbers, symbols (e.g. #, !, &), uppercase and lowercase letters.</li>
<li>Passwords should be unique to you and should not contain:</li></ul>
<ul> <li>Sequential letters or numbers (e.g. abcdefgh, 12345678)</li>
<li>Repeating letters or numbers (e.g. dddddddd, 88888888)</li>
<li>Words that are commonly used in the dictionary or across the internet</li>
<li>Words related to our site (e.g. “udemy”)</li>
<li>Your own name or email address, or words you might use on your social media accounts like your location or favorite team</li>
<li>Don’t use obvious numbers (for example, don’t use numbers that are in your birthday or phone number) </li></ul>
<li>Create a unique password for each account and service you have, rather than using the same password for each site, especially if there have been security breaches with those passwords. This way if one of your accounts is compromised, then that password cannot be used to gain access into your other accounts.</li>
<li>Rather than creating your own complex password, use a browser plug-in, system keychain, or third-party password manager to create and store complex passwords.</li>
<h3>Change Your Password Periodically</h3>
<p>We also recommend changing your password periodically, as this is another great way to keep your account secure. When you do change your password, we recommend creating a new one, rather than using a password you’ve already used.
For steps on how to change your account’s password, please click here.</p>
<h3>More Tips to Protect Your Account</h3>
<p>In addition to selecting a strong and unique password, there are several other simple ways you can protect your account, and greatly reduce the likelihood of it being compromised.
<ul> <li>If you’re accessing your Udemy account from a public or shared device, be sure to log out of your account when you’re finished studying. </li>
<li>Always log in at https://www.udemy.com/. Check the URL of the page before you enter your login info if you're unsure. In addition, you can also type https://www.udemy.com/ directly into your browser. </li>
<li>Do not write down or store your password in your files or online accounts. </li>
<li>Do not share your Udemy account or account credentials with others. </li>
<li>If a computer or mobile device you used to access your Udemy account is lost or stolen, use another device to initiate a password reset email. For steps on how to do this, please </li> </ul> </p>
                                    <p style={{ marginLeft: "630px", marginTop: "50px" }}>
                                        <Link href="/support/Account&Profile">Account / Profile
                  </Link>
                                    </p>
              </Typography>
                                
            </Paper>
          </Grid>

                        <Grid item xs={3}>
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
export default KeepingYourAccountSecure;
