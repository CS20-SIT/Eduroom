import React from "react";
import AnnDialog from "./AnnCom/AnnDialog";
import AnnTable from "./AnnCom/AnnTable";
import { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
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
    <div style={sBig}>
        <Grid  spacing={3} container
  direction="row"
  justify="flex-start"
  alignItems="baseline"
>
        <Grid item xl={2} md={3} >
       
         <span style={sBigTitle}> Announcement</span>
        </Grid>
        <Grid item xl={2} md={3} >
       <span style={{backgroundColor:'red',paddingTop:7}}>
        <AnnDialog  onSuccess={handleUpdate} /></span>
        </Grid>
       
        
        <Grid item xl={12} md={12}>
        <AnnTable  onSuccess={handleUpdate}  update={refresh} />
         
        </Grid>
      
      </Grid>
   
      
    </div>
  );
};
export default Test;
