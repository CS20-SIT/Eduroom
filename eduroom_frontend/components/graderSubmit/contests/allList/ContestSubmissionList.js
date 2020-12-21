import { Fragment } from 'react'
import style from '../../../../styles/graderSubmit/contests/contestPage/submission/contestSubmissionList'
import { format } from 'date-fns'

const ContestSubmission = (props) => {
	const colorize = (props) => {
		if (props != null) {
			switch (props.status.toLowerCase()) {
				case 'accepted':
					return 'a'
				case 'partial accepted':
					return 'pa'
				case 'wrong answer':
					return 'wa'
				case 'compilation error':
					return 'ce'
				case 'time limit exceed':
					return 'tle'
				case 'memory limit exceed':
					return 'mle'
				case 'runtime error':
					return 're'
				default:
					return 'pending'
			}
		} else {
			return 'status'
		}
	}

	return (
		<Fragment>
			{props != null ? (
				<div className="flex-container">
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{format(Date.parse(props.submitTime), 'P') + ' ' + format(Date.parse(props.submitTime), 'pp')}
					</div>
					<div className="flex-item" style={{ flexBasis: '25%' }}>
						{props.author}
					</div>
					<div className={`flex-item ${colorize(props)}`} style={{ flexBasis: '20%' }}>
						{props.status}
					</div>
					<div className="flex-item" style={{ flexBasis: '10%' }}>
						{props.score}
					</div>
					<div className="flex-item" style={{ flexBasis: '10%' }}>
						{props.time + ' ms'}
					</div>
					<div className="flex-item" style={{ flexBasis: '10%' }}>
						{props.memory + ' MB'}
					</div>
					<div className="flex-item" style={{ flexBasis: '10%' }}>
						{props.problem}
					</div>
				</div>
			) : null}
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ContestSubmission
