import React, { Fragment, useState } from 'react'
import utils from '../../../styles/tutor/utils'

import { monthConverter, timeFormatter } from '../lib/utils'

import api from '../../../api'

const BookingInfo = ({ bookingGroup, setBookingGroup, instructor, times, date, month, year, students }) => {
	const post = async (id, startTime, endTime, price, members) => {
		const res = await api.post('/api/tutor/student/appointments', {
			id,
			startTime,
			endTime,
			price,
			members,
		})
		console.log(res)
	}
	return (
		<Fragment>
			{instructor && (
				<div className={`w-full px-8 py-8 my-2 mx-4 shadow rounded-md bg-white-faded`}>
					<div className="text-lg font-bold font-lato spacing-md">BOOK AND PAY</div>
					<div className="text-md font-bold font-lato my-4 spacing-sm">Your Enrollment</div>
					<div className="px-2 my-4">
						<div className="text-sm font-bold font-lato my-2 spacing-sm">Date</div>
						{date == -1 ? (
							<div className="text-sm font-quicksand font-bold text-secondary my-1 spacing-sm">Please select date</div>
						) : (
							<div className="text-sm font-quicksand font-bold text-secondary my-1 spacing-sm">
								{date} {monthConverter(month)} {year}
							</div>
						)}
					</div>
					<div className="px-2 my-4">
						<div className="text-sm font-bold font-lato my-2 spacing-sm">Time</div>
						{times.length == 0 ? (
							<div className="text-sm font-quicksand font-bold text-secondary my-1 spacing-sm">
								Please select appointment times
							</div>
						) : (
							<div className="text-sm font-quicksand font-bold text-secondary my-1 spacing-sm">
								{timeFormatter(times[0])} - {timeFormatter(times[times.length - 1] + 1)}
							</div>
						)}
					</div>
					<div className="px-2 my-4">
						<div className="text-sm font-bold font-lato my-2 spacing-sm">Cost</div>
						<div className="text-sm font-quicksand font-bold text-secondary my-1 spacing-sm">
							{times.length * instructor.price * (students.length + 1)} THB
						</div>
					</div>
					{bookingGroup ? (
						''
					) : (
						<div
							className={`font-lato font-bold text-md border-navy bg-white rounded-md py-2 my-4 mx-8 flex justify-center pointer text-navy`}
							onClick={() => {
								setBookingGroup(true)
							}}
						>
							Book with Friends
						</div>
					)}
					<div
						className={`font-lato font-bold text-md border-navy bg-white rounded-md py-2 mx-8 flex justify-center text-navy ${
							times.length == 0 ? 'disabled' : 'pointer'
						}`}
						onClick={() => {
							if (times.length == 0) return
							// POST  /api/tutor/student/appointment
							// console.log('id', instructor.id)
							// console.log('startTime', `${year}-${date}-${month + 1} ${times[0]}:00:00`)
							// console.log('endTime', `${year}-${date}-${month + 1} ${times[times.length - 1] + 1}:00:00`)
							// console.log('price', times.length * instructor.price * (students.length + 1))
							// console.log('members', students)
							post(
								instructor.id,
								`${year}-${month + 1}-${date} ${times[0]}:00:00`,
								`${year}-${month + 1}-${date} ${times[times.length - 1] + 1}:00:00`,
								times.length * instructor.price * (students.length + 1),
								students
							)
							location.reload()
						}}
					>
						Book!
					</div>
				</div>
			)}
			<style jsx>{utils}</style>
			<style jsx>{``}</style>
		</Fragment>
	)
}

export default BookingInfo
