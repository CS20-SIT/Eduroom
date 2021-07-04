import { Component } from 'react'
import Qsample from './SampleEach'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

class Form extends Component {
	no = 0
	_isMounted = false
	constructor(props) {
		super(props)

		this.state = {
			questionSample: [
				{
					index: this.no,
					inputsample: '',
					outputsample: '',
				},
			],
		}
	}

	handleSet = (old, adder) => {
		this.setState({ questionSample: old })
		this.no += adder
	}
	handleChange = (e) => {
		if (['inputsample', 'outputsample'].includes(e.target.name)) {
			let questionSample = [...this.state.questionSample]
			questionSample[e.target.dataset.id][e.target.name] = e.target.value
		} else {
			this.setState({ [e.target.name]: e.target.value })
		}

		this.props.handleSample(this.state.questionSample)
	}
	addNewRow = (e) => {
		this.no++
		// just add new empty row
		this.setState((prevState) => ({
			questionSample: [
				...prevState.questionSample,
				{
					index: this.no,
					inputsample: '',
					outputsample: '',
				},
			],
		}))
	}

	deteteRow = (index) => {
		this.no--
		this.setState({
			questionSample: this.state.questionSample.filter((s, sindex) => index !== sindex),
		})
	}

	clickOnDelete(record) {
		this.setState({
			questionSample: this.state.questionSample.filter((r) => r !== record),
		})
	}
	componentDidUpdate(prevProps, prevState) {
		this._isMounted = true

		if ((prevState.questionSample !== this.state.questionSample) & this._isMounted) {
			this.props.handleSample(this.state.questionSample)
		}
	}
	render() {
		let { questionSample } = this.state
		return (
			<form onChange={this.handleChange}>
				<div className="row" style={{ marginTop: 20 }}>
					<div className="col-sm-10">
						<div className="card">
							<div style={{ marginLeft: '4%', marginBottom: 15, paddingTop: 10 }}>
								<span
									style={{
										fontFamily: 'Quicksand , sans-serif',
										color: '#3d467f',
										fontWeight: 'bold',
										fontSize: '1.2em',
									}}
								>
									Question Sample
								</span>
								<Chip
									label=" + ADD"
									onClick={this.addNewRow}
									style={{
										backgroundColor: '#FC8FC3',
										marginLeft: 20,
										marginBottom: 10,
										color: 'white',
										height: 25,
										width: 120,
										fontFamily: 'Quicksand , sans-serif',
										fontSize: '1.0em',
										fontWeight: 'bold',
									}}
								/>
							</div>
						</div>
					</div>
					<Grid container direction="row" justify="center" alignItems="center">
						{' '}
						<Grid item xs={12}>
							{' '}
							<Qsample
								set={this.handleSet}
								add={this.addNewRow}
								delete={this.clickOnDelete.bind(this)}
								questionSample={questionSample}
								id={this.props.id}
							/>
						</Grid>
						<Grid item xs={12}></Grid>
						<Grid item xs={12}>
							<div style={{ height: 12 }}></div>
						</Grid>
					</Grid>
				</div>
			</form>
		)
	}
}
export default Form
