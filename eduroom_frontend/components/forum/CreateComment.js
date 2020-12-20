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
import GeneralNoNav from '../../components/template/generalnonav'
import TextField from '@material-ui/core/TextField'
import api from '../../api'
import UserContext from '../../contexts/user/userContext'
import AuthDialog from '../../components/landing/authDialog'
const CreateComment = (props) => {
	const userContext = useContext(UserContext)
	const { user } = userContext
	const [dialog, setDialog] = useState(false)
	const [createForm, setForm] = useState({
		comment: '',
		id: props.id,
	})
	const [alert, setAlert] = useState({
		comment: false,
	})
	useEffect(() => {
		console.log('render')
	}, [])
	const handleChange = (e) => {
		e.preventDefault()
		setForm({ ...createForm, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (validator()) {
			console.log(createForm)
			if (user) {
				api.post('/api/forum/comment', createForm).then((res) => {
					console.log(res)
					setForm({ ...createForm, comment: '' })
					props.GetData()
					//router.push("/forum");
				})
			} else {
				setDialog(!dialog)
			}
		} else {
			console.log('Please write your comment')
		}
	}
	const validator = () => {
		let keys = Object.keys(createForm)
		let temp = { ...alert }
		let check = true
		for (let key of keys) {
			if (createForm[key] == '') {
				temp[key] = true
				check = false
				console.log(key)
			} else {
				temp[key] = false
			}
		}
		setAlert(temp)
		return check
	}
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		submit: {
			margin: theme.spacing(2, 0, 0),
			background: '#3d467f',
		},
		paper: {
			padding: theme.spacing(3),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			// textAlign: 'center',
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
			{dialog ? (
				<AuthDialog
					handleClick={() => {
						setDialog(false)
					}}
				/>
			) : null}
			<div className={classes.root}>
				<Grid container spacing={3} variant="outlined">
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<TextField
								id="outlined-full-width"
								name="comment"
								autoFocus
								style={{ marginTop: 8 }}
								placeholder="Your Comment ..."
								fullWidth
								multiline
								rows={5}
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
								value={createForm.comment}
								onChange={handleChange}
								error={alert.comment}
								type="text"
								variant="outlined"
								color="#fe75b7"
							/>
							{alert.comment ? <span style={{ color: 'red', fontSize: '0.8em' }}>comment is required</span> : null}
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
											Post
										</Button>
									</Grid>
								</div>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</div>

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
export default CreateComment
