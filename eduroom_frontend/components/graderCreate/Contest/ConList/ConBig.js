
// use for startime / endtime
//https://material-ui.com/components/chips/#chip
// use grid for listing the component
//https://material-ui.com/components/grid/ 
//https://material-ui.com/components/switches/

import React from "react";
import { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import ConList from './ConList'
//prepare for adding abmin log wheen create / edit ann
const Test = () => {
  const [refresh, setRefresh] = useState(false);
  const handleUpdate = () => {
    console.log(refresh);
    console.log("Handle Update From Dialog Submission");
    setRefresh(true);
    setRefresh(false);
  };
const sBig = {marginLeft:'7.5%',marginRight:'7.5%',marginTop:'2.5%'}
const sBigTitle ={'fontFamily': 'Quicksand , sans-serif' ,  'font-size': '2em' ,  color: '#5b5b5b','font-weight': 'bold'
, 
}

  return (
    <div style={sBig}>
    <Grid  container spacing={3} containerdirection="row" justify="flex-start" alignItems="baseline">
    <Grid  >  
     <span style={sBigTitle}>Contest</span>
     <div style={{height:20}} ></div>
    </Grid>
{/* 
    <Grid >
    </Grid> */}
    <div style={{height:20}} ></div>
    <Grid item xl={12} md={12}>
      <ConList></ConList>
    <div style={{height:100}} ></div>
    </Grid>
  
  </Grid>

  
</div>
  );
};
export default Test;
