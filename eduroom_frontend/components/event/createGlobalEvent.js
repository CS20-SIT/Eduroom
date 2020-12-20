import Head from 'next/head'
import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/event/event'
import { Button, Grid, Container, TextField } from '@material-ui/core'
import { KeyboardTimePicker } from '@material-ui/pickers'
import Image from 'next/image'
import api from '../../api'
const content = () => {
	const [eventInfo, setEventInfo] = useState({
		title: '',
		description: '',
		startDate: '',
		endDate: '',
		startTime: '',
		endTime: '',
		place: '',
	})
	const createEvent = async () => {}
	const handleCreate = (e) => {
		console.log(eventInfo)
		api.post('/api/event/createEvent', eventInfo)
	}

	const validator = () => {}

	const [selectedDate, handleDateChange] = useState(new Date())

	const eventType = ['Course', 'Global']
	const course = ['God Biology']

	return (
		<Fragment>
			<Head>
				<title>Create Event</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="space-top"></div>
			<Container>
				<div className="head">
					<Grid container spacing={2}>
						<Grid item xs={5.5}>
							<Image alt="meeting-img" src="/images/createEvent/image.svg" width="528" height="383" />
						</Grid>
						<Grid item xs={6}>
							<h1 className="color-topic topic-font">COME ON...</h1>
							<h1 className="color-topic topic-font">LET’S JOIN TO MEETING</h1>

							<p className="color-p " style={{ marginTop: '25px' }}>
								All reservation request should be made at least <span style={{ color: '#FB9CCB' }}>24 hours</span> in
								advance.
							</p>

							<p className="color-p">Please note that if your request or reservation is outside the normal</p>
							<p className="color-p">
								service hours, our staff may not be able to provide the service at the requested time.
							</p>
						</Grid>
					</Grid>
				</div>

				{/* ---------------------------------------Event Create Form --------------------------------------------------*/}
				<div className="form">
					<Grid container justify="center">
						<div>
							<input
								className="event-title"
								onChange={(e) => setEventInfo({ ...eventInfo, title: e.target.value })}
								placeholder="Event Title"
							></input>
						</div>

						<div>
							<textarea
								className="event-des"
								rows="5"
								cols="30"
								placeholder="Description"
								onChange={(e) => setEventInfo({ ...eventInfo, description: e.target.value })}
							></textarea>
						</div>
						<Grid container>
							<div style={{ marginTop: '10px' }}>
								<label className="startDate">Start Date:</label>
								<label className="startTime">Start Time:</label>
								<label className="endDate">End Date:</label>
								<label className="endTime">End Time:</label>
							</div>
							<div>
								<input
									className="event-startDate"
									onChange={(e) => setEventInfo({ ...eventInfo, startDate: e.target.value })}
									type="date"
								></input>
							</div>
							<div>
								<input
									className="event-startTime"
									onChange={(e) => setEventInfo({ ...eventInfo, startTime: e.target.value })}
									type="time"
								></input>
							</div>
							<div>
								<input
									className="event-endDate"
									onChange={(e) => setEventInfo({ ...eventInfo, endDate: e.target.value })}
									type="date"
								></input>
							</div>
							<div>
								<input
									className="event-endTime"
									onChange={(e) => setEventInfo({ ...eventInfo, endTime: e.target.value })}
									type="time"
								></input>
							</div>
						</Grid>
						<div>
							<input
								className="event-place"
								onChange={(e) => setEventInfo({ ...eventInfo, place: e.target.value })}
								placeholder="Place"
							/>
						</div>
						<div>
							<button className="event-confirm" onClick={handleCreate}>
								<a className="event-confirmText">CONFIRM</a>
							</button>
						</div>
						<div>
							<button className="event-cancel">
								<a className="event-cancelText">CANCEL</a>
							</button>
						</div>
					</Grid>
				</div>
			</Container>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default content

function KeyboardTimePickerExample() {
	const [selectedDate, handleDateChange] = useState(new Date())

	return (
		<KeyboardTimePicker
			label="Masked timepicker"
			placeholder="08:00 AM"
			mask="__:__ _M"
			value={selectedDate}
			onChange={(date) => handleDateChange(date)}
		/>
	)
}
