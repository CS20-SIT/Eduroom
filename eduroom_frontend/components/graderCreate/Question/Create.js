import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from '@material-ui/core/Chip'
import axios from '../../../api'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import QSampleList from './SampleList'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
	contestformTheme,
	contestformStyles,
	sText,
	sTitle,
	sInputfield,
	sInput,
	sInputfieldDesc,
	sInputSelect,
	sError,
	sInputfieldSelect,
	sButtionandVisbile,
	sBigTitle,
	QuestionTagAutocomplete,
	splitTest,
} from '../materialUIStyle'
import { contestRules, timelims, memlims, diffs } from '../selectOptions'
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function Create(props) {
	const router = useRouter()
	const conno = router.query.conno
	const classes = contestformStyles()
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [inputdesc, setInputdesc] = useState('')
	const [outputdesc, setOutputdesc] = useState('')
	const [rule, setRule] = useState('oi')
	const [visible, setvisible] = useState(false)
	const [memory, setMemory] = useState(256)
	const [time, setTime] = useState(1000)
	const [check, setCheck] = useState(false)
	const [erorvalid, seterorValid] = useState(false)
	const [hint, setHint] = useState('')
	const [difficulty, setDiff] = useState('Easy')
	const [samples, setSample] = useState([])
	const [existTags, setExistTags] = useState([])
	const [oldTestcase, setoldTestcase] = useState('')
	const [oldTestcaseURL, setoldTestcaseURL] = useState('')
	useEffect(() => {
		const GetData = async () => {
			const result = await axios('/api/grader/alltag')
			setExistTags(result.data)

			if (props.id != undefined) {
				const id = props.id
				const oldData = await axios.get('/api/grader/question', {
					params: { id },
				})
				const detail = oldData.data[0]
				setTitle(detail.title)
				setDescription(detail.description)
				setInputdesc(detail.intputdes)
				setOutputdesc(detail.outputdes)
				setRule(detail.ruletype)
				setvisible(detail.visibility)
				setMemory(detail.memorylimit)
				setTime(detail.timelimit)
				setHint(detail.hint)
				setDiff(detail.difficulty)

				const testcase = await axios.get('/api/grader/questiontestcase', {
					params: { id },
				})

				let testcaseName = testcase.data[0] == undefined ? 'FILE NOT FOUND' : splitTest(testcase.data[0].filepath)
				setoldTestcase(testcaseName)
				setoldTestcaseURL(testcase.data[0].filepath)
				setFile(-1)

				const tag = await axios.get('/api/grader/questiontag', {
					params: { id },
				})

				const oldTag = tag.data
				setTags(oldTag)
			}
		}
		GetData()
	}, [])

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

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		seterorValid(false)
	}
	const handleSample = (s) => {
		setSample(s)
	}
	const handleTitle = (event) => {
		setTitle(event.target.value)
		setCheck(true)
	}
	const handleHint = (event) => {
		setHint(event.target.value)
	}
	const handleDesc = (event) => {
		setDescription(event.target.value)
	}
	const handleInputDesc = (event) => {
		setInputdesc(event.target.value)
	}
	const handleOutputDesc = (event) => {
		setOutputdesc(event.target.value)
	}
	const handleDiff = (event) => {
		setDiff(event.target.value)
	}
	const handleChangeRule = (event) => {
		setRule(event.target.value)
	}
	const handleChangeTime = (event) => {
		setTime(event.target.value)
	}
	const handleChangeMem = (event) => {
		setMemory(event.target.value)
	}
	const handleChangeStatus = (event) => {
		setvisible(event.target.checked)
	}

	const handleSubmit = () => {
		if (title == '' || selectedFile == null) {
			seterorValid(true)
			document.querySelector('body').scrollTo(0, 0)
		} else {
			let newtags = tags.filter((t) => {
				return typeof t === 'string'
			})

			let qexisttags = tags.filter((t) => {
				return typeof t !== 'string'
			})
			qexisttags = qexisttags.map((t) => {
				return t.tagid
			})
			const pnewTags = [...new Set(newtags)]
			const pqexistTags = [...new Set(qexisttags)]
			if (props.id == undefined) {
				axios
					.post('/api/grader/cquestion', {
						title: title,
						ruleType: rule,
						description: description,
						hint: hint,
						timeLimit: time,
						memoryLimit: memory,
						visibility: visible,
						adminid: '12345678-1234-1234-1234-123456789123', //TODO
						intputDes: inputdesc,
						outputDes: outputdesc,
						difficulty: difficulty,
						newTags: pnewTags,
						existTags: pqexistTags,
					})
					.then(function (response) {
						const id = response.data.id
						onHandlerFile(id)
						onHandlerSample(id)
						onHandlerContest(id)
					})
					.catch(function (error) {
						setTimeout(() => {
							setSubmitStatus({ ...submitStatus, failed: true })
						}, 450)
					})
			} else {
				axios
					.put('/api/grader/equestion', {
						title: title,
						ruleType: rule,
						description: description,
						hint: hint,
						timeLimit: time,
						memoryLimit: memory,
						visibility: visible,
						adminid: '12345678-1234-1234-1234-123456789123', //TODO
						intputDes: inputdesc,
						outputDes: outputdesc,
						difficulty: difficulty,
						newTags: pnewTags,
						existTags: pqexistTags,
						id: props.id,
					})
					.then(function (response) {
						const id = response.data.id
						onHandlerFile(id)
						onHandlerSample(id)
					})
					.catch(function (error) {
						setTimeout(() => {
							setSubmitStatus({ ...submitStatus, failed: true })
						}, 450)
					})
			}
		}
	}
	// so when send -> post the new tags into tagTable  first then post in Question Tag
	const [tags, setTags] = useState([])
	const handleKeyDown = (event) => {
		switch (event.key) {
			case ',':
			case ' ': {
				event.preventDefault()
				event.stopPropagation()
				if (event.target.value.length > 0) {
					setTags([...tags, event.target.value])
				}
				break
			}
			default:
		}
	}

	///Select Filed
	const [selectedFile, setFile] = useState(null)
	const [load, setLoad] = useState(0)
	const [fileError, setFileError] = useState('Invalid Files')
	const [checkError, setCheckError] = useState(false)
	const [checkFileSucess, setCheckFileSucess] = useState(false)
	const checkMimeType = (event) => {
		//getting file object
		let files = event.target.files
		let err = []
		let result = true
		// list allow mime type
		const types = ['application/zip', 'application/x-zip-compressed', 'application/zip-compressed']
		// loop access array
		for (var x = 0; x < files.length; x++) {
			// compare file type find doesn't matach
			if (types.every((type) => files[x].type !== type)) {
				// create error message and assign to container
				err[x] = files[x].type + ' is not a supported format\n'
				result = false
				setFileError('Invaild File Format!\n')
				setCheckError(true)
			}
		}
		for (var z = 0; z < err.length; z++) {
			// if message not same old that mean has error
			// discard selected file
			event.target.value = null
		}
		return result
	}
	const maxSelectFile = (event) => {
		let files = event.target.files
		if (files.length > 10) {
			setFileError('Only 10 Files can be uploaded at a time!\n')
			setCheckError(true)
			event.target.value = null
			return false
		}
		return true
	}
	const checkFileSize = (event) => {
		let files = event.target.files
		let size = 10 * 1024 * 1024
		let err = []
		for (var x = 0; x < files.length; x++) {
			if (files[x].size > size) {
				setFileError('Pick a smaller file!\n')
				setCheckError(true)
				err[x] = files[x].type + 'is too large, please pick a smaller file\n'
			}
		}
		for (var z = 0; z < err.length; z++) {
			// if message not same old that mean has error
			// discard selected file

			event.target.value = null
		}
		return true
	}
	const onChangeHandlerFile = (event) => {
		var files = event.target.files
		if (maxSelectFile(event) && checkMimeType(event) && checkFileSize(event)) {
			setFile(files)
			setLoad(0)
			setCheckFileSucess(true)
		}
	}
	const onHandlerFile = (id) => {
		const data = new FormData()

		if (selectedFile != null) {
			for (var x = 0; x < selectedFile.length; x++) {
				data.append('file', selectedFile[x])
				data.append('questionid', id)
			}
			if (props.id != undefined && selectedFile != -1) {
				axios.delete('/api/grader/dquestiontestcase', {
					params: {
						id: props.id,
					},
				})
			}
			if (selectedFile != -1) {
				axios
					.post('/api/grader/ptc', data, {
						onUploadProgress: (ProgressEvent) => {
							setLoad((ProgressEvent.loaded / ProgressEvent.total) * 100)
						},
					})
					.then((res) => {})
					.catch((err) => {
						setTimeout(() => {
							setSubmitStatus({ ...submitStatus, failed: true })
						}, 450)
					})
			}
		}
	}
	const onHandlerSample = (id) => {
		if (samples != []) {
			if (props.id != undefined) {
				axios
					.delete('/api/grader/dquestionsample', {
						params: {
							id: props.id,
						},
					})
					.then(() => {
						axios
							.post('/api/grader/cquestionsample', {
								samples: samples,
								questionId: id,
							})
							.then((res) => {
								setTimeout(() => {
									setSubmitStatus({ ...submitStatus, success: true })
								}, 450)
							})
							.catch((err) => {
								setTimeout(() => {
									setSubmitStatus({ ...submitStatus, failed: true })
								}, 450)
							})
					})
			} else {
				axios
					.post('/api/grader/cquestionsample', {
						samples: samples,
						questionId: id,
					})
					.then((res) => {
						setTimeout(() => {
							setSubmitStatus({ ...submitStatus, success: true })
						}, 450)
					})
					.catch((err) => {
						setTimeout(() => {
							setSubmitStatus({ ...submitStatus, failed: true })
						}, 450)
					})
			}
		}
	}

	const onHandlerContest = (id) => {
		if (conno != undefined) {
			axios
				.post('/api/grader/ccontestquestion', {
					conid: conno,
					questionid: id,
					adminid: '12345678-1234-1234-1234-123456789123', //TODO
					title: title,
				})

				.catch((err) => {
					setTimeout(() => {
						setSubmitStatus({ ...submitStatus, failed: true })
					}, 450)
				})
		}
	}
	const handleCloseFile = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setCheckError(false)
		setCheckFileSucess(false)
	}

	return (
		<div>
			<div className={classes.root}>
				<MuiThemeProvider theme={contestformTheme}>
					<Snackbar open={erorvalid} autoHideDuration={6000} onClose={handleClose}>
						<Alert style={sError} onClose={handleClose} severity="error">
							Invalid Information detected, Please Review your submission !
						</Alert>
					</Snackbar>

					<Grid container spacing={6}>
						<Grid item xs={10}>
							<span style={sBigTitle}>
								<span onClick={() => router.back()}>
									<i style={{ cursor: 'pointer' }} className="fa fa-arrow-left" aria-hidden="true"></i>
								</span>{' '}
								{props.id == null ? 'Create your Question' : `Edit Question No. ${props.id} `}
							</span>
						</Grid>
						<Grid item xs={2}>
							<FormControlLabel
								control={<Switch color="primary" checked={visible} onChange={handleChangeStatus} name="visible" />}
								label={<span style={sButtionandVisbile}>Visible</span>}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<div>
								<Paper className={classes.paper}>
									<TextField
										autoFocus
										margin="dense"
										id="title"
										label="Title"
										type="text"
										fullWidth
										value={title}
										onChange={handleTitle}
										required
										inputProps={{ maxLength: 50, style: sInputfield }}
										InputLabelProps={{ style: sInput }}
										error={title == '' && check}
										helperText={title == '' && check ? 'Title is Empty!' : ''}
									/>
								</Paper>{' '}
							</div>
						</Grid>
						<Grid item xs={12} sm={12}>
							<div>
								{' '}
								<div>
									{' '}
									<Paper className={classes.paper}>
										<TextField
											id="description"
											label="Description"
											type="text"
											margin="dense"
											fullWidth
											multiline
											rows={15}
											value={description}
											onChange={handleDesc}
											inputProps={{ maxLength: 1000, style: sInputfieldDesc }}
											InputLabelProps={{ style: sInput }}
										/>
									</Paper>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<Paper className={classes.paper}>
									<TextField
										multiline
										margin="dense"
										label="Input Description"
										type="text"
										fullWidth
										rows={5}
										value={inputdesc}
										onChange={handleInputDesc}
										inputProps={{ maxLength: 1000, style: sInputfieldDesc }}
										InputLabelProps={{ style: sInput }}
									/>
								</Paper>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<Paper className={classes.paper}>
									<TextField
										multiline
										margin="dense"
										label="Output Description"
										type="text"
										fullWidth
										rows={5}
										value={outputdesc}
										onChange={handleOutputDesc}
										inputProps={{ maxLength: 1000, style: sInputfieldDesc }}
										InputLabelProps={{ style: sInput }}
									/>
								</Paper>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<Paper className={classes.paper2}>
									<TextField
										fullWidth
										select
										required
										label="Time  Limit (MS)"
										value={time}
										onChange={handleChangeTime}
										// inputProps={{style:sInputfieldSelect }}
										InputLabelProps={{ style: sInputfieldSelect }}
									>
										{timelims.map((option) => (
											<MenuItem className={classes.menuitem} key={option.value} value={option.value}>
												<span style={sInputSelect}> {option.label}</span>
											</MenuItem>
										))}
									</TextField>
								</Paper>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<Paper className={classes.paper2}>
									{' '}
									<TextField
										fullWidth
										select
										required
										label="Memory  Limit (MB)"
										value={memory}
										onChange={handleChangeMem}
										// inputProps={{style:sInputfieldSelect }}
										InputLabelProps={{ style: sInputfieldSelect }}
									>
										{memlims.map((option) => (
											<MenuItem className={classes.menuitem} key={option.value} value={option.value}>
												<span style={sInputSelect}> {option.label}</span>
											</MenuItem>
										))}
									</TextField>
								</Paper>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<Paper className={classes.paper2}>
									<TextField
										fullWidth
										select
										required
										label="Difficulty"
										value={difficulty}
										onChange={handleDiff}
										InputLabelProps={{ style: sInputfieldSelect }}
									>
										{diffs.map((option) => (
											<MenuItem className={classes.menuitem} key={option.value} value={option.value}>
												<span style={sInputSelect}> {option.label}</span>
											</MenuItem>
										))}
									</TextField>
								</Paper>
							</div>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper2}>
								<div>
									<TextField
										fullWidth
										select
										required
										label="Rule"
										value={rule}
										onChange={handleChangeRule}
										// inputProps={{style:sInputfieldSelect }}
										InputLabelProps={{ style: sInputfieldSelect }}
									>
										{contestRules.map((option) => (
											<MenuItem className={classes.menuitem} key={option.value} value={option.value}>
												<span style={sInputSelect}> {option.label}</span>
											</MenuItem>
										))}
									</TextField>
								</div>{' '}
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<QSampleList id={props.id} handleSample={handleSample}></QSampleList>
						</Grid>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<TextField
									margin="dense"
									label="Hint"
									type="text"
									fullWidth
									multiline
									value={hint}
									onChange={handleHint}
									inputProps={{ maxLength: 1000, style: sInputfield }}
									InputLabelProps={{ style: sInput }}
								/>
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<div>
									<QuestionTagAutocomplete
										multiple
										freeSolo
										id="tags-outlined"
										options={existTags}
										getOptionLabel={(option) => option.tagname || option}
										value={tags}
										onChange={(event, newValue) => setTags(newValue)}
										filterSelectedOptions
										renderInput={(params) => {
											params.inputProps.onKeyDown = handleKeyDown
											params.inputProps.maxLength = 50
											return (
												<TextField
													{...params}
													label="Question Tags"
													placeholder="Add Tag"
													margin="normal"
													InputLabelProps={{ style: sInput }}
												/>
											)
										}}
									/>
								</div>
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Grid container direction="row" justify="center" alignItems="center">
									{' '}
									<Grid item xs={12}>
										<Snackbar open={checkError} autoHideDuration={6000} onClose={handleCloseFile}>
											<Alert style={sError} onClose={handleCloseFile} severity="error">
												{fileError}
											</Alert>
										</Snackbar>
										<Snackbar open={checkFileSucess} autoHideDuration={3000} onClose={handleCloseFile}>
											<Alert style={sError} onClose={handleCloseFile} severity="success">
												Selected {selectedFile ? selectedFile.length : ''} Files !
											</Alert>
										</Snackbar>
										<style jsx>{`
                  *:focus {
                    outline: none;
                  }
                  .custom-file-input::-webkit-file-upload-button {
                    visibility: hidden;
                    width: 800px;
                  }
                  .custom-file-input::before {
                    content: "Select Your Test Case File";
                    display: inline-block;
                    color: #a880f7;
                    width: 300px;
                    margin-left:21px;
                    /* padding: 5px 8px; */
                    outline: none;
                    white-space: nowrap;
                    -webkit-user-select: none;
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 1.5em;
                  }
                  .custom-file-input:hover::before {
                    border-color: black;
                    outline: none;
                  }
                  .custom-file-input:focus {
                    outline: none;
                  }
                  .img {
                    width:50,
                    height:50,
                  }
                `}</style>
										<input
											type="file"
											className="form-control"
											onChange={onChangeHandlerFile}
											className="custom-file-input"
											style={{
												width: 280,
												marginTop: 25,
												marginBottom: 10,
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<a
											style={{
												width: 300,
												marginTop: 25,
												marginLeft: 8,
												fontWeight: 'bold',
											}}
											href={oldTestcaseURL}
										>
											{selectedFile != null && selectedFile != -1
												? 'File recieved :  ' + selectedFile[0].name
												: props.id == undefined
												? 'Testcase file up to 10 MB in size are available for upload.'
												: oldTestcase}
										</a>
									</Grid>
									<Grid item xs={12}>
										<div style={{ height: 12 }}></div>
									</Grid>
								</Grid>
							</Paper>
							<Grid item xs={12}>
								<div style={{ height: 20 }}></div>
							</Grid>
						</Grid>

						<Grid item xs={12}>
							<center>
								<div>
									{' '}
									<Chip
										label={props.id == undefined ? 'Create' : 'Update'}
										onClick={handleSubmit}
										style={{
											backgroundColor: '#fb9ccb',
											marginBottom: 10,
											color: 'white',
											height: 35,
											width: 320,
											fontFamily: 'Quicksand , sans-serif',
											fontSize: '1.2em',
											fontWeight: 'bold',
										}}
									/>
								</div>
							</center>
							<Dialog open={submitStatus.success} onClose={statusClose}>
								<DialogTitle>
									<span style={sTitle}>Success!</span>
								</DialogTitle>
								<DialogContent>
									<DialogContentText>
										<span style={sText}>
											{' '}
											{props.id == undefined ? 'Your Question has been created.' : 'Question has been edited'}
										</span>
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button color="primary">
										<span style={sButtionandVisbile} onClick={() => router.back()}>
											<span style={{ cursor: 'pointer' }}>OK</span>
										</span>{' '}
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
									<Button onClick={statusClose} color="primary">
										<span style={sButtionandVisbile}>Ok</span>
									</Button>
								</DialogActions>
							</Dialog>
						</Grid>
					</Grid>
				</MuiThemeProvider>
			</div>
		</div>
	)
}
