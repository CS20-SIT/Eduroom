import React from "react";
import Grid from "@material-ui/core/Grid";
import ConList from "./List";
import Chip from "@material-ui/core/Chip";
import { sContests, sContestsTitle } from "../../materialUIStyle";
import { useRouter } from "next/router";

const Contests = () => {
  const router = useRouter();

  return (
    <div style={sContests}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="baseline"
      >
        <Grid>
          <span style={sContestsTitle}>Contest</span>
          <div style={{ height: 20 }}></div>
        </Grid>
        <Grid>
          <Chip
            label=" Make a Contest"
            onClick={() => {
              router.push(`/admin/grader/contest/create`);
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
export default Contests;
