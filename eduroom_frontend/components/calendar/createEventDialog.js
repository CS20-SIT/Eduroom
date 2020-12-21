import React, { Fragment, useState, useEffect } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import style from '../../styles/calendar/calendar'
import api from '../../api'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Course from '../admin/layout/icons/course'

const Content = (props) => {
	const router = useRouter()
	const openEvent = props.openEvent
	const setOpenEvent = props.setOpenEvent
	const [courseList, setCourseList] = useState([])
	const date = props.date
	const year = props.year
	const monthNo = props.monthNo

	const [stDate, setSTDate] = useState(year + '-' + monthNo + '-' + date)

	// ---------------------createEvent---------------------------


	const [submit, setSubmit] = useState(false);
	const statusClose = () => {
		setSubmit(false)
		window.location.reload();
	}


	const [eventInfo, setEventInfo] = useState({
		title: '',
		description: '',
		startDate: props.year + '-' + props.monthNo + '-' + props.date,
		endDate: '',
		startTime: '',
		endTime: '',
		place: '',
		courseid: '',
	})

	useEffect(() => {
		api
			.get('/api/event/getMyCourse')
			.then((res) => {
				setCourseList(res.data.data)
				// setEventInfo({ ...eventInfo, courseid: courseList[0].courseid })
			})
			.catch((err) => { })
	}, [])

	console.log()
	useEffect(() => {
		console.log(date)
		setSTDate(year + '-' + monthNo + '-' + date)
		setEventInfo({ ...eventInfo, startDate: stDate })
	}, [date, stDate])

	const handleCreate = (e) => {
		console.log(eventInfo)
		// if (validator()) {
		api
			.post('/api/event/createEvent', eventInfo)
			.then((res) => {
				setSubmit(true)
				/* window.location.reload() */
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Fragment>
			<CSSTransition
				mountOnEnter
				unmountOnExit
				in={openEvent}
				timeout={{ enter: 700, exit: 100 }}
				classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
			>
				<div className="D-create">
					<div style={{ height: '10%' }}></div>
					<div className="text-create">Create Event</div>

					{/* ---------------------- ---------eventtitle------------------------------- */}
					<div>
						<input
							className="event-title"
							onChange={(e) => setEventInfo({ ...eventInfo, title: e.target.value })}
							placeholder="Event Title"
							style={{ height: '50px' }}
						></input>
					</div>

					{/* ---------------------- ---------eventType------------------------------- */}
					<div>
						<select className="event-type" onChange={(e) => setEventInfo({ ...eventInfo, courseid: e.target.value })}>
							{courseList.map((course) => {
								return (
									<option value={course.courseid} key={course.courseid}>
										{course.coursename}
									</option>
								)
							})}
						</select>
					</div>

					{/* ---------------------- ---------eventdescript------------------------------- */}
					<div>
						<input
							className="event-detail"
							onChange={(e) => setEventInfo({ ...eventInfo, description: e.target.value })}
							placeholder="Description"
							style={{ height: '50px' }}
						></input>
					</div>
					{/* ---------------------- ---------time------------------------------- */}

					<div className="startdate">
						<div>startDate</div>

						<input
							value={eventInfo.startDate}
							className="event-startDate"
							onChange={(e) => setEventInfo({ ...eventInfo, startDate: e.target.value })}
							placeholder="Start date"
							type="date"
						></input>
					</div>

					<div className="startTime">
						<div>startTime</div>
						<input
							className="event-startTime"
							onChange={(e) => setEventInfo({ ...eventInfo, startTime: e.target.value })}
							placeholder="Start Time"
							type="Time"
						></input>
					</div>

					<div className="enddate">
						<div>endDate</div>
						<input
							className="event-startDate"
							onChange={(e) => setEventInfo({ ...eventInfo, endDate: e.target.value })}
							placeholder="end date"
							type="date"
						></input>
					</div>

					<div className="endtime">
						<div>endTime</div>
						<input
							className="event-endTime"
							onChange={(e) => setEventInfo({ ...eventInfo, endTime: e.target.value })}
							placeholder="end Time"
							type="time"
						></input>
					</div>

					{/* -------------------------------place------------------------------- */}
					<div>
						<input
							className="event-place"
							onChange={(e) => setEventInfo({ ...eventInfo, place: e.target.value })}
							placeholder="Event Place"
							style={{ height: '50px' }}
						></input>
					</div>

					<div className="confirmBT">
						<button className="event-confirm" onClick={handleCreate}>
							<a className="event-confirmText">CONFIRM</a>
						</button>
					</div>
					<div
						className="cancelBT"
						onClick={() => {
							setOpenEvent(false)
						}}
					>
						<button className="event-cancel">
							<a className="event-cancelText">CANCEL</a>
						</button>
					</div>

					<Dialog open={submit}>
						<DialogTitle>
							<span>Success!</span>
						</DialogTitle>
						<DialogContent>
							<DialogContentText>
								<span> The Event have been created.</span>
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={statusClose} color="primary" autoFocus>
								<span>Ok</span>
							</Button>
						</DialogActions>
					</Dialog>



				</div>
			</CSSTransition>

			<style jsx>{style}</style>
			<style jsx>
				{`
					.fade-in {
						animation: fade-in 0.3s forwards;
					}
					.fade-out {
						animation: fade-out 0.3s forwards;
					}
					@keyframes fade-in {
						0% {
							opacity: 0;
						}
						100% {
							opacity: 1;
						}
					}
					@keyframes fade-out {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0;
						}
					}
				`}
			</style>
		</Fragment>
	)
}
export default Content
