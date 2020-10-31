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
  MenuItem
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import api from "../../api";

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
    if (validator()) {
      console.log(createForm);
      api.post("/api/forum/create", createForm).then((res) => {
        console.log(res);
        router.push("/forum");
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
      } else {
        temp[key] = false;
      }
    }
    setAlert(temp);
    return check;
  }
  const useStyles = makeStyles((theme) => ({
    page: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: '#3D467F',
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
      fontFamily: 'Quicksand',
    },
  })
  return (
    <Fragment>
      <Container component="main" xs={12}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.page}>
            <Paper className={classes.paper}>
              <form className={classes.form}>
                <Grid container spacing={2}>
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
                      placeholder='category'
                      variant="outlined"
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
                      name={"subCat"}
                      defaultValue="default"
                      fullWidth
                      variant="outlined"
                      placeholder='Subcategory'
                      onChange={handleChange}
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
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color={"primary"}
                    onClick={handleSubmit}
                    className={classes.submit}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Paper>
          </div>
        </ThemeProvider>
      </Container>
    </Fragment>
  );
};

export default CreateBlock;
