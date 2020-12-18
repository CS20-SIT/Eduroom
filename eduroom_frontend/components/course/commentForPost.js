import React from "react";
import { Fragment, useEffect, useState,useContext} from "react";
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
import UserContext from '../../contexts/user/userContext'
import AuthDialog from '../../components/landing/authDialog'
import ShowComment from './showComment'
import StudentFeedback from './studentFeedback'
const commentForPost = (props) => {
  const userContext = useContext(UserContext)
  const {user} = userContext
  const [dialog,setDialog] = useState(false)
  const [createForm, setForm] = useState({
    comment: "",
    id: props.id,
  });
  const [alert, setAlert] = useState({
    comment: false,
  });
  useEffect(() => {
    console.log("render");
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...createForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      console.log(createForm);
      if(user){
        
      api.post("/api/forum/comment", createForm).then((res) => {
        console.log(res);
        setForm({
          comment: "",
        });
        props.GetData();
        //router.push("/forum");
      });
      }else{
        setDialog(!dialog)
      }
    } else {
      console.log("Please write your comment");
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
    root: {
      flexGrow: 1,
    },
    submit: {
      margin: theme.spacing(2, 0, 0),
      background: "#3d467f",
    },
    paper: {
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // textAlign: 'center',
      color: theme.palette.text.secondary,
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
        {/* <div className="box" style={{ display: 'flex', background: 'rgba(255,255,255,.7)' }} > */}
      {
				dialog ? (
					<AuthDialog handleClick={()=>{setDialog(false)}}/>
				) :null
			}
            
            
          <div className={classes.root} style={{padding:'20px'}}>
            <Grid container spacing={3} variant="outlined" >
              <Grid item xs={12} >
                {/* <Paper className={classes.paper}> */}
                <div className="rate">
                
					<input type="radio" id="star5" name="rate" value="5" />
					<label for="star5" title="text">
						5 stars
					</label>
					<input type="radio" id="star4" name="rate" value="4" />
					<label for="star4" title="text">
						4 stars
					</label>
					<input type="radio" id="star3" name="rate" value="3" />
					<label for="star3" title="text">
						3 stars
					</label>
					<input type="radio" id="star2" name="rate" value="2" />
					<label for="star2" title="text">
						2 stars
					</label>
					<input type="radio" id="star1" name="rate" value="1" />
					<label for="star1" title="text">
						1 star
					</label>
				</div>
                  <TextField
                    id="outlined-full-width"
                    name="comment"
                    autoFocus
                    style={{ marginTop: 8}}
                    placeholder="Add a comment ..."
                    fullWidth
                    multiline
                    rows={5}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={createForm.comment}
                    onChange={handleChange}
                    error={alert.comment}
                    type="text"
                    variant="outlined"
                    color="rgba(242, 236, 254, 0.2)"
                    border="2px solid #3D467F"
                  />
                  {alert.comment ? (
                    <span style={{ color: "red", fontSize: "2px" }}>
                      Comment is required
                    </span>
                  ) : null}
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="flex-end"
                  >
                    <div className="post">
                    <Grid item xs={2} sm={2}>
                      <Button
                        type="submit"
                        variant="contained"
                        color={"primary"}
                        onClick={handleSubmit}
                        className={classes.submit}
                      >
                        Send
                      </Button>
                    </Grid>
                    </div>
                  </Grid>
                  {/* </Paper> */}
                       
                       </Grid>
                   </Grid>
                   <div style={{marginTop:'30px',marginLeft:'6.7%',marginRight:'5%',marginBottom:'30px'}}>
                   <div style={{width: '1016px', height: '0px',left: '243px',border: '1px solid #7B89DD',backgroundColor:'#7B89DD'}} />
                </div>
                        <StudentFeedback />
                        <div style={{marginTop:'30px',marginLeft:'6.7%',marginRight:'5%',marginBottom:'30px'}}>
                   <div style={{width: '1016px', height: '0px',left: '243px',border: '1px solid #7B89DD',backgroundColor:'#7B89DD'}} />
                </div>
               </div>
               {/* </div> */}
      <style>
        {`
         .post{
          display:flex;
          justifyContent:flex-end;
         }
            `}
      </style>
      
    </Fragment>
  );
};
export default commentForPost;
