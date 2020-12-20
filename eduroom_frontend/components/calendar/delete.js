import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import axios from '../../api'
import Image from 'next/image'

const DeleteButton = (props) => {
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
		window.location.reload()
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = () => {
		axios
			.delete('/api/event/dEvent', {
				params: {
					id: props.id,
				},
			})
			.then(function (response) {
				setOpen(false)
				setTimeout(() => {
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

	return (
		<span>
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
				<Image src="/images/graderCreate/del.svg" width="20" height="20" />
			</button>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">
					{' '}
					<span>Are you sure?</span>
				</DialogTitle>

				<DialogContent>
					<DialogContentText>
						<span>Are you sure to delete this Event</span>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						<span>Cancel</span>
					</Button>
					<Button onClick={handleSubmit} color="primary">
						<span>Confrim</span>
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog open={submitStatus.success} onClose={statusClose}>
				<DialogTitle>
					<span>Success!</span>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<span> The Event have been deleted.</span>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={statusClose} color="primary" autoFocus>
						<span>Ok</span>
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog open={submitStatus.failed} onClose={statusClose}>
				<DialogTitle>
					<span>Opps.... Something went wrong!</span>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<span> Come back again later...</span>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={statusClose} color="primary" autoFocus>
						<span>Ok</span>
					</Button>
				</DialogActions>
			</Dialog>
		</span>
	)
}
export default DeleteButton
