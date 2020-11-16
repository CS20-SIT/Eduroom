import React, { Fragment } from 'react'
import Icon from './Icon'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { useRouter } from 'next/router'
import api from '../../api'
import { useState, useEffect } from 'react'

const forumBlock = ({ row }) => {
	// const [create, setCreate] = useState('');
	const [data, setData] = useState([])
	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('/api/forum')
			console.log(result.data)
			setData(result.data.data)
		}
		GetData()
		console.log(data)
	}, [])
	const router = useRouter()
	const handleClick = (e) => {
		e.preventDefault()
		// router.push(`/forum/${}`)
	}
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flexStart',
			// textAlign: 'center',
			margin: '15px',
			color: theme.palette.text.secondary,
		},
	}))
	const classes = useStyles()
	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container spacing={3} variant="outlined">
					<Grid item xs={12}>
						<div>
							{data.map((row) => {
								return (
									<Paper
										className={classes.paper}
										style={{ paddingLeft: '35px', cursor: 'pointer' }}
										onClick={() => {
											router.push(`/forum/${row.forumid}`)
										}}
									>
										{/* <div  onClick={handleClick} className="button">
                  {props.createForm}
                  </div> */}
										<div style={{ fontWeight: '500', fontSize: '1.5em', color: '#5b5b5b' }}>{row.titlethread}</div>
										<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
											<div style={{ marginTop: '25px', fontSize: '13px', color: '#5b5b5b' }}>
												USER NUMBER : {row.userid}{' '}
											</div>
											<div style={{ marginTop: '25px', fontSize: '13px', color: '#5b5b5b', marginLeft: '12px' }}>
												DATE : {row.posttime}
											</div>
										</div>

										<div className="icon" style={{ bottom: 0, right: 0, marginTop: '20px' }}>
											<div style={{ paddingRight: '30px' }}>
												<Icon type="like" />
											</div>
											<div onClick={handleClick} style={{ paddingRight: '30px' }}>
												<Icon type="comment" />
											</div>
										</div>
									</Paper>
								)
							})}
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
						cursor: pointer;
					}
				`}
			</style>
		</Fragment>
	)
}
export default forumBlock
