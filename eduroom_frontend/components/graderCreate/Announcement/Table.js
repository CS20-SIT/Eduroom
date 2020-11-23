import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "../../../api";
import AnnEdit from "./Edit";
import { useState, useEffect } from "react";
import { shorten, announcementTableStyles } from "../materialUIStyle";

const AnnTable = (props) => {
  const classes = announcementTableStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      let result = "";
      if (props.conid == undefined) {
        result = await axios("/api/grader/ann");
      } else {
        const conid = props.conid;
        result = await axios.get("/api/grader/contestann", {
          params: { conid },
        });
      }
      setData(result.data);
    };
    GetData();
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
              <TableCell className={classes.tableHID}> Id</TableCell>
              <TableCell
                width="20%"
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
              <TableCell className={classes.tableHEdit} align="left">
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
                      className={classes.tableId}
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
                      width="40%"
                      align="left"
                    >
                      {shorten(row.description, 130)}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {row.displayname}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      width="22%"
                      align="left"
                    >
                      {row.time}
                    </TableCell>
                    <TableCell className={classes.tableEdit} align="left">
                      <AnnEdit
                        onSuccess={props.onSuccess}
                        coannno={row.coannno}
                        conid={row.conid}
                        id={row.id}
                        title={row.title}
                        description={row.description}
                        visible={row.isvisible}
                        adminid={row.adminid} // TODO change to cookies
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
          selectRoot: classes.select,
          menuItem: classes.menuItem,
          actions: classes.actions,
        }}
      />
    </Paper>
  );
};
export default AnnTable;
