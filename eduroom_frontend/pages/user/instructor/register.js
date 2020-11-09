import React, { Fragment, useState, useEffect } from 'react'
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
import api from "../../../api";
import GeneralNoNav from '../../../components/template/generalnonav'
const InstructorRegister = () => {
  useEffect(() => {
    const fetch = async () => {
      const res = await api.get('/api/test');
      console.log(res.data);
    }
    fetch();

  }, []);
  const [instructorFrom, setFrom] = useState({
    degree: "",
    expert: "",
    bio: "",
  });
  const [alert, setAlert] = useState({
    degree: false,
    expert: false,
    bio: false,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFrom({ ...instructorFrom, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {

    if (validator()) {
      api
        .post("/api/register_instructor", {
          degree: instructorFrom.degree,
          expert: instructorFrom.expert,
          bio: instructorFrom.bio,
        })
        .then((res) => {
          console.log(res.data);
        });
    }

    if (validator() == true) {
      window.location.href = "/user/instructor";
    }


  };

  const validator = () => {
    let keys = Object.keys(instructorFrom);
    let temp = { ...alert };
    let check = true;
    for (let key of keys) {
      if (instructorFrom[key] == "") {
        temp[key] = true;
        check = false;
      } else {
        temp[key] = false;
      }
    }
    setAlert(temp);
    return check;
  };
  return <Fragment>
    <GeneralNoNav>
      <div>
        <h1>Instructor   Profile</h1>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Degree</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="degree"
            fullWidth
            autoFocus
            type={"text"}
            variant="outlined"
            value={instructorFrom.name}
            onChange={handleChange}
            error={alert.name}
          />
          {alert.name ? (
            <span style={{ color: "red", fontSize: "0.8em" }}>
              degree is required
            </span>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Expert</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="expert"
            fullWidth
            autoFocus
            type={"text"}
            variant="outlined"
            value={instructorFrom.name}
            onChange={handleChange}
            error={alert.name}
          />
          {alert.name ? (
            <span style={{ color: "red", fontSize: "0.8em" }}>
              expert is required
            </span>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Biography</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="bio"
            fullWidth
            autoFocus
            type={"text"}
            variant="outlined"
            value={instructorFrom.name}
            onChange={handleChange}
            error={alert.name}
          />
          {alert.name ? (
            <span style={{ color: "red", fontSize: "0.8em" }}>
              biography is required
            </span>
          ) : null}
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

            >

              Submit
                    </Button>
          </Grid>
        </Grid>

      </div></GeneralNoNav>
  </Fragment>


}
export default InstructorRegister