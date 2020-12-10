import React, { Fragment, useState} from 'react'
import style from '../../styles/universityEmail/Uregister'
import {Link,Typography,InputBase, Paper, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import General from '../template/general'



import api from "../../api";


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
  const [createinfo, setinfo] = useState({
    verifyCode: "",
  }); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      console.log(createForm);
      api.post("/api/forum/create", createForm).then((res) => {
        console.log(res);
        // router.push("/forum");
      });
    } else {
      console.log("This form is not valid");
    }
  };
  const [alert, setAlert] = useState({
    verifyCode: false,
  })
   const [supportForm, setForm] = useState({
    verifyCode: '',
    
  })
  const validator = () => {
    let keys = Object.keys(createForm);
    let temp = { ...alert };
    let check = true;
    for (let key of keys) {
      if (createForm[key] == "") {
        temp[key] = true;
        check = false;
        console.log(key)
      } else {
        temp[key] = false;
      }
    }
    setAlert(temp);
    return check;
  };
  const [createForm] = useState({
    verifyCode: "",
  });
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    setinfo({ ...createinfo, [e.target.name]: e.target.value });
  };
  //const bull = <span className={classes.bullet}>•</span>;
  return (
    <Fragment>
      <General>
        <div className="Ad-Detail-text" style={{marginLeft: "75px"}}>
        <Grid container spacing={3}  style={{ marginTop: '-15px' }}>
                 ADVERTISEMENT
                </Grid>
          </div>
        <Grid container spacing={3} direction="column" alignItems="center"
                justify="center" style={{ marginTop: '20px' }}>
              <div style={{
                height: '5px', width: '90%', backgroundColor: '#c4c4c4', 
              }}></div>
        </Grid>
        <div className="Ad-Detail-List-text">
        <Grid container spacing={3} direction="column" alignItems="center"
                justify="center" style={{ marginTop: '50px' }}>
                  LIST OF ADVERTISEMENT
                </Grid>
        </div>
        <Grid container spacing={12} direction="column" alignItems="center"
                justify="center" style={{ marginTop: '30px' }}>
                 
            
              
              <Paper style={{ height:'150px', width:'60%', opcacity: '100%' ,marginTop:'30px'}}>
                <Grid item xs={1} style={{paddingLeft:'20px',marginTop:'30px'}}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3064/3064943.svg"
                        width='100px' ></img>
                </Grid>
              </Paper>
              
        </Grid>
        <Grid container spacing={12} direction="column" alignItems="center"
                justify="center" style={{ marginTop: '10px' }}>
                  
                  <button className="Get-Ad-button"
                   type="MyCoupon"
                   onClick={handleSubmit}>
                    <span className="Get-Ad-text">Get AD!</span>
                  </button>
        </Grid>

             
             
              
            


          

        

                <style jsx>
        {style}
      </style> 
      </General>
      
    </Fragment>
  )
}
export default Content

