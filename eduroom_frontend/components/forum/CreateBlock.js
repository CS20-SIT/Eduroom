import React, { Fragment, useEffect, useState } from "react";
import {
  Grid,
  Button,
  Container,
  Typography,
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  Select,
  Paper,
  MenuItem,
} from "@material-ui/core";
import GeneralNoNav from "../../components/template/generalnonav";
import TextField from "@material-ui/core/TextField";
import api from "../../api";
import Link from "next/link";

const CreateBlock = () => {
  const [createForm, setForm] = useState({
    title: "",
    cat: "",
    subcat: "",
    content: "",
  });
  const [alert, setAlert] = useState({
    title: false,
    cat: false,
    subcat: false,
    content: false,
  });
  useEffect(() => {
    console.log("render");
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...createForm, [e.target.name]: e.target.value });
  };
  const Category = ["Math", "Science", "Language", "etc."];
  const subCategory = {
    Math: [
      "Real Number",
      "Statistic",
      "Possibility",
      "Polynomial",
      "Exponential",
      "Calculus",
    ],
    Science: ["Physic", "Bio", "Chemistry"],
    Language: ["English", "Chinese", "French", "German"],
    "etc.": ["Other category"],
  };
  const [subCat, setSubCat] = useState([]);
  const handleSelect = (e) => {
    if (e.target.name == "cat") {
      setSubCat(subCategory[e.target.value] ?? []);
    }
    setForm({ ...createForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      console.log(createForm);
      api.post("/api/forum/create", createForm).then((res) => {
        setForm({
          title: "",
          cat: "",
          subcat: "",
          content: "",
        });
        
      });
    } else {
      console.log("This form is not valid");
    }
  };
  const validator = () => {
    let keys = Object.keys(createForm);
    let temp = { ...alert };
    let check = true;
    for (let key of keys) {
      if (createForm[key] == "") {
        temp[key] = true;
        check = false;
        console.log(key);
      } else {
        temp[key] = false;
      }
    }
    setAlert(temp);
    return check;
  };
  const useStyles = makeStyles((theme) => ({
    page: {
      display: "flex",
      flexDirection: "column",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
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
      <Container component="main" xs={12}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.page}>
            <Paper>
              <form className={classes.form}>
                <Grid container spacing={2} id="form">
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="title"
                      fullWidth
                      autoFocus
                      type={"text"}
                      variant="outlined"
                      value={createForm.title}
                      onChange={handleChange}
                      label="Title of question"
                      error={alert.title}
                      style={{backgroundColor: "#EFF0F6"}}
                    />
                    {alert.title ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        title is required
                      </span>
                    ) : null}
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="content"
                      fullWidth
                      autoFocus
                      variant="outlined"
                      type={"text"}
                      value={createForm.content}
                      onChange={handleChange}
                      error={alert.content}
                      multiline
                      rows={10}
                      label="Content"
                      style={{backgroundColor: "#EFF0F6"}}
                    />
                    {alert.content ? (
                      <span style={{ color: "red", fontSize: "0.8em" }}>
                        content is required
                      </span>
                    ) : null}
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name={"cat"}
                      onChange={handleSelect}
                      defaultValue="default"
                      fullWidth
                      placeholder="category"
                      variant="outlined"
                      style={{backgroundColor: "#EFF0F6"}}
                    >
                      <MenuItem disabled value="default">
                        --Category--
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
                    <Select
                      name={"subcat"}
                      defaultValue="default"
                      fullWidth
                      variant="outlined"
                      placeholder="Subcategory"
                      onChange={handleChange}
                      style={{backgroundColor: "#EFF0F6",border:'none'}}
                    >
                      <MenuItem disabled value="default">
                        --Subcategory--
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
                        Subcategory is required
                      </span>
                    ) : null}
                  </Grid>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item xs={2} sm={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color={"primary"}
                        onClick={handleSubmit}
                        className={classes.submit}
                        style={{borderRadius:'23px'}}
                      >
                        < Link href="/forum">
                        Submit
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </div>
        </ThemeProvider>
      </Container>
      <style>
        {`
         #form {
             padding:2% 20% 2% 20%;
             borderRadius:'30px'
            }
            `}
      </style>
    </Fragment>
  );
};

export default CreateBlock;
