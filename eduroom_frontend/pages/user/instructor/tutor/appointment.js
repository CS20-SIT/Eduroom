import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../../../styles/tutor/utils'

import api from '../../../../api'

import GeneralNoNav from '../../../../components/template/general'

import AppointmentList from '../../../../components/tutor/instructor-appointment/appointment-list'
import AppointmentInfo from '../../../../components/tutor/instructor-appointment/appointment-info'
import RequestMode from '../../../../components/tutor/instructor-appointment/request-mode'
import TableHeader from '../../../../components/tutor/instructor-appointment/table-header'

const Appointment = () => {
	const [appointments, setAppointments] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/tutor/instructor/appointments')

				const { appointment } = res.data
				const approved = appointment.filter((e) => {
					return e.status == 'Approved'
				})
				const rejected = appointment.filter((e) => {
					return e.status == 'Rejected'
				})
				const pending = appointment.filter((e) => {
					return e.status == 'Pending'
				})

				const tmp = [appointment, pending, approved, rejected]
				console.log(tmp)

				setAppointments(tmp)
			} catch (err) {}
		}
		fetchData()
	}, [])

	const renderIcon = () => {
		return <i className="fa fa-chevron-left"></i>
	}

	const [requestMode, setRequestMode] = useState(0)
	const [AID, setAID] = useState(-1)

	const dummy = {
		appointmentID: 0,
		id: 0,
		name: '',
		members: [{ id: 0, name: '' }],
		startTime: 0,
		endTime: 0,
		date: [0, 0, 0],
		status: '',
	}
	const [appointment, setAppointment] = useState(dummy)
	return (
		<Fragment>
			<GeneralNoNav>
				<AppointmentInfo AID={AID} setAID={setAID} appointment={appointment} />

				<div className="bg-tutor">
					<div className="container">
						<RequestMode requestMode={requestMode} setRequestMode={setRequestMode} />
						<TableHeader />
						{appointments && (
							<AppointmentList
								appointments={appointments}
								requestMode={requestMode}
								setAppointment={setAppointment}
								setAID={setAID}
								renderIcon={renderIcon}
							/>
						)}
					</div>
				</div>

				<style jsx>{utils}</style>
				<style jsx>{``}</style>
			</GeneralNoNav>
		</Fragment>
	)
}

export default Appointment
