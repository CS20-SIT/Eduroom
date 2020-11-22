import React from "react";
import Create from "./Create";
import Table from "./Table";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import { sBig, sBigTitle } from "../materialUIStyle";
//prepare for adding abmin log wheen create / edit ann
// toggle for visiblity https://material-ui.com/components/switches/
const Announcement = (p) => {
  const router = useRouter();
  const id = router.query.conno;
  const [refresh, setRefresh] = useState(false);
  const handleUpdate = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={sBig}>
      <Grid>
        <Grid>
          <span style={sBigTitle}>
            {id != undefined ? (
              <span onClick={() => router.back()}>
                <i
                  style={{ cursor: "pointer" }}
                  className="fa fa-arrow-left"
                  aria-hidden="true"
                ></i>
                {" Contest "}
              </span>
            ) : (
              ""
            )}{" "}
            Announcement
            {"\u00A0" + "\u00A0" + "\u00A0" + "\u00A0"}
          </span>{" "}
          <Create onSuccess={handleUpdate} conid={id} />
          <div style={{ height: 20 }}></div>
        </Grid>

        <div style={{ height: 20 }}></div>
        <Grid item xl={12} md={12}>
          <Table onSuccess={handleUpdate} update={refresh} conid={id} />
          <div style={{ height: 100 }}></div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Announcement;
