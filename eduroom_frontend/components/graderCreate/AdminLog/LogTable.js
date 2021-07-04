import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import axios from '../../../api'
import { useState, useEffect } from 'react'
import { shorten, logTableStyles } from '../materialUIStyle'

const LogTable = (props) => {
	const classes = logTableStyles()
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	const [data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const result = await axios('/api/grader/alladminlog')
			setData(result.data)
		}
		GetData()
	}, [])

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
				<Table className={classes.tableRow} stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.tableHID}> Log No</TableCell>
							<TableCell width="20%" className={classes.tableHeader} align="left">
								Action
							</TableCell>
							<TableCell width="30%" className={classes.tableHeader} align="left">
								On
							</TableCell>
							<TableCell className={classes.tableHeader} align="left">
								Admin{' '}
							</TableCell>
							<TableCell className={classes.tableHEdit} align="left">
								Timestamp{' '}
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
							return (
								<TableRow key={row.logno}>
									<TableCell className={classes.tableId} width="12%" component="th" scope="row" align="center">
										{row.logno}
									</TableCell>
									<TableCell className={classes.tableCell} width="25%" align="left">
										{row.title}
									</TableCell>
									<TableCell className={classes.tableCell} width="40%" align="left">
										{shorten(row.detail, 100)}
									</TableCell>
									<TableCell className={classes.tableCell} align="left">
										{row.displayname}
									</TableCell>
									<TableCell className={classes.tableEdit} width="30%" align="left">
										{row.timestamp}
									</TableCell>
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
				classes={{
					toolbar: classes.toolbar,
					caption: classes.caption,
					// select: classes.select,
					selectRoot: classes.select,
					menuItem: classes.menuItem,
					actions: classes.actions,
				}}
			/>
		</Paper>
	)
}
export default LogTable
