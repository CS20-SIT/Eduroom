import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import axios from '../../../api'
import { useState, useEffect } from 'react'
import { sSampleInput, sSampleInputeHeader, sSampleInputfieldDesc, sampleEachStyles } from '../materialUIStyle'
const SampleCard = (props) => {
	const [data, setData] = useState(props.questionSample)
	useEffect(() => {
		if (props.id != undefined) {
			const id = props.id
			const GetData = async () => {
				const sample = await axios.get('/api/grader/questionsample', {
					params: { id },
				})
				const qSample = sample.data
				setData(sample.data)
				props.set(qSample, qSample.length)
			}
			GetData()
		} else {
			setData(props.questionSample)
		}
	}, [props.set])

	const classes = sampleEachStyles()
	return props.questionSample.map((r, i) => {
		return (
			<div key={i} className={classes.root}>
				<Paper className={classes.paper}>
					<div style={{ paddingTop: 25 }}></div>
					<Grid container direction="row" justify="center" alignItems="center" spacing={2} key={r.index}>
						<Grid item sm={11}>
							{' '}
							<span style={sSampleInputeHeader}>Example {i + 1}</span>
						</Grid>
						<Grid item sm={1}>
							{' '}
							<span style={{ cursor: 'pointer', marginLeft: '100' }}>
								{'\u00A0' + '\u00A0' + '\u00A0' + '\u00A0' + '\u00A0' + '\u00A0'}
								{i === 0 ? (
									<span></span>
								) : (
									<i onClick={() => props.delete(r)} className="fa fa-times" aria-hidden="true"></i>
								)}
							</span>
						</Grid>

						<Grid item sm={6}>
							<Paper elevation={0} className={classes.paper}>
								{' '}
								<TextField
									name="inputsample"
									margin="dense"
									label="Input"
									type="text"
									fullWidth
									defaultValue={r.inputsample}
									multiline
									inputProps={{
										'data-id': i,
										maxLength: 5000,
										style: sSampleInputfieldDesc,
									}}
									InputLabelProps={{ style: sSampleInput, shrink: true }}
								/>
							</Paper>
						</Grid>
						<Grid item sm={6}>
							<Paper elevation={0} className={classes.paper}>
								{' '}
								<TextField
									name="outputsample"
									margin="dense"
									label="Output"
									type="text"
									fullWidth
									defaultValue={r.outputsample}
									multiline
									inputProps={{
										'data-id': i,
										maxLength: 5000,
										style: sSampleInputfieldDesc,
									}}
									InputLabelProps={{ style: sSampleInput, shrink: true }}
								/>
							</Paper>
						</Grid>
					</Grid>
				</Paper>
			</div>
		)
	})
}
export default SampleCard
