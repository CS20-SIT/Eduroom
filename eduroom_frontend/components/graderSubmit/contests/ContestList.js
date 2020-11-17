import React from 'react'
import style from '../../../styles/graderSubmit/contests/contestList'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Contests = (props) => {
	const router = useRouter()

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
						<h2>Contests Name</h2>
					</Link>
				</div>
				<div className="top-right">
					<div className="date">
						<img src="../../images/graderSubmit/calendarIcon.svg" />
						<p>2020-10-22 09.00</p>
					</div>
					<div className="duration">
						<img src="../../images/graderSubmit/clockIcon.svg" />
						<p>Duration</p>
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
