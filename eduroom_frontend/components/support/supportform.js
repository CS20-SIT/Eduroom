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
} from "@material-ui/core";
import api from "../../api";
import GeneralNoNav from "../../components/template/generalnonav";

const SupportForm = () => {
  const [supportForm, setForm] = useState({
    name: "",
    username: "",
    email: "",
    title: "",
    content: "",
    priority: "",
    subCat: "",
    cat: "",
  });
  const [alert, setAlert] = useState({
    name: false,
    username: false,
    email: false,
    title: false,
    content: false,
    priority: false,
    cat: false,
    subCat: false,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...supportForm, [e.target.name]: e.target.value });
  };

  const Priority = [
    "Immediate: Fix Immediately",
    "Medium",
    "Low: Not in priority until updated",
  ];
  const Category = ["Account/Login Issues", "General", "Purchases", "etc."];
  const subCategory = {
    "Account/Login Issues": [
      "Changing display name",
      "Changing username",
      "Delete/Deactivate Account",
      "Email Issues",
      "Payout Suspension",
      "Reactivate Account",
      "Suspension",
      "Warning",
    ],
    General: [
      "Accessibility issue",
      "My Coin",
      "My Sticker",
      "Feedback",
      "Notifications issue",
    ],
    Purchases: [
      "Fraudulent / Unauthorized charges",
      "Course Purchase",
      "Sticker Purchase",
      "Discount Code",
    ],
    "etc.": ["Other Problem"],
  };
  const [subCat, setSubCat] = useState([]);
  const handleSelect = (e) => {
    setSubCat(subCategory[e.target.value] ?? []);
    setForm({ ...supportForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
      if (validator()) {
        api
          .post("/api/support", {
            name: supportForm.name,
            username: supportForm.username,
            email: supportForm.email,
            title: supportForm.title,
            content: supportForm.content,
            priority: supportForm.priority,
            cat: supportForm.cat,
            subCat: supportForm.subCat,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    
  };
//   const validateEmail = (e) => {
//     e.preventDefault();
//     const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
//     if (expression.test(String(e).toLowerCase())) {
//     }
//   };

  const validator = () => {
    let keys = Object.keys(supportForm);
    let temp = { ...alert };
    let check = true;
    for (let key of keys) {
      if (supportForm[key] == "") {
        temp[key] = true;
        check = false;
      } else {
        temp[key] = false;
      }
    }
    setAlert(temp);
    return check;
  };

  const useStyles = makeStyles((theme) => ({
    page: {
      marginTop: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(7, 0, 4),
      background: "#3D467F",
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
  }));
  const classes = useStyles();

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  return (
    <Fragment>
      <Head>
        <title>Submit Support Form</title>
      </Head>
      <Container component="main" xs={12}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.page}>
            <Typography component="h1" variant="h3">
              Submit a Request
            </Typography>
            <Paper className={classes.paper}>
              <form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Your Name</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="name"
                      fullWidth
                      autoFocus
                      type={"text"}
                      variant="outlined"
                      value={supportForm.name}
                      onChange={handleChange}
                      error={alert.name}
                    />
                    {alert.name ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        name is required
                      </span>
                    ) : null}
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1">Your Username</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="username"
                      fullWidth
                      autoFocus
                      variant="outlined"
                      type={"text"}
                      value={supportForm.username}
                      onChange={handleChange}
                      error={alert.username}
                    />
                    {alert.username ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        username is required
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1">
                      Your Email Address
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="email"
                      fullWidth
                      autoFocus
                      variant="outlined"
                      type={"email"}
                      value={supportForm.email}
                      onChange={handleChange}
                      error={alert.email}
                    />
                    {alert.email ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        email is required
                      </span>
                    ) : null}
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Category</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name={"cat"}
                      onChange={handleSelect}
                      defaultValue="default"
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem disabled value="default">
                        --None--
                      </MenuItem>
                      {Category.map((el) => {
                        return (
                          <MenuItem value={el} key={el}>
                            {el}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {alert.cat ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        category is required
                      </span>
                    ) : null}
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Sub Category</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name={"subCat"}
                      defaultValue="default"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                    >
                      <MenuItem disabled value="default">
                        --None--
                      </MenuItem>
                      {subCat.map((el) => {
                        return (
                          <MenuItem value={el} key={el}>
                            {el}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {alert.subCat ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        sub category is required
                      </span>
                    ) : null}
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1">Subject</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name={"title"}
                      type={"text"}
                      fullWidth
                      autoFocus
                      variant="outlined"
                      value={supportForm.title}
                      onChange={handleChange}
                      error={alert.title}
                    />
                    {alert.title ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        subject is required
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1">Content</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name={"content"}
                      type={"text"}
                      fullWidth
                      autoFocus
                      variant="outlined"
                      value={supportForm.content}
                      onChange={handleChange}
                      error={alert.content}
                      multiline
                      rows={12}
                    />
                    {alert.content ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        content is required
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1">Priority</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Select
                      name={"priority"}
                      defaultValue="default"
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem disabled value="default">
                        --None--
                      </MenuItem>
                      {Priority.map((el) => {
                        return (
                          <MenuItem value={el} key={el}>
                            {el}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {alert.priority ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        priority is required
                      </span>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={2} sm={2} alignItems="center">
                    <Button
                      style={{ width: "150px", height: "40px" }}
                      fullWidth
                      variant="contained"
                      color={"primary"}
                      onClick={handleSubmit}
                      className={classes.submit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </div>
        </ThemeProvider>
      </Container>
    </Fragment>
  );
};

export default SupportForm;
