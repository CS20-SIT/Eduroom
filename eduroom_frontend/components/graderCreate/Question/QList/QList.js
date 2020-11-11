import React from "react";
import Link from "next/link";
import QTable from "./QTable";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import { useRouter } from "next/router";

//prepare for adding abmin log wheen create / edit ann
// toggle for visiblity https://material-ui.com/components/switches/
const Test = () => {
  const [refresh, setRefresh] = useState(false);
  const handleUpdate = () => {
    console.log(refresh);
    console.log("Handle Update From Dialog Submission");
    setRefresh(true);
    setRefresh(false);
  };
  const sBig = { marginLeft: "7.5%", marginRight: "7.5%", marginTop: "2.5%" };
  const sBigTitle = {
    fontFamily: "Quicksand , sans-serif",
    "font-size": "2em",
    color: "#5b5b5b",
    fontWeight: "bold",
  };
  const router = useRouter();
  return (
    <div style={sBig}>
      <Grid>
        <Grid>
          <span>
            <Link href="/admin/grader/question/create" scroll={false}>
              Create
            </Link>
          </span>
          <div style={{ height: 20 }}></div>
        </Grid>
        {/* <Grid>
          <span style={{ paddingTop: 7 }}>
            <AnnDialog onSuccess={handleUpdate} />
          </span>
        </Grid> */}
        <div style={{ height: 20 }}></div>
        <Grid item xl={12} md={12}>
          <QTable onSuccess={handleUpdate} update={refresh} />
          <div style={{ height: 100 }}></div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Test;
