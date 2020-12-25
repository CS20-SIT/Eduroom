import React from 'react'
import { Fragment, useEffect, useState, useContext } from 'react'
import {
	Grid,
	Button,
	Container,
	Typography,
	CssBaseline,
	makeStyles,
	createMuiTheme,
	ThemeProvider,
	Select,
	Paper,
	MenuItem,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import api from '../../api'
const commentForPost = (props) => {
	const [reviewInfo, setReviewInfo] = useState({
		rate: 5,
		comment: '',
	})
	const handleRate = (e) => {
		setReviewInfo({
			...reviewInfo,
			rate: e.target.value,
		})
	}
	const handleComment = (e) => {
		setReviewInfo({
			...reviewInfo,
			comment: e.target.value,
		})
	}
	const handleSubmit = (e) => {
		try {
			api.post('/api/review/create', { courseid: props.id, type: props.type, ...reviewInfo })
		} catch (err) {}
	}
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
			marginBottom: '10px',
			color: theme.palette.text.secondary,
		},
	}))
	const classes = useStyles()
	const theme = createMuiTheme({
		typography: {
			fontFamily: 'Quicksand',
		},
	})
	return (
		<Fragment>
			<div className={classes.root} style={{ padding: '20px' }}>
				<Grid container spacing={3} variant="outlined">
					<Grid item xs={12}>
						<div className="rate">
							<input onChange={handleRate} type="radio" id="star5" name="rate" value="5" />
							<label for="star5" title="text">
								5 stars
							</label>
							<input onChange={handleRate} type="radio" id="star4" name="rate" value="4" />
							<label for="star4" title="text">
								4 stars
							</label>
							<input onChange={handleRate} type="radio" id="star3" name="rate" value="3" />
							<label for="star3" title="text">
								3 stars
							</label>
							<input onChange={handleRate} type="radio" id="star2" name="rate" value="2" />
							<label for="star2" title="text">
								2 stars
							</label>
							<input onChange={handleRate} type="radio" id="star1" name="rate" value="1" />
							<label for="star1" title="text">
								1 star
							</label>
						</div>
						<TextField
							id="outlined-full-width"
							name="comment"
							style={{ marginTop: 8 }}
							placeholder="Add a comment ..."
							fullWidth
							multiline
							rows={5}
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							value={reviewInfo.comment}
							onChange={handleComment}
							type="text"
							variant="outlined"
							color="rgba(242, 236, 254, 0.2)"
							border="2px solid #3D467F"
						/>
						{/* {alert.comment ? (
							<span style={{ color: 'red', fontSize: '2px' }}>Star-rate and Comment is required</span>
						) : null} */}
						<Grid container spacing={0} alignItems="center" justify="flex-end">
							<div className="post">
								<Grid item xs={2} sm={2}>
									<Button
										type="submit"
										variant="contained"
										color={'primary'}
										onClick={handleSubmit}
										className={classes.submit}
									>
										Send
									</Button>
								</Grid>
							</div>
						</Grid>
						{/* </Paper> */}
					</Grid>
				</Grid>
				<div style={{ marginTop: '30px', marginLeft: '6.7%', marginRight: '5%', marginBottom: '30px' }}>
					<div
						style={{
							width: '1016px',
							height: '0px',
							left: '243px',
							border: '1px solid #7B89DD',
							backgroundColor: '#7B89DD',
						}}
					/>
				</div>
			</div>
			{/* </div> */}
			<style>
				{`
         .post{
          display:flex;
          justifyContent:flex-end;
         }
            `}
			</style>
		</Fragment>
	)
}
export default commentForPost
