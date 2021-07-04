import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import axios from '../../../../api'
import Chip from '@material-ui/core/Chip'
import { AddQuestionAutocomplete, sTitle, sText, sButtionandVisbile } from '../../materialUIStyle'

const AddExistingQuestionButton = (props) => {
	const [data, setData] = useState([])
	const [addquestion, setAddquestion] = useState([])
	useEffect(() => {
		const GetData = async () => {
			const result = await axios.get('/api/grader/addexistingquestion', {
				params: { conno: props.conno },
			})
			setData(result.data)
		}

		GetData()
	}, [props.update])
	const [open, setOpen] = useState(false)
	const [submitStatus, setSubmitStatus] = useState({
		success: false,
		failed: false,
	})

	const statusClose = () => {
		props.onSuccess()
		setSubmitStatus({
			success: false,
			failed: false,
		})
		setAddquestion([])
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		props.onSuccess()
	}

	const handleSubmit = () => {
		let question = addquestion
		delete question.title
		const finalQuestion = [...new Set(question)]
		let adminid = '12345678-1234-1234-1234-123456789123' //TODO

		axios
			.post('/api/grader/ccontestexistquestion', {
				conno: props.conno,
				questions: finalQuestion,
				adminid: adminid,
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
			<Chip
				label="Add Existing Question"
				onClick={handleClickOpen}
				style={{
					backgroundColor: '#a880f7',
					marginTop: -15,
					marginLeft: 20,
					color: 'white',
					height: 30,
					width: 250,
					fontFamily: 'Quicksand , sans-serif',
					fontSize: '1.2em',
					fontWeight: '600',
				}}
			/>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">
					{' '}
					<span style={sTitle}>Select your questions</span>
				</DialogTitle>

				<DialogContent>
					<DialogContentText component="div">
						<span style={sText}>Select what question you want from the question libary here</span>
						<div style={{ height: 25 }}></div>
						<AddQuestionAutocomplete
							multiple
							filterSelectedOptions
							disableCloseOnSelect
							options={data}
							getOptionLabel={(option) => option.id + '. ' + option.title}
							value={addquestion}
							onChange={(event, newValue) => {
								setAddquestion(newValue)
							}}
							renderInput={(params) => <TextField {...params} placeholder="Add Question" />}
						/>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						<span style={sButtionandVisbile}>Cancel</span>
					</Button>
					<Button onClick={handleSubmit} color="primary">
						<span style={sButtionandVisbile}>Confrim</span>
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog open={submitStatus.success} onClose={statusClose}>
				<DialogTitle>
					<span style={sTitle}>Success!</span>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<span style={sText}> The Questions has been added to the contest.</span>
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
		</span>
	)
}
export default AddExistingQuestionButton
