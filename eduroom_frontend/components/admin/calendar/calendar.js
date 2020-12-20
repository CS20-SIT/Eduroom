import React, { Fragment, useState, useEffect } from 'react'
import Cell from '../../../components/admin/calendar/calendarCell'
import HeadCell from '../../../components/calendar/calendarHeader'
import BlankCell from '../../../components/calendar/calendarBlankCell'
import ViewEvent from '../../../components/admin/calendar/viewEvent'
import Image from 'next/image'
import api from '../../../api'
// import { useRouter } from 'next/router';
import style from '../../../styles/calendar/calendar'
import moment from 'moment'
import Link from 'next/link'
import { Grid, Container } from '@material-ui/core'
import { useRouter } from 'next/router'

const Content = () => {
	//create Eventpage
	const router = useRouter()

	//Array of short names of the day.
	//Mon Tue ...
	const days = moment.weekdaysShort()

	//change when click next or before month
	const [day, setDay] = useState({
		dateObject: moment(),
	})
	const [currentDate, setCurrentDate] = useState(1)
	const [currentMonth, setCurrentMonth] = useState('January')
	const [currentMonthNo, setCurrentMonthNo] = useState(1)
	const [currentYear, setCurrentYear] = useState(1970)
	const Today = new Date()
	const TodayDate = Today.getDate()
	const TodayMonth = Today.getMonth() + 1
	const TodayYear = Today.getFullYear()

  const [eventDays, setEvent] = useState([])
  const [daysInMonth,setDayInMonth] = useState([])
  const [blank,setBlank] = useState([])
  const [blankEnd,setBlankEnd] = useState([])
	useEffect(() => {
		setCurrentDate(parseInt(day.dateObject.format('D')))
		setCurrentMonth(day.dateObject.format('MMMM'))
		setCurrentMonthNo(parseInt(day.dateObject.format('M')))
    setCurrentYear(parseInt(day.dateObject.format('YYYY')))
    let tempDay = []
    let tempBlankend = []
    let tempBlank = []
    let count = 0
    for (let i = 0; i < firstDayOfMonth(); i++) {
      tempBlank.push('x')
      count++
    }
    for (let d = 1; d <= day.dateObject.daysInMonth(); d++) {
      tempDay.push(d)
      count++
    }
    while (count < 42) {
      tempBlankend.push('x')
      count++
    }
    setDayInMonth(tempDay)
    setBlank(tempBlank)
    setBlankEnd(tempBlankend)
		api
			.get(`/api/event/getAdminEventInMonthYear?m=${parseInt(day.dateObject.format('M'))}&y=${parseInt(day.dateObject.format('YYYY'))}`)
			.then((res) => {
				setEvent(res.data.data)
			})
			.catch((err) => {})
	}, [day])
	//state chage 1 month per click
	const addMonth = () => {
		const dateObject = day.dateObject.add(1, 'M')
		setDay({ ...day, dateObject: dateObject })
	}
	const minusMonth = () => {
		const dateObject = day.dateObject.add(-1, 'M')
		setDay({ ...day, dateObject: dateObject })
	}
	//return the first day of that month
	// 0 = sun, 1 = mon , ... , 6 = sat
	const firstDayOfMonth = () => {
		let dateObj = day.dateObject
		let firstDay = moment(dateObj).startOf('month').format('d')
		return firstDay
	}



	const [showDate, setShowDate] = useState(-1)
	const [open, setOpen] = useState(false)

	/* const [isInstructor, setInstructor] = useState(false)
	useEffect(() => {
		api
			.get('/api/auth/profile')
			.then((res) => {
				if (res.data.role == 'instructor') {
					setInstructor(true)
				}
			})
			.catch((err) => {})
	}, []) */

	// ------------------code below----------------------//
	return (
		<Fragment>

			<ViewEvent
				open={open}
				setOpen={setOpen}
				showDate={showDate}
				currentMonth={currentMonth}
				currentMonthNo={currentMonthNo}
				currentYear={currentYear}
			/>

			{/* ------------------------------Create Event on main Calendar Page---------------------------------------- */}
			{/* {isInstructor ? ( */}
				{/* <div className="createEvent">
					<button
						className="bt-createEvent"
						onClick={() => {
							router.push(`/event`)
						}}
					>
						createEvent
					</button>
				</div> */}
			{/* ) : null} */}

			{/* ------------------------------Calendar Header---------------------------------------- */}
			<div className="month-color text-center">
				<div className="month-size">
					<Container>
						<Grid container spacing={0}>
							<div className="previous-m" onClick={minusMonth}>
								{' '}
								<Image alt="left-arrow" src="/images/createEvent/L.svg" width="30" height="30" />{' '}
							</div>

							<div className="month">{currentMonth + ' ' + currentYear}</div>

							<div className="forward-m" onClick={addMonth}>
								<Image alt="right-arrow" src="/images/createEvent/R.svg" width="30" height="30" />
							</div>
						</Grid>
					</Container>
				</div>

				{/* -------------------------------Fill Calendar Items------------------------------- */}
				<div className="grid">
					{days.map((dayName) => {
						return <HeadCell head={dayName} />
					})}

					{blank.map((blank) => {
						return <BlankCell Content={blank} />
					})}

					{daysInMonth.map((day) => {
						return (
							<Cell
								events={eventDays}
								isToday={TodayDate == day && TodayMonth == currentMonthNo && TodayYear == currentYear}
								todayDate={TodayDate}
								date={`${currentMonthNo}/${day}/${currentYear}`}
								setOpen={setOpen}
								Content={day}
								setShowDate={setShowDate}
							/>
						)
					})}

					{blankEnd.map((blank) => {
						return <BlankCell Content={blank} />
					})}
				</div>
			</div>
			<div className="bg-calendar">
				<Image alt="image" src="/images/createEvent/calendar.svg" width="700" height="600" />
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Content
