import { Fragment, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import api from '../../../api'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'

const IdBlock = () => {
	const router = useRouter()
	const [data, setData] = useState([])
	const param = router.query.id || ''
	const GetData = async () => {
		try {
			if (param != '') {
				const result = await api.get(`/api/support/${param}`)
				console.log(result.data.data)
				setData(result.data.data)
			}
		} catch (err) {}
	}
	useEffect(() => {
		GetData()
		console.log(data)
	}, [param])
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(3),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flexStart',
			// textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	}))

	const classes = useStyles()

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container spacing={3} variant="outlined">
					<Grid item xs={12} borderColor="#a27cef">
						<div>
							<Paper className={classes.paper} style={{ border: '2px solid #d5c1fc' }}>
								<div
									style={{
										fontSize: '25px',
										marginBottom: '20px',
										color: '#5B5B5B',
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>
										<b>{data.title}</b>
									</div>
								</div>

								<div>{data.description}</div>

								<div style={{ marginTop: '25px', fontSize: '13px', color: '#5b5b5b' }}>
									<p>
										{data.name} post in {moment(data.requesttime).fromNow()}
									</p>
								</div>
							</Paper>
						</div>
					</Grid>
				</Grid>
			</div>
			<style jsx>
				{`
					.button {
						cursor: pointer;
						opacity: 0.8;
						transition: 0.25s;
						display: flex;
						justify-content: end;
						flex-direction: row;
						align-items: flex-end;
					}
					.icon {
						display: flex;
						justify-content: end;
						flex-direction: row;
						align-items: flex-end;
					}
					div.edit-title {
						width: 80%;
					}
					div.edit-content {
						width: 80%;
					}
					.edit-content textarea {
						width: 100%;
						line-height: 32px;
						font-size: 1em;
						min-height: 160px;
						border: 0.13rem solid rgb(213, 193, 252);
						border-radius: 5px;
						padding: 0.25rem 0.5rem;
					}
					.edit-title input {
						width: 100%;
						line-height: 32px;
						font-size: 1.1em;
						font-weight: 500;
						border: 0.13rem solid rgb(213, 193, 252);
						border-radius: 5px;
						padding: 0.25rem 0.5rem;
					}
				`}
			</style>
		</Fragment>
	)
}
export default IdBlock
