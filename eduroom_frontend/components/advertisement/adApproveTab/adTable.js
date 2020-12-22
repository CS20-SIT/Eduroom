import { Grid, Link } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Switch from '@material-ui/core/Switch';
import api from '../../../api'

const temp = ({item}) => {
    const [data, setData] = useState([])
   
    const [visibility, setVisibility] = useState({
        checkedA: item.isvisible
    });    


    return (<div>
        <Grid container spacing={3}  style={{margin:"1% 0% 0% 1%"}}>
        <Grid item xs={2}>
            {item.adid}
          </Grid>
          <Grid item xs={2}>
          {item.tagname}
          </Grid>
          <Grid item xs={2} style={{}}>
            <Link href={`../../admin/advertisement/adDetailWait/${item.adid}`}>see detail..</Link>
          </Grid>
          <Grid item xs={2}>
          {item.adstarttime.substring(0,10)}
          </Grid>
          <Grid item xs={2}>
          {item.adexpiretime.substring(0,10)}
          </Grid>
          <Grid item xs={2}>
          {item.status}
          </Grid>
          
        </Grid>
 
    </div>)
}
export default temp;