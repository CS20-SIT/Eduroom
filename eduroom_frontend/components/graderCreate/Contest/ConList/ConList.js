
// use for startime / endtime
//https://material-ui.com/components/chips/#chip
// use grid for listing the component
//https://material-ui.com/components/grid/ 
//https://material-ui.com/components/switches/

import React from "react";
import { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import ConEach from './ConEach'
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
const sBigTitle ={'font-family': 'Quicksand , sans-serif' ,  'font-size': '2em' ,  color: '#5b5b5b','font-weight': 'bold'
, 
}

  return (
    <ConEach title = 'Do or Die' description="bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla "></ConEach>
         
  );
};
export default Test;
