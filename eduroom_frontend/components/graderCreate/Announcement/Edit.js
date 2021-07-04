import { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import axios from '../../../api'
import Image from 'next/image'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import MuiAlert from '@material-ui/lab/Alert'
import { sError, sTitle, sText, sInputfield, sInput, sButtionandVisbile } from '../materialUIStyle'

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}
const Edit = (props) => {
	const [erorvalid, seterorValid] = useState(false)
	const [open, setOpen] = useState(false)
	const [submitStatus, setSubmitStatus] = useState({
		success: false,
		failed: false,
	})

	const statusClose = () => {
		setSubmitStatus({
			success: false,
			failed: false,
		})
	}
	const handleErrorClose = (event, reason) => {
		seterorValid(false)
		if (reason === 'clickaway') {
			return
		}
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	//// admind id here!!!!!!!
	const [ann, setAnn] = useState({
		title: props.title,
		description: props.description,
		adminid: props.adminid,
	})
	const setDesc = (event) => {
		setAnn({ ...ann, description: event.target.value })
	}
	const setTitle = (event) => {
		setAnn({ ...ann, title: event.target.value })
	}
	const [visible, setVisible] = useState(props.visible)

	const handleChange = (event) => {
		setVisible(event.target.checked)
	}

	const handleSubmit = () => {
		if (ann.title == '') {
			seterorValid(true)
		} else {
			let backend = ''
			let data = {
				title: ann.title,
				description: ann.description,
				adminid: ann.adminid,
				isvisible: visible,
			}
			if (props.coannno == undefined) {
				backend = '/api/grader/eann'
				data.id = props.id
			} else {
				backend = '/api/grader/econtestann'
				data.coannno = props.coannno
				data.conid = props.conid
			}

			axios
				.put(backend, data)
				.then(function (response) {
					setOpen(false)

					setTimeout(() => {
						props.onSuccess()
						setSubmitStatus({ ...submitStatus, success: true })
					}, 450)
				})
				.catch(function (error) {
					setOpen(false)
					setTimeout(() => {
						setSubmitStatus({ ...submitStatus, failed: true })
					}, 450)
				})
		}

		setVisible(true)
	}

	return (
		<div>
			<button
				style={{
					padding: 0,
					border: 'none',
					background: 'none',
					cursor: 'pointer',
				}}
				onClick={handleClickOpen}
			>
				{' '}
				<Image src="/images/graderCreate/edit.svg" width="20" height="20" />
			</button>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">
					{' '}
					<span style={sTitle}>Edit Announcement</span>
				</DialogTitle>

				<DialogContent>
					<DialogContentText>
						<span style={sText}>Modify what you want here , remember to check everything before submitting</span>
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="title"
						label="Title"
						type="text"
						fullWidth
						value={ann.title}
						onChange={setTitle}
						required
						inputProps={{ maxLength: 50, style: sInputfield }}
						InputLabelProps={{ style: sInput }}
					/>

					<div style={{ height: 20 }}></div>
					<TextField
						id="standard-multiline-static"
						label="Description"
						multiline
						rows={10}
						fullWidth
						value={ann.description}
						onChange={setDesc}
						inputProps={{ style: sInputfield }}
						InputLabelProps={{ style: sInput }}
						required
					/>
					<div style={{ height: 30 }}></div>
					<FormControlLabel
						control={<Switch color="primary" checked={visible} onChange={handleChange} name="visible" />}
						label={<span style={sButtionandVisbile}>Visible</span>}
					/>
					<Snackbar open={erorvalid} autoHideDuration={6000} onClose={handleErrorClose}>
						<Alert style={sError} onClose={handleErrorClose} severity="error">
							Invalid Information detected, Please Review your submission !
						</Alert>
					</Snackbar>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						<span style={sButtionandVisbile}>Cancel</span>
					</Button>
					<Button onClick={handleSubmit} color="primary">
						<span style={sButtionandVisbile}>Submit</span>
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog open={submitStatus.success} onClose={statusClose}>
				<DialogTitle>
					<span style={sTitle}>Success!</span>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<span style={sText}> Your announcement has been edited.</span>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={statusClose} color="primary" autoFocus>
						<span style={sButtionandVisbile}>Ok</span>
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog open={submitStatus.failed} onClose={statusClose}>
				<DialogTitle>
					<span style={sTitle}>Opps.... Something went wrong!</span>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<span style={sText}> Come back again later...</span>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={statusClose} color="primary" autoFocus>
						<span style={sButtionandVisbile}>Ok</span>
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
export default Edit
