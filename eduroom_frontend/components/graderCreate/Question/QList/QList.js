import React from "react";
import Link from "next/link";
import QExisting from "./QAddExisting";
import QTable from "./QTable";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Chip from "@material-ui/core/Chip";

import { useRouter } from "next/router";

//prepare for adding abmin log wheen create / edit ann
// toggle for visiblity https://material-ui.com/components/switches/
const Test = () => {
  const router = useRouter();
  const id = router.query.conno;
  const [refresh, setRefresh] = useState(false);
  const handleUpdate = () => {
    setRefresh(!refresh);
  };
  const sBig = { marginLeft: "7.5%", marginRight: "7.5%", marginTop: "3.5%" };
  const sBigTitle = {
    fontFamily: "Quicksand , sans-serif",
    fontSize: "2em",
    color: "#5b5b5b",
    fontWeight: "bold",
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
            Question
          </span>{" "}
          <Chip
            label="Create New"
            onClick={() => {
              router.push(
                id == undefined
                  ? "/admin/grader/question/create"
                  : `/admin/grader/contest/${id}/addquestion`
              );
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
          {id != undefined ? (
            <QExisting
              onSuccess={handleUpdate}
              update={refresh}
              conno={id}
            ></QExisting>
          ) : (
            ""
          )}
          <div style={{ height: 20 }}></div>
        </Grid>

        <div style={{ height: 20 }}></div>
        <Grid item xl={12} md={12}>
          <QTable onSuccess={handleUpdate} update={refresh} conno={id} />
          <div style={{ height: 100 }}></div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Test;
