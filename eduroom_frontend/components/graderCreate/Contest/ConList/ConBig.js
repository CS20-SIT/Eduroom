// use for startime / endtime
//https://material-ui.com/components/chips/#chip
// use grid for listing the component
//https://material-ui.com/components/grid/
//https://material-ui.com/components/switches/

// https://codesandbox.io/s/material-demo-g0xo5?file=/demo.js
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ConList from "./ConList";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

//prepare for adding abmin log wheen create / edit ann
const Test = () => {
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  const handleUpdate = () => {
    console.log(refresh);
    console.log("Handle Update From Dialog Submission");
    setRefresh(true);
    setRefresh(false);
  };
  const sBig = { marginLeft: "15.5%", marginRight: "10.5%", marginTop: "2.5%" };
  const sBigTitle = {
    fontFamily: "Quicksand , sans-serif",
    "font-size": "2.5em",
    color: "#5b5b5b",
    "font-weight": "bold",
  };

  return (
    <div style={sBig}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="baseline"
      >
        <Grid>
          <span style={sBigTitle}>Contest</span>

          <div style={{ height: 20 }}></div>
        </Grid>

        <Grid>
          <Chip
            label=" Make a Contest"
            onClick={() => {
              router.push(`/admin/grader/contest/create`);
            }}
            style={{
              backgroundColor: "#FC8FC3",
              marginTop: -15,
              marginLeft: 20,
              color: "white",
              height: 30,
              width: 200,
              "font-family": "Quicksand , sans-serif",
              "font-size": "1.2em",
              "font-weight": "600",
            }}
          />
        </Grid>
        <div style={{ height: 20 }}></div>
        <Grid item xl={12} md={12}>
          <ConList></ConList>
          <div style={{ height: 100 }}></div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Test;
