import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../../styles/tutor/utils'

import api from '../../../api'
import { monthConverter, timeFormatter } from '../lib/utils'

const Calendar = ({ date, setDate, month, setMonth, year, setYear, times, setTimes, id }) => {
	var now = new Date()

	const [availability, setAvailability] = useState(null)
	const fetchTimes = async (i) => {
		let res = await api.get('/api/tutor/instructor/availability', {
			params: { id, dates: `${year}-${month + 1}-${i}` },
		})

		setAvailability(res.data)
	}
	useEffect(() => {
		const fetchData = async () => {
			let res = await api.get('/api/tutor/instructor/availability', {
				params: { id, dates: `${year}-${month + 1}-${date}` },
			})
			setAvailability(res.data)
		}
		fetchData()
		return () => {
			setAvailability(null)
		}
	}, [])

	// SETUP DATE AND DAY
	const today = {
		date: now.getDate(),
		month: now.getMonth(),
		year: now.getFullYear(),
	}
	var first = new Date(year, month, 1)
	var last = new Date(year, month + 1, 0)
	var firstDate = first.getDate()
	var lastDate = last.getDate()
	var firstDay = first.getDay()
	const size = firstDay + lastDate - firstDate + 1 + 7

	// CALENDAR
	let calendar = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
	for (let i = 7; i < firstDay + 7; i++) {
		calendar[i] = 0
	}
	for (let i = firstDay + 7; i < size; i++) {
		calendar[i] = i - firstDay + 1 - 7
	}

	// SET Time Selected
	let timeSelectedTmp = []

	return (
		<Fragment>
			{availability && (
				<div style={{ width: 44 + '%' }} className={`px-4 py-2`}>
					<div className="flex my-2">
						{month != today.month || year != today.year ? (
							<div
								onClick={() => {
									if (month == 0) {
										setMonth(11)
										setYear(year - 1)
									} else {
										setMonth(month - 1)
									}
									setDate(-1)
									setTimes([])
								}}
								className="px-2 pointer month-picker"
							>{`<`}</div>
						) : (
							''
						)}
						<div className="w-full flex justify-center font-lato font-bold">
							{monthConverter(month)} {year}
						</div>
						<div
							onClick={() => {
								if (month == 11) {
									setMonth(0)
									setYear(year + 1)
								} else {
									setMonth(month + 1)
								}
								setDate(-1)
								setTimes([])
							}}
							className="px-2 pointer month-picker"
						>{`>`}</div>
					</div>
					<div className="calendar my-6">
						{calendar.map((i, index) => (
							<span
								className={`text-sm font-bold date-picker ${
									i < today.date && month == today.month ? 'disabled' : 'pointer'
								}`}
								key={index}
								onClick={() => {
									if (i < today.date && month == today.month) return
									setDate(i)
									setTimes([])
									fetchTimes(i)
								}}
							>
								{index > 6 ? (i > 0 ? i : ' ') : i}
								<span className={i == date ? 'selected' : i == today.date && month == today.month ? 'today' : ''} />
							</span>
						))}
					</div>
					<div className="my-4">
						<div className="my-4 text-md font-bold text-secondary font-lato">Available Time</div>
						{date == -1 ? (
							<div className="flex justify-center items-center border-dashed px-4 py-3">
								<div className="font-quicksand font-bold text-secondary text-md">
									Please select date before select time slots
								</div>
							</div>
						) : (
							<div className="grid">
								{availability.times.map((e, i) => (
									<div
										key={i}
										onClick={() => {
											timeSelectedTmp = [...times]
											if (timeSelectedTmp[0] - e > 1) {
												alert('Please select consecutive time slots')
												return
											}
											if (e - timeSelectedTmp[timeSelectedTmp.length - 1] > 1) {
												alert('Please select consecutive time slots')
												return
											}
											timeSelectedTmp.includes(e)
												? timeSelectedTmp.splice(
														timeSelectedTmp.findIndex((x) => x == e),
														1
												  )
												: timeSelectedTmp.push(e)
											timeSelectedTmp.sort(function (a, b) {
												return +a - +b
											})
											setTimes(timeSelectedTmp)
										}}
										className={`time-picker pointer text-sm text-secondary font-bold rounded-md px-1 py-1 flex justify-center ${
											times.includes(e) ? 'time-selected' : 'border'
										}`}
									>
										{timeFormatter(e)} - {timeFormatter(e + 1)}
									</div>
								))}
							</div>
						)}
						<div className="text-error text-md my-4">* Please Select Consecutive Appointment Time Slots</div>
					</div>
				</div>
			)}
			<style jsx>{utils}</style>
			<style jsx>{`
				.grid {
					display: grid;
					grid-template-rows: repeat(4, 1fr);
					grid-template-columns: repeat(2, 1fr);
					gap: 10px;
				}
				.time-selected {
					border: 1px solid #fb9ccb;
					box-shadow: 0px 0px 0px 1px rgba(251, 156, 203, 0.8);
				}
			`}</style>
		</Fragment>
	)
}

export default Calendar
