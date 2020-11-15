import React, { Fragment } from 'react'
import style from '../../../styles/graderSubmit/contests/contestPageList'
import { useRouter } from 'next/router'
import { compareAsc, format } from 'date-fns'

import { differenceInMinutes, parseISO } from 'date-fns'

const ContestList = (props) => {
	const router = useRouter()

	const duration = (props) => {
		let startTime = parseISO(props.starttime)
		let endTime = parseISO(props.endtime)
		let contestDuration = parseInt(differenceInMinutes(endTime, startTime))
		if (contestDuration == 1) {
			return contestDuration + ' minute'
		} else if (contestDuration < 60) {
			return contestDuration + ' minutes'
		} else if (contestDuration == 60) {
			contestDuration /= 60
			return String(contestDuration).split('.')[0] + ' hour'
		} else {
			contestDuration /= 60
			return String(contestDuration).split('.')[0] + ' hours'
		}
	}
	const contestStatus = (props) => {
		console.log(props.endtime)
		let presentTime = compareAsc(parseISO(props.endtime), new Date())

		if (presentTime == 1) {
			return (
				<div
					style={{
						display: 'flex',
						margin: '8px 8px 0 0',
						padding: '0.25rem 0.75rem',
						border: '1px solid #3d467f',
						borderRadius: '100px',
					}}
				>
					<img src="../../../images/graderSubmit/statusTrue.svg" style={{ marginRight: '10px' }} />
					<div
						style={{
							fontSize: '0.875rem',
							fontWeight: '500',
							color: '#3d467f',
						}}
					>
						Underway
					</div>
				</div>
			)
		} else {
			return (
				<div
					style={{
						display: 'flex',
						margin: '8px 8px 0 0',
						padding: '0.25rem 0.75rem',
						border: '1px solid #f39ac4',
						borderRadius: '100px',
					}}
				>
					<img src="../../../images/graderSubmit/statusFalse.svg" style={{ marginRight: '10px' }} />
					<div
						style={{
							fontSize: '0.875rem',
							fontWeight: '500',
							color: '#f39ac4',
						}}
					>
						Ended
					</div>
				</div>
			)
		}
	}

	return (
		<Fragment>
			<div
				className="box contest-list"
				onClick={() => {
					router.push(`/graderSystem/contest/${props.id}`)
				}}
			>
				<img src="../../../images/graderSubmit/trophy.svg" className="trophy" />
				<div className="content">
					<p className="contest-name">{props.title}</p>
					<div className="detail">
						<div className="date">
							<img src="../../images/graderSubmit/calendarIcon.svg" />
							<p>{format(Date.parse(props.starttime), 'P') + ' ' + format(Date.parse(props.starttime), 'pp')}</p>
						</div>
						<div className="duration">
							<img src="../../images/graderSubmit/clockIcon.svg" />
							<p>{duration(props)}</p>
						</div>
						<div className="type">
							<img src="../../images/graderSubmit/mortarBoardIcon.svg" />
							<p>{props.conruletype.toUpperCase()}</p>
						</div>
					</div>
				</div>
				<div className="status">{contestStatus(props)}</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ContestList
