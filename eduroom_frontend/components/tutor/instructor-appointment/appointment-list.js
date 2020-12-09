import React, { Fragment, useState } from 'react'
import utils from '../../../styles/tutor/utils'

import { timeFormatter, monthConverter } from '../lib/utils'

const Header = ({ appointments, requestMode, renderIcon, setAID, setAppointment }) => {
	console.log(appointments)

	return (
		<Fragment>
			{appointments[requestMode].map((a, i) => (
				<div key={i} className="grid-container-body bg-white-faded shadow rounded-sm">
					<div className="font-bold text-lg">
						{a.name}{' '}
						{a.members.length > 0 ? <span className="mx-2 text-md text-secondary"> + {a.members.length}</span> : ''}
					</div>
					<div className="font-bold text-md text-secondary my-auto font-quicksand">
						{a.date[0]} {monthConverter(a.date[1] - 1).substring(0, 3)} {a.date[2]}
					</div>
					<div className="font-bold text-md text-secondary my-auto font-quicksand">
						{timeFormatter(a.starttime)}-{timeFormatter(a.endtime)}
					</div>
					<div
						className={`font-bold text-md my-auto font-quicksand ${
							a.status == 'Approved' ? 'text-navy' : a.status == 'Pending' ? 'text-yellow' : 'text-error'
						}`}
					>
						{a.status}
					</div>
					<div
						className="font-bold text-md text-secondary my-auto font-quicksand px-4 pointer"
						onClick={() => {
							setAID(a.appointmentID)
							const app = appointments[0].filter((x) => {
								return x.appointmentID == a.appointmentID
							})
							setAppointment(...app)
						}}
					>
						{renderIcon()}
					</div>
				</div>
			))}
			<style jsx>{utils}</style>
			<style jsx>{`
				.grid-container-body {
					width: 100%;
					display: grid;
					grid-template-columns: 2.5fr 1.25fr 1.75fr 1.25fr 0.5fr;
					padding: 2rem;
					margin: 1rem 0;
				}
			`}</style>
		</Fragment>
	)
}
export default Header
