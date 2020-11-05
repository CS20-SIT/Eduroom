// https://stackoverflow.com/questions/52911169/how-to-change-the-border-color-of-material-ui-textfield?rq=1
// https://stackblitz.com/edit/material-ui-custom-outline-color
// https://stackoverflow.com/questions/50228108/is-it-possible-to-change-the-textfields-font-color-in-material-ui-next
// https://github.com/mui-org/material-ui/issues/9574

// for add tag
////https://www.freecodecamp.org/news/how-to-create-email-chips-in-pure-react-ad1cc3ecea16/

//for date time picker
//https://material-ui.com/components/pickers/


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers"; 

import { useState, useEffect } from "react";

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'75%',
    margin:'15%'
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
const sInputfieldSelect  ={'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-size': '1.4em', 'font-weight': 'bold'}
const sButtionandVisbile =  { color: '#3d467f', 'font-family': 'Quicksand , sans-serif','font-weight': 'bold' }
const sInputfieldTime  ={'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-size': '1.2em'}
const [selectedDate, handleDateChange] = useState(new Date("2018-01-01T00:00:00.000Z"));
const rules = [
    {
      value: 'OI',
      label: 'OI',
    },
    {
      value: 'ACM',
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
  const [rule, setRule] = React.useState('OI');
  const [conStatus, setConStatus] = React.useState(false);
  const handleChangeRule = (event) => {
    setRule(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setConStatus(event.target.value);
  };


  return (
    <div className={classes.root}>
   
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <h1>Create your   contest</h1>
   
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
            // value={ann.title}
            // onChange={setTitle}
            required
            inputProps={{ maxLength: 50 ,style:sInputfield }}
            InputLabelProps={{style: sInput}}
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
            // value={ann.title}
            // onChange={setTitle}
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
            <TextField
             id="datetime-local"
             label="Start"
             type="datetime-local"
             defaultValue="2017-05-24T10:30"
             fullWidth
             required
             className={classes.textField}
             inputProps={{ style:sInputfieldDesc }}
             InputLabelProps={{style: sInputTime}}

           />
      </Paper>
  </div>
  {/* <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="With keyboard"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />
         */}
          <DateTimePicker
        label="DateTimePicker"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
        
        </Grid>
        <Grid item xs={6} >
        <div><Paper className={classes.paper2} >
        <TextField
        id="datetime-local"
        label="End"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        fullWidth
        required
    
        inputProps={{style:sInputfieldDesc }}
        InputLabelProps={{style: sInputTime}}

         />
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
        <center><div>Submit</div></center>
        </Grid>

        
        
      </Grid>
     
    </div>
  );
}