import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import axios from "../../../../api";
import { useState, useEffect } from "react";
import AnnEdit from "../ConAnn/ConAnnEdit";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  tableHeader: {
    marginTop: 100,
    "font-family": "Quicksand , sans-serif",
    borderBottom: "none",
    "font-size": "1.2em",
    color: "#3d467f",
    "font-weight": "bold",
    backgroundColor: "white",
  },
  tableRow: {
    "font-family": "Quicksand , sans-serif",
    borderBottom: "none",
  },
  tableCell: {
    "font-family": "Quicksand , sans-serif",
    borderBottom: "none",
    "font-size": "1em",
    color: "#5b5b5b",
  },
  caption: {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.875rem",
    "font-weight": "bold",
  },
  toolbar: {
    "& > p:nth-of-type(2)": {
      "font-family": "Quicksand , sans-serif",
      color: "#5b5b5b",
      fontSize: "0.875rem",
      "font-weight": "bold",
    },
  },
});
const shorten = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return text.substr(0, maxLength) + "...";
  }

  return text;
};
const AnnTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const GetData = async () => {
      const result = await axios("/api/grader/ann");
      setData(result.data);
    };
    GetData();
    console.log(data);
    console.log(props.onSuccess);
  }, [props.update]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);

    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          className={classes.tableRow}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}> Id</TableCell>
              <TableCell
                width="25%"
                className={classes.tableHeader}
                align="left"
              >
                Title
              </TableCell>
              <TableCell
                width="45%"
                className={classes.tableHeader}
                align="left"
              >
                Description
              </TableCell>
              <TableCell className={classes.tableHeader} align="left">
                Admin{" "}
              </TableCell>
              <TableCell className={classes.tableHeader} align="left">
                Created At{" "}
              </TableCell>
              <TableCell className={classes.tableHeader} align="left">
                Edit{" "}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      width="25%"
                      align="left"
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      width="45%"
                      align="left"
                    >
                      {shorten(row.description, 130)}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {row.displayname}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      width="16%"
                      align="left"
                    >
                      {row.time}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      <AnnEdit
                        onSuccess={props.onSuccess}
                        id={row.id}
                        title={row.title}
                        description={row.description}
                        visible={row.isvisible}
                        adminid={row.adminid}
                      ></AnnEdit>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        classes={{
          toolbar: classes.toolbar,
          caption: classes.caption,
        }}
      />
    </Paper>
  );
};
export default AnnTable;
