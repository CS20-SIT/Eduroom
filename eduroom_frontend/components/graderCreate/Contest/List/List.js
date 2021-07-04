import Pagination from '@material-ui/lab/Pagination'
import React from 'react'
import ConEach from './Each'
import axios from '../../../../api'
import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import { Box } from '@material-ui/core'
import { contestListStyles, shorten } from '../../materialUIStyle'

const Contestlist = () => {
	const [data, setData] = useState([])
	const itemsPerPage = 5
	const [page, setPage] = useState(1)
	const classes = contestListStyles()
	const handleChange = (event, value) => {
		setPage(value)
	}
	useEffect(() => {
		const GetData = async () => {
			const result = await axios('/api/grader/allcontest')
			setData(result.data)
		}
		GetData()
	}, [])

	return (
		<div>
			{data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((row) => {
				return (
					<ConEach
						key={row.conno}
						id={row.conno}
						title={row.title}
						description={shorten(row.description, 700)}
						starttime={'START : ' + format(Date.parse(row.starttime), "yyyy-MM-dd 'AT' HH:mm")}
						endtime={'END : ' + format(Date.parse(row.endtime), "yyyy-MM-dd 'AT' HH:mm")}
					></ConEach>
				)
			})}{' '}
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
					classes={{ ul: classes.paginator, root: classes.font }}
				/>
			</Box>
		</div>
	)
}

export default Contestlist
