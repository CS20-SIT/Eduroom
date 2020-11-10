import React from "react";

import { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import LogTable from './LogTable';
//prepare for adding abmin log wheen create / edit ann
const Test = () => {
  
const sBig = {marginLeft:'7.5%',marginRight:'7.5%',marginTop:'2.5%'}
const sBigTitle ={'fontFamily': 'Quicksand , sans-serif' ,  'font-size': '2em' ,  color: '#5b5b5b','fontWeight': 'bold'
, 
}

  return (
    <div style={sBig}>
    <Grid  >
    <Grid  >
   
     <span style={sBigTitle}>Admin Log</span>
     <div style={{height:20}} ></div>
    </Grid>
    <div style={{height:20}} ></div>
    <Grid item xl={12} md={12}>
    <LogTable />
    <div style={{height:100}} ></div>
    </Grid>
  
  </Grid>

  
</div>
  );
};
export default Test;
