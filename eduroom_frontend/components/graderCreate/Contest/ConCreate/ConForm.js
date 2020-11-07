// https://stackoverflow.com/questions/52911169/how-to-change-the-border-color-of-material-ui-textfield?rq=1
// https://stackblitz.com/edit/material-ui-custom-outline-color
// https://stackoverflow.com/questions/50228108/is-it-possible-to-change-the-textfields-font-color-in-material-ui-next
// https://github.com/mui-org/material-ui/issues/9574

// for add tag
////https://www.freecodecamp.org/news/how-to-create-email-chips-in-pure-react-ad1cc3ecea16/

//for date time picker
//https://material-ui.com/components/pickers/


import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker, KeyboardDateTimePicker,MuiPickersUtilsProvider, } from "@material-ui/pickers"; 
import DateFnsUtils from '@date-io/date-fns'
import { compareAsc } from 'date-fns'
import Chip from '@material-ui/core/Chip';
import { useState, useEffect } from "react";
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Grid from '@material-ui/core/Grid';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'75%',
    marginLeft:'12%',
    marginRight:'15%',
    marginTop:'2.5%',
    marginBottom:'10%'
  },
  paper: {
    paddingTop:theme.spacing(1),
    paddingRight:theme.spacing(4),
    paddingLeft:theme.spacing(4),
    paddingBottom:theme.spacing(3),
    // padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   
  },
  paper2: {
    paddingTop:theme.spacing(4),
    paddingRight:theme.spacing(4),
    paddingLeft:theme.spacing(4),
    paddingBottom:theme.spacing(4),
    

    textAlign: 'center',
    color: theme.palette.text.secondary,
   
  },
  menuitem:{
    '&.Mui-selected': {'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-size': '1.2em', 'font-weight': 'bold'}
  },
  select: {
    
      
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      fontFamily: 'Quicksand , sans-serif' 
      ,color: '#3d467f','font-size': '1.2em', 'font-weight': 'bold'
     
    },
    error1 : {
        'font-family': 'Quicksand , sans-serif' ,color: '#5b5b5b','font-size': '1.2em',
    }

    
  },
}));

export default function FullWidthGrid() {
const sTitle = {'font-family': 'Quicksand , sans-serif' ,  'font-size': '1.2em' ,  color: '#3d467f','font-weight': 'bold'}
const sText ={'font-family': 'Quicksand , sans-serif' ,color: '#5b5b5b'};
const sInputfield = {'font-family': 'Quicksand , sans-serif' ,color: '#5b5b5b','font-size': '1.2em',}
const sInput  ={'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-weight': 'bold','font-size': '1.2em'}
const sInputfieldDesc  ={'font-family': 'Quicksand , sans-serif' ,color: '#5b5b5b','font-size': '1.2em',paddingTop:12}
const sInputTime  ={'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-size': '1.5em', 'font-weight': 'bold'}
const sInputSelect  ={'font-family': 'Quicksand , sans-serif' ,color: '#5b5b5b','font-size': '1.2em',}
const sError  ={'font-family': 'Quicksand , sans-serif' ,color: 'white','font-size': '1em',}
const sInputfieldSelect  ={'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-size': '1.4em', 'font-weight': 'bold'}
const sButtionandVisbile =  { color: '#3d467f', 'font-family': 'Quicksand , sans-serif','font-weight': 'bold' }
const sInputfieldTime  ={'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-size': '1.2em'}

const sBigTitle ={'fontFamily': 'Quicksand , sans-serif' ,  'font-size': '2em' ,  color: '#3d467f','fontWeight': 'bold' }


// const handleEndDateChange = (event) => {
//     let a = compareAsc(selectedStartDate,selectedEndDate) 
//     if(a!=-1){
//     setEndDate(event.target.value);
//     }
//   };

const rules = [
    {
      value: 'oi',
      label: 'OI',
    },
    {
      value: 'acm',
      label: 'ACM',
    },
   
  ];
  const conStatusS  = [
    {
      value: true,
      label: 'ON',
    },
    {
      value: false,
      label: 'OFF',
    },]
  

  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [rule, setRule] = React.useState('oi');
  const [conStatus, setConStatus] = React.useState(false);
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());

  const [erorvalid, seterorValid] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    seterorValid(false);
  };
    
  const handleTitle =  (event) => {
    setTitle(event.target.value);
    };
  const handleDesc =  (event) => {
        setDescription(event.target.value);
        };

  const handleChangeRule = (event) => {
    setRule(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setConStatus(event.target.value);
    console.log(compareAsc(selectedStartDate,selectedEndDate)!=-1)
  };
  const handleSubmit = () => {

    if( title=='' || (compareAsc(selectedStartDate,selectedEndDate)!=-1) ) {seterorValid(true)}
    axios
      .post("http://localhost:5000/api/grader/ccontest", {
        title : title,
        conRuleType :  rule,
        description :  description ,
        startTime : selectedStartDate,
        endTime : selectedEndDate,
        status : conStatus,
        adminid : '12345678-1234-1234-1234-123456789123'
      })
    //   .then(function (response) {
    //     console.log(response);
    //     setOpen(false);
        
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
    }







  return (
    <div className={classes.root}>
        <Snackbar 
        
             open={erorvalid} autoHideDuration={6000} onClose={handleClose}>
        <Alert  style={sError} onClose={handleClose} severity="error">
          Invalid Information detected, Please Review your submission !
        </Alert>
      </Snackbar>
        
   
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <span style={sBigTitle}>Create your Contest</span>
   
        </Grid>
        <Grid item xs={12} sm={12}>

        <div> 
            <Paper className={classes.paper} >
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
            inputProps={{ maxLength: 50 ,style:sInputfield }}
            InputLabelProps={{style: sInput}}
            error={title==''}
            helperText={title==''? 'Title is Empty!' : ''}
          />
          </Paper> </div>
        </Grid>
        <Grid item xs={12} sm={12}>
        <div>   <div> <Paper className={classes.paper} ><TextField
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
            required
            inputProps={{ maxLength: 1000 ,style:sInputfieldDesc }}
            InputLabelProps={{style: sInput}}
          />
          </Paper> 
          </div>
          </div>
        </Grid>
        <Grid item xs={6} >
        <div>
        <Paper className={classes.paper2} >
         
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
        
            variant="inline"
            ampm={false}
            label="Start"
            value={selectedStartDate}
            onChange={handleStartDateChange}
            onError={console.log}
            disablePast
            required
            fullWidth
            format="dd-MMM-yyyy 'AT' HH:mm"
            error={compareAsc(selectedStartDate,selectedEndDate)!=-1}
            helperText={(compareAsc(selectedStartDate,selectedEndDate)!=-1) ? 'Invaild Date!' : ''}
            inputProps={{ style:sInputfieldDesc }}
            InputLabelProps={{style: sInputTime}}
             />
            </MuiPickersUtilsProvider>
      </Paper>
  </div>
         
        
        </Grid>
        <Grid item xs={6} >
        <div><Paper className={classes.paper2} >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
    
            variant="inline"
            ampm={false}
            label="End"
            value={selectedEndDate}
            onChange={handleEndDateChange}
            onError={console.log}
            disablePast
            required
            fullWidth
            format="dd-MMM-yyyy 'AT' HH:mm"
         
            error={compareAsc(selectedStartDate,selectedEndDate)!=-1}
            helperText={(compareAsc(selectedStartDate,selectedEndDate)!=-1) ? 'Invaild Date!' : ''}
            inputProps={{ style:sInputfieldDesc }}
            InputLabelProps={{style: sInputTime}}
             />
            </MuiPickersUtilsProvider>
         </Paper></div>
        </Grid>
        <Grid item xs={6} ><Paper className={classes.paper2} >
        <div   >
        <TextField
          fullWidth
          select
          required
          label="Contest Rule Type"
          value={rule}
          onChange={handleChangeRule}
          // inputProps={{style:sInputfieldSelect }}
          InputLabelProps={{style: sInputfieldSelect}}
   
        >
          {rules.map((option) => (
            <MenuItem className={classes.menuitem} key={option.value} value={option.value}>
                <span  style={sInputSelect} > {option.label}</span>
             {/* <span style={{sInputTime}}> {option.label}</span> */}
            </MenuItem>
          ))}
        </TextField>

      </div> </Paper>
        </Grid>
        <Grid item xs={6} >
        <Paper className={classes.paper2} >
        <div   >
        <TextField
          fullWidth
          select
          required
          label="Status"
          value={conStatus}
          onChange={handleChangeStatus}
          // inputProps={{style:sInputfieldSelect }}
          InputLabelProps={{style: sInputfieldSelect}}
   
        >
          {conStatusS.map((option) => (
            <MenuItem className={classes.menuitem} key={option.value} value={option.value}>
                <span  style={sInputSelect} > {option.label}</span>
             {/* <span style={{sInputTime}}> {option.label}</span> */}
            </MenuItem>
          ))}
        </TextField>

      </div> </Paper>
          
       
        </Grid>
        <Grid item xs={12} >
              <div style={{height:20}}></div>
        </Grid>
        <Grid item xs={12} >
        <center><div> <Chip
        label=" Create"
        onClick={handleSubmit}
        style={{backgroundColor:'#FC8FC3',marginBottom:10,color:'white',height:35,width:300,'font-family': 'Quicksand , sans-serif' ,  'font-size': '1.2em','font-weight': 'bold'}}

        /></div></center>
        </Grid>

        
        
      </Grid>
     
    </div>
  );
}
