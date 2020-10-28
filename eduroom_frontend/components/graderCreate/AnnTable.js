import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import axios from 'axios'
import { useState, useEffect } from 'react'

const useStyles = makeStyles({
  root: {
   
    margin: '10%',
    width: '80%',
    
  },
  container: {
    
    maxHeight: 440,
  },
  test : {
    'font-family': 'Quicksand , sans-serif',
    borderBottom: "none"
  }
})
const shorten = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return text.substr(0, maxLength) + "...";
  }

  return text;
};
const AnnTable = (props) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    const GetData = async () => {
      const result = await axios('http://localhost:3000/api/grader/ann')
      setData(result.data)
    }
    GetData()
    console.log(data)
  }, [props.update])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)

    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>

              <TableCell align="right">Title</TableCell>

              <TableCell className={classes.test} align="right">Description</TableCell>

              <TableCell align="right">Admin ID</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                 
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>

                    <TableCell align="right">{row.title}</TableCell>

                    <TableCell align="right">{shorten(row.description,30)}</TableCell>  

                    <TableCell align="right">{row.adminid}</TableCell>
                  </TableRow>
                )
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
      />
    </Paper>
  )
}
export default AnnTable