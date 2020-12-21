import React, { Fragment, useState, useEffect } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import style from '../../styles/calendar/calendar'
import Image from 'next/image'
import api from '../../api'
import { useRouter } from 'next/router'

const edit = (props) => {
	const router = useRouter()
	const setOpenEvent = props.setOpenEvent
	const [EditOpen, setEditOpen] = useState(false)
	const [courseList, setCourseList] = useState([])
	const handleClickOpen = () => {
		setEditOpen(true)
	}
	const [eventInfo, setEventInfo] = useState(null)
	useEffect(() => {
		const GetData = async () => {
			const result1 = await api.get('/api/event/getEvent', {
				params: {
					id: props.id,
				},
			})
			setEventInfo(result1.data[0])
		}
		GetData()
	}, [])

	// ---------------------Edit---------------------------

	useEffect(() => {
		api
			.get('/api/event/getMyCourse')
			.then((res) => {
				setCourseList(res.data.data)
				// setEventInfo({ ...eventInfo, courseid: courseList[0].courseid })
			})
			.catch((err) => {})
	}, [])

	console.log(eventInfo)
	const handleCreate = (e) => {
		// if (validator()) {
		api
			.post('/api/event/eEvent', { ...eventInfo, id: props.id })
			.then((res) => {
				alert('success')
				window.location.reload()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Fragment>
			<div style={{ marginBottom: '20px' }}>
				<button
					style={{
						padding: 0,
						border: 'none',
						background: 'none',
						cursor: 'pointer',
					}}
					onClick={handleClickOpen}
				>
					{' '}
					<Image src="/images/graderCreate/edit.svg" width="20" height="20" />
				</button>
			</div>

			<CSSTransition
				mountOnEnter
				unmountOnExit
				in={EditOpen}
				timeout={{ enter: 700, exit: 100 }}
				classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
			>
				<div className="D-create">
					<div style={{ height: '10%' }}></div>
					<div className="text-create">Edit Event</div>

					{/* ---------------------- ---------eventtitle------------------------------- */}
					<div>
						{eventInfo != null ? (
							<input
								value={eventInfo?.title}
								className="event-title"
								onChange={(e) => setEventInfo({ ...eventInfo, title: e.target.value })}
								placeholder="Event Title"
								style={{ height: '50px', fontSize: '18px' }}
							></input>
						) : null}
					</div>

					{/* ---------------------- ---------Course------------------------------- */}
					<div>
						
						<select defaultValue={eventInfo?.courseid} className="event-type" onChange={(e) => setEventInfo({ ...eventInfo, courseid: e.target.value })}>
						
							{courseList.map((course) => {
								return (
									<option Value={course.courseid} key={course.courseid}>
										{course.coursename}
									</option>
								)
							})}
						</select>
					</div>

					{/* ---------------------- ---------eventdescript------------------------------- */}
					<div>
						<input
							value={eventInfo?.detail}
							className="event-detail"
							onChange={(e) => setEventInfo({ ...eventInfo, detail: e.target.value })}
							placeholder="Description"
							style={{ height: '50px', fontSize: '18px' }}
						></input>
					</div>
					{/* ---------------------- ---------time------------------------------- */}

					<div className="startdate">
						<div>startDate</div>

						<input
							value={eventInfo?.startdate}
							className="event-startDate"
							onChange={(e) => setEventInfo({ ...eventInfo, startdate: e.target.value })}
							placeholder="Start date"
							type="date"
							style={{ fontSize: '14px' }}
						></input>
					</div>

					<div className="startTime">
						<div>startTime</div>
						<input
							value={eventInfo?.starttime}
							className="event-startTime"
							onChange={(e) => setEventInfo({ ...eventInfo, starttime: e.target.value })}
							placeholder="Start Time"
							type="Time"
							style={{ fontSize: '14px' }}
						></input>
					</div>

					<div className="enddate">
						<div>endDate</div>
						<input
							value={eventInfo?.enddate}
							className="event-endDate"
							onChange={(e) => setEventInfo({ ...eventInfo, enddate: e.target.value })}
							placeholder="end date"
							type="date"
							style={{ fontSize: '14px' }}
						></input>
					</div>

					<div className="endtime">
						<div>endTime</div>
						<input
							value={eventInfo?.endtime}
							className="event-endTime"
							onChange={(e) => setEventInfo({ ...eventInfo, endtime: e.target.value })}
							placeholder="end Time"
							type="time"
							style={{ fontSize: '14px' }}
						></input>
					</div>

					{/* -------------------------------place------------------------------- */}
					<div>
						<input
							value={eventInfo?.place}
							className="event-place"
							onChange={(e) => setEventInfo({ ...eventInfo, place: e.target.value })}
							placeholder="Event Place"
							style={{ height: '50px', fontSize: '18px' }}
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
							setEditOpen(false)
						}}
					>
						<button className="event-cancel">
							<a className="event-cancelText">CANCEL</a>
						</button>
					</div>
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
export default edit
