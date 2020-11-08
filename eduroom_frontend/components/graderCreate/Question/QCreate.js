import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const CustomAutocomplete = withStyles({
  input: {
    marginTop: 7,

    color: "#5b5b5b",
    fontFamily: "Quicksand , sans-serif",
    "font-size": "1.2em",
  },
  tag: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "white",
    height: 25,
    position: "relative",
    zIndex: 0,
    border: "2px solid #a880f7",
    "& .MuiChip-label": {
      color: "#3d467f",
      fontFamily: "Quicksand , sans-serif",

      "font-size": "1.2em",
      "font-weight": "bold",
    },
    "& .MuiChip-deleteIcon": {
      color: "#FC8FC3",
      height: 12,
      width: 12,
      opacity: 0.8,
    },

    //
    "&:after": {
      content: '""',
      right: 10,
      top: 6,
      height: 6,
      width: 6,
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      zIndex: -1,
    },
    // .MuiAutocomplete-inputFocused
  },
})(Autocomplete);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "75%",
    marginLeft: "12%",
    marginRight: "15%",
    marginTop: "2.5%",
    marginBottom: "10%",
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    // padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuitem: {
    "&.Mui-selected": {
      "font-family": "Quicksand , sans-serif",
      color: "#3d467f",
      "font-size": "1.2em",
      "font-weight": "bold",
    },
  },
  select: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      fontFamily: "Quicksand , sans-serif",
      color: "#3d467f",
      "font-size": "1.2em",
      "font-weight": "bold",
    },
    error1: {
      "font-family": "Quicksand , sans-serif",
      color: "#5b5b5b",
      "font-size": "1.2em",
    },
  },
}));
const theme1 = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "rgba(0, 0, 0, 0.0)",
        },
      },
    },
  },
});
export default function FullWidthGrid() {
  const [existTags, setExistTags] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const result = await axios("http://localhost:5000/api/grader/alltag");
      setExistTags(result.data);
    };
    GetData();
  }, []);

  const sInputfield = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1.2em",
  };
  const sInputTag = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1.2em",
  };
  const sInput = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-weight": "bold",
    "font-size": "1.2em",
  };
  const sInputfieldDesc = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1.2em",
    paddingTop: 12,
  };
  const sInputSelect = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1.2em",
  };
  const sError = {
    "font-family": "Quicksand , sans-serif",
    color: "white",
    "font-size": "1em",
  };
  const sInputfieldSelect = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-size": "1.4em",
    "font-weight": "bold",
  };
  const sBigTitle = {
    fontFamily: "Quicksand , sans-serif",
    "font-size": "2em",
    color: "#3d467f",
    fontWeight: "bold",
  };

  const rules = [
    {
      value: "oi",
      label: "OI",
    },
    {
      value: "acm",
      label: "ACM",
    },
  ];
  const visibles = [
    {
      value: true,
      label: "ON",
    },
    {
      value: false,
      label: "OFF",
    },
  ];
  const timelims = [
    {
      value: 250,
      label: "250",
    },
    {
      value: 500,
      label: "500",
    },
    {
      value: 750,
      label: "750",
    },
    {
      value: 1000,
      label: "1000",
    },
    {
      value: 5000,
      label: "5000",
    },
  ];
  const memlims = [
    {
      value: 256,
      label: "256",
    },
    {
      value: 512,
      label: "512",
    },
    {
      value: 1024,
      label: "1024",
    },
    {
      value: 2048,
      label: "2048",
    },
    {
      value: 4096,
      label: "4096",
    },
  ];
  const diffs = [
    {
      value: "easy",
      label: "Easy",
    },
    {
      value: "medium",
      label: "Medium",
    },
    {
      value: "hard",
      label: "Hard",
    },
    {
      value: "very hard",
      label: "Very Hard",
    },
    {
      value: "impossible",
      label: "Impossible",
    },
  ];

  const classes = useStyles();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [inputdesc, setInputdesc] = useState("");
  const [outputdesc, setOutputdesc] = useState("");
  const [rule, setRule] = React.useState("oi");
  const [visible, setvisible] = React.useState(false);
  const [memory, setMemory] = useState(256);
  const [time, setTime] = useState(1000);
  const [check, setCheck] = useState(false);
  const [erorvalid, seterorValid] = React.useState(false);
  const [hint, setHint] = useState("");
  const [difficulty, setDiff] = useState("easy");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    seterorValid(false);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
    setCheck(true);
  };
  const handleHint = (event) => {
    setHint(event.target.value);
  };
  const handleDesc = (event) => {
    setDescription(event.target.value);
  };
  const handleInputDesc = (event) => {
    setInputdesc(event.target.value);
  };
  const handleOutputDesc = (event) => {
    setOutputdesc(event.target.value);
  };
  const handleDiff = (event) => {
    setDiff(event.target.value);
  };
  const handleChangeRule = (event) => {
    setRule(event.target.value);
  };
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  const handleChangeMem = (event) => {
    setMemory(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setvisible(event.target.value);
  };

  const handleSubmit = () => {
    if (title == "") {
      seterorValid(true);
    } else {
      let newtags = tags.filter((t) => {
        return typeof t === "string";
      });

      let qexisttags = tags.filter((t) => {
        return typeof t !== "string";
      });
      qexisttags = qexisttags.map((t) => {
        return t.tagid;
      });

      const pnewTags = [...new Set(newtags)];
      console.log(pnewTags);
      const pqexistTags = [...new Set(qexisttags)];
      console.log(pqexistTags);

      axios
        .post("http://localhost:5000/api/grader/cquestion", {
          title: title,
          ruleType: rule,
          description: description,
          hint: hint,
          timeLimit: time,
          memoryLimit: memory,
          visibility: visible,
          adminid: "12345678-1234-1234-1234-123456789123",
          intputDes: inputdesc,
          outputDes: outputdesc,
          difficulty: difficulty,
          newTags: pnewTags,
          existTags: pqexistTags,
        })
        .then(function (response) {
          console.log(response.data.id);

          // setOpen(false);
        });
    }

    //     setTimeout(() => {
    //       console.log('this is when we call prop on sucess')
    //       setSubmitStatus({ ...submitStatus, success: true });
    //     }, 450);
    //   })
    //   .catch(function (error) {
    //     setOpen(false);
    //     setTimeout(() => {
    //       setSubmitStatus({ ...submitStatus, failed: true });
    //     }, 450);
    //   })
  };
  // so when send -> post the new tags into tagTable  first then post in Question Tag
  const [tags, setTags] = React.useState([]);
  const handleKeyDown = (event) => {
    switch (event.key) {
      case ",":
      case " ": {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.value.length > 0) {
          setTags([...tags, event.target.value]);
          console.log(tags);
        }
        break;
      }
      default:
    }
  };
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme1}>
        <Snackbar
          open={erorvalid}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert style={sError} onClose={handleClose} severity="error">
            Invalid Information detected, Please Review your submission !
          </Alert>
        </Snackbar>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <span style={sBigTitle}>Create your Question</span>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              <Paper className={classes.paper}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Title"
                  type="text"
                  fullWidth
                  value={title}
                  onChange={handleTitle}
                  required
                  inputProps={{ maxLength: 50, style: sInputfield }}
                  InputLabelProps={{ style: sInput }}
                  error={title == "" && check}
                  helperText={title == "" && check ? "Title is Empty!" : ""}
                />
              </Paper>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              {" "}
              <div>
                {" "}
                <Paper className={classes.paper}>
                  <TextField
                    autoFocus
                    multiline
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    fullWidth
                    rows={15}
                    value={description}
                    onChange={handleDesc}
                    inputProps={{ maxLength: 1000, style: sInputfieldDesc }}
                    InputLabelProps={{ style: sInput }}
                  />
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Paper className={classes.paper}>
                <TextField
                  autoFocus
                  multiline
                  margin="dense"
                  label="Input Description"
                  type="text"
                  fullWidth
                  rows={5}
                  value={inputdesc}
                  onChange={handleInputDesc}
                  inputProps={{ maxLength: 1000, style: sInputfieldDesc }}
                  InputLabelProps={{ style: sInput }}
                />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Paper className={classes.paper}>
                <TextField
                  autoFocus
                  multiline
                  margin="dense"
                  label="Output Description"
                  type="text"
                  fullWidth
                  rows={5}
                  value={outputdesc}
                  onChange={handleOutputDesc}
                  inputProps={{ maxLength: 1000, style: sInputfieldDesc }}
                  InputLabelProps={{ style: sInput }}
                />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Paper className={classes.paper2}>
                <TextField
                  fullWidth
                  select
                  required
                  label="Time  Limit (MS)"
                  value={time}
                  onChange={handleChangeTime}
                  // inputProps={{style:sInputfieldSelect }}
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {timelims.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
                    </MenuItem>
                  ))}
                </TextField>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Paper className={classes.paper2}>
                {" "}
                <TextField
                  fullWidth
                  select
                  required
                  label="Memory  Limit (MB)"
                  value={memory}
                  onChange={handleChangeMem}
                  // inputProps={{style:sInputfieldSelect }}
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {memlims.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
                    </MenuItem>
                  ))}
                </TextField>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Paper className={classes.paper2}>
                <TextField
                  fullWidth
                  select
                  required
                  label="Difficulty"
                  value={difficulty}
                  onChange={handleDiff}
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {diffs.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
                    </MenuItem>
                  ))}
                </TextField>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper2}>
              <div>
                <TextField
                  fullWidth
                  select
                  required
                  label="Rule"
                  value={rule}
                  onChange={handleChangeRule}
                  // inputProps={{style:sInputfieldSelect }}
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {rules.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
                    </MenuItem>
                  ))}
                </TextField>
              </div>{" "}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper2}>
              <div>
                <TextField
                  fullWidth
                  select
                  required
                  label="Visibility"
                  value={visible}
                  onChange={handleChangeStatus}
                  // inputProps={{style:sInputfieldSelect }}
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {visibles.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
                    </MenuItem>
                  ))}
                </TextField>
              </div>{" "}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextField
                autoFocus
                margin="dense"
                label="Hint"
                type="text"
                fullWidth
                multiline
                value={hint}
                onChange={handleHint}
                inputProps={{ maxLength: 1000, style: sInputfield }}
                InputLabelProps={{ style: sInput }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <CustomAutocomplete
                  multiple
                  freeSolo
                  id="tags-outlined"
                  options={existTags}
                  getOptionLabel={(option) => option.tagname || option}
                  value={tags}
                  onChange={(event, newValue) => setTags(newValue)}
                  filterSelectedOptions
                  renderInput={(params) => {
                    params.inputProps.onKeyDown = handleKeyDown;
                    return (
                      <TextField
                        {...params}
                        label="Question Tags"
                        placeholder="Add Tag"
                        margin="normal"
                        InputLabelProps={{ style: sInput }}
                      />
                    );
                  }}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: 20 }}></div>
          </Grid>
          <Grid item xs={12}>
            <center>
              <div>
                {" "}
                <Chip
                  label=" Create"
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "#FC8FC3",
                    marginBottom: 10,
                    color: "white",
                    height: 35,
                    width: 300,
                    "font-family": "Quicksand , sans-serif",
                    "font-size": "1.2em",
                    "font-weight": "bold",
                  }}
                />
              </div>
            </center>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
