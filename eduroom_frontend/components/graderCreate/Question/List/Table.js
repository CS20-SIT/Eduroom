import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import axios from '../../../../api'
import Image from 'next/image'
import DeleteQuestion from './DeleteButton'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { questionTableStyles } from '../../materialUIStyle'

const AnnTable = (props) => {
	const router = useRouter()
	const classes = questionTableStyles()
	const [page, setPage] = useState(0)

	const conno = router.query.conno

	const [rowsPerPage, setRowsPerPage] = useState(5)
	const [data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			if (props.conno == undefined) {
				const result = await axios.get('/api/grader/allquestion')
				setData(result.data)
			} else {
				const result = await axios.get('/api/grader/contestquestion', {
					params: { conno: props.conno },
				})
				setRowsPerPage(20)
				setData(result.data)
			}
		}
		GetData()
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
				<Table className={classes.tableRow} stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell width="10%" className={classes.tableHID}>
								{props.conno == undefined ? 'Id' : 'No.'}
							</TableCell>
							<TableCell width="35%" className={classes.tableHeader} align="left">
								Title
							</TableCell>
							<TableCell width="10%" className={classes.tableHeader} align="left">
								Difficulty
							</TableCell>
							<TableCell className={classes.tableHeader} align="left">
								Admin{' '}
							</TableCell>
							<TableCell className={classes.tableHeader} align="center">
								Visible
							</TableCell>
							<TableCell className={classes.tableHEdit} align="center">
								<span style={{ marginLeft: 18 }}>Edit </span>
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
							return (
								<TableRow key={row.id}>
									<TableCell className={classes.tableId} component="th" scope="row">
										{props.conno == undefined ? row.id : row.conquestionno}
									</TableCell>
									<TableCell className={classes.tableCell} width="35%" align="left">
										{row.title}
									</TableCell>
									<TableCell className={classes.tableCell} width="15%" align="left">
										{row.difficulty}
									</TableCell>
									<TableCell width="15%" className={classes.tableCell} align="left">
										{row.displayname}
									</TableCell>
									<TableCell className={classes.tableCell} width="22%" align="center">
										{row.visibility ? (
											<i style={{ marginLeft: 20 }} className="fa fa-eye"></i>
										) : (
											<i style={{ marginLeft: 20 }} className="fa fa-eye-slash"></i>
										)}
									</TableCell>
									<TableCell className={classes.tableEdit} align="center">
										<Grid container direction="row">
											<Grid item sm={6}>
												<button
													style={{
														padding: 0,
														border: 'none',
														background: 'none',
														cursor: 'pointer',
													}}
													onClick={() => {
														router.push(`/admin/grader/question/edit/${row.id}`)
													}}
												>
													{' '}
													<Image src="/images/graderCreate/edit.svg" width="20" height="20" />
												</button>
											</Grid>

											<Grid item sm={6}>
												<DeleteQuestion
													conno={conno}
													onSuccess={props.onSuccess}
													id={row.id}
													title={row.title}
													adminid={row.adminid}
												></DeleteQuestion>
											</Grid>
										</Grid>
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
					selectRoot: classes.select,
					menuItem: classes.menuItem,
					actions: classes.actions,
				}}
			/>
		</Paper>
	)
}
export default AnnTable
