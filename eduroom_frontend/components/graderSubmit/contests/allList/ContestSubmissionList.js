import { Fragment } from 'react'
import style from '../../../../styles/graderSubmit/contests/contestPage/submission/contestSubmissionList'
import { format } from 'date-fns'
import { useRouter } from 'next/router'

const ContestSubmission = (props) => {
	const router = useRouter()
	return (
		<Fragment>
			{props.time ? (
				<div
					className="flex-container"
					onClick={() => {
						router.push('/')
					}}
				>
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{format(Date.parse(props.time), 'P') + ' ' + format(Date.parse(props.time), 'pp')}
					</div>
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{props.author}
					</div>
					<div
						className={`${
							props.status.toLowerCase() === 'accepted'
								? 'accept'
								: props.status.toLowerCase() === 'partial accept'
								? 'partial'
								: 'wrong'
						} flex-item`}
						style={{ flexBasis: '20%' }}
					>
						{props.status}
					</div>
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{props.problem}
					</div>
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{props.language}
					</div>
				</div>
			) : null}
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ContestSubmission
