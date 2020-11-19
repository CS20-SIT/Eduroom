// use for startime / endtime
//https://material-ui.com/components/chips/#chip
// use grid for listing the component
//https://material-ui.com/components/grid/
//https://material-ui.com/components/switches/
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Pagination from "@material-ui/lab/Pagination";

import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ConEach from "./ConEach";
import axios from "../../../../api";
import { makeStyles, Box } from "@material-ui/core";
import { useRouter } from "next/router";
//prepare for adding abmin log wheen create / edit ann
const shorten = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return text.substr(0, maxLength) + "...";
  }

  return text;
};
const useStyles = makeStyles((theme) => ({
  paginator: {
    justifyContent: "center",
    padding: "10px",
  },
}));

const Test = () => {
  const [data, setData] = useState([]);
  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);

  const classes = useStyles();
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const GetData = async () => {
      const result = await axios("/api/grader/allcontest");
      setData(result.data);
    };
    GetData();
    console.log(data);
  }, []);
  const [refresh, setRefresh] = useState(false);
  const handleUpdate = () => {
    console.log(refresh);
    console.log("Handle Update From Dialog Submission");
    setRefresh(true);
    setRefresh(false);
  };
  const sBig = { marginLeft: "7.5%", marginRight: "7.5%", marginTop: "2.5%" };
  const sBigTitle = {
    "font-family": "Quicksand , sans-serif",
    "font-size": "2em",
    color: "#5b5b5b",
    "font-weight": "bold",
  };

  return (
    <div>
      {data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((row) => {
        return (
          <ConEach
            id={row.conno}
            title={row.title}
            description={shorten(row.description, 700)}
            starttime={
              "START : " +
              format(Date.parse(row.starttime), "yyyy-MM-dd 'AT' HH:mm")
            }
            endtime={
              "END : " +
              format(Date.parse(row.endtime), "yyyy-MM-dd 'AT' HH:mm")
            }
          ></ConEach>
        );
      })}{" "}
      <Box component="span">
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </div>
  );
};

export default Test;
