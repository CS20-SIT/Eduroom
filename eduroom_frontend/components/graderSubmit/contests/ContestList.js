import React from 'react'
import style from '../../../styles/graderSubmit/contests/contestList'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { differenceInMinutes, parseISO, format } from 'date-fns'

const Contests = (props) => {
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

	return (
		<div
			className="contest-list"
			onClick={() => {
				router.push(`/graderSystem/contest/${props.id}`)
			}}
		>
			<div className="top">
				<div className="top-left">
					<Link href="/graderSystem/contest">
						<h2>{props.title}</h2>
					</Link>
				</div>
				<div className="top-right">
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
						<p>ACM</p>
					</div>
				</div>
			</div>
			<div className="bottom">
				{props.description.length > 1200 ? props.description.slice(0, 480) + '...' : props.description}
			</div>

			<style jsx>{style}</style>
		</div>
	)
}
export default Contests
