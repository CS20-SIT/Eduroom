import React from "react";
import QExisting from "./AddExisting";
import QTable from "./Table";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { useState } from "react";
import { useRouter } from "next/router";
import { sBig, sBigTitle } from "../../materialUIStyle";

const List = () => {
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
              backgroundColor: "#fb9ccb",
              marginTop: -15,
              marginLeft: 20,
              color: "white",
              height: 30,
              width: 200,
              fontFamily: "Quicksand , sans-serif",
              fontSize: "1.2em",
              fontWeight: "600",
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
export default List;
