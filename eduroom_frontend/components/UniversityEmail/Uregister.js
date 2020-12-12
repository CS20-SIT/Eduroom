import React, { Fragment, useState, useContext, useEffect } from 'react'
import style from '../../styles/universityEmail/Uregister'
import { withStyles, InputBase, Link, MenuItem, Select, Paper, Grid, FormControl, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import General from '../template/general'

import api from "../../api";



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 0,


    },
  },
}))(InputBase);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Content = () => {


  let unmounted = false;
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState("mail.kmutt.ac.th");

  useEffect(() => {

    const fetchData = async () => {
      const res = await api.get('/api/udiscount/ulist');

      console.log(res.data);
      if (!unmounted) {
        setItems(
          res.data.map(({ universitydomain }) => ({ label: universitydomain, value: universitydomain }))
        );
        setLoading(false);

      }
    };
    fetchData();
    return () => {
      unmounted = true;
    };
  }, []);

  const [createinfo, setinfo] = useState({
    localPart: "",
    domainName: "",
  });
  const handleSubmit = (e) => {
    console.log(createinfo);
    api.post('/api/udiscount/registerUemail', {
      localPart: createinfo.localPart,
      domainName: createinfo.domainName,
    });
  };
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    setinfo({ ...createinfo, [e.target.name]: e.target.value });
  };
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Fragment>
      <General>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid>
            <div style={{ padding: 50, background: 'rgba(196, 196, 196, 0.5)' }}>
              <Typography variant="h4" component="h2" style={{ paddingRight: 200, color: '#3D467F' }}>
                Please inform your university E-mail
              </Typography>
              <br></br>
              <Paper style={{
                height: '5px', width: '100%', backgroundColor: '#A880F7', paddingRight: 300
                , opcacity: '50%'
              }}></Paper>
              <Typography variant="body2" style={{ paddingTop: 15, color: '#979797' }}>
                Inform a university E-mail to get a code to verify your account
              </Typography>
              <br></br>
              <Grid container spacing={3}>
                <Grid item xs={6} >
                  <Paper style={{ padding: 10 }}>
                    <form>
                      <InputBase
                        onChange={handleChange}
                        name="localPart"
                        fullWidth
                        autoFocus
                        type={"text"}
                        value={createinfo.localPart}
                        className={classes.margin}
                        inputProps={{ 'aria-label': 'naked' }}
                      />
                    </form>
                  </Paper>
                </Grid>
                <img src="https://www.flaticon.com/svg/static/icons/svg/159/159036.svg" width="30px"></img>
                <Grid item xs={4} >
                  <Paper style={{ padding: 10 }}>
                    <FormControl fullWidth className={classes.margin}>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        disabled={loading}
                        name="domainName"
                        onChange={(e) => setValue(e.currentTarget.value),
                          (e) => setinfo({ ...createinfo, [e.target.name]: e.target.value })}
                        input={<BootstrapInput />}
                      >
                        {items.map(({ label, value }) => (
                          <MenuItem key={value} value={value}>
                            {label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Paper>
                </Grid>
              </Grid>
              <Typography variant="body2" style={{ paddingTop: 15, color: '#979797' }} >
                example  :  anya858@mail.kmutt.ac.th
              </Typography>
              <Grid container spacing={3} direction="column" alignItems="center"
                justify="center">

                <Grid container spacing={3} direction="row"
                  alignItems="center"
                  justify="center" style={{ marginTop: '20px' }}>

                  <Grid item xs={1} >
                    <Checkbox
                      defaultChecked
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </Grid>
                  <Grid item xs={5} >
                    <Typography variant="body2">I have read and accept <a >the term of service.</a></Typography>
                  </Grid>
                </Grid>
                <Link href="/universityemail/verifycodesent">
                  <Grid item xs={6} >
                    <button className="register-button"
                      type="submit"
                      onClick={handleSubmit}>
                      <span className="register-button-text">Submit</span>
                    </button>
                  </Grid>
                </Link>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </General>
      <img alt="register-img" src="/images/eduroom_logo_box.svg" width="1152" height="558.6" style={{
        position: 'absolute', left: '657px',
        top: '153px', opacity: 0.3
      }} />
      <style jsx>
        {style}
      </style>
    </Fragment>
  )
}
export default Content

