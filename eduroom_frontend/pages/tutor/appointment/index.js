import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../../styles/tutor/utils'
import Header from '../../../components/tutor/main-header'
import GeneralNoNav from '../../../components/template/general'

import Link from 'next/link'

import api from '../../../api'

const Appointment = () => {
	const [hoverIns, setHoverIns] = useState(-1)
	const [hoverReview, setHoverReview] = useState(-1)

	const [desc, setDesc] = useState(null)

	const [reviewModal, setReviewModal] = useState(-1)

	const [starHover, setStarHover] = useState(0)

	const [appointments, setAppointments] = useState(null)

	const today = new Date()
	const now = '' + today.getFullYear() + (today.getMonth() + 1) + today.getDate()

	const post = async (score, desc) => {
		try {
			await api.post('/api/tutor/appointment/review', {
				id: reviewModal,
				score,
				desc,
			})
		} catch (err) {}
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/tutor/student/appointments')
				const appointment = res.data.appointments
				const approved = appointment.filter((e) => {
					return e.isAgree == 'Approved'
				})
				const rejected = appointment.filter((e) => {
					return e.isAgree == 'Rejected'
				})
				const pending = appointment.filter((e) => {
					return e.isAgree == 'Pending'
				})
				appointment.sort((a, b) => {
					var nameA = a.isAgree.toUpperCase() // ignore upper and lowercase
					var nameB = b.isAgree.toUpperCase() // ignore upper and lowercase
					if (nameA < nameB) {
						return -1
					}
					if (nameA > nameB) {
						return 1
					}
					return 0
				})
				const tmp = [appointment, approved, rejected, pending]
				setAppointments(tmp)
			} catch (err) {}
		}
		fetchData()
	}, [])
	const requestModeHeader = ['All', 'Approved', 'Rejected', 'Pending']
	const [requestMode, setRequestMode] = useState(0)

	return (
		<Fragment>
			<GeneralNoNav>
				{reviewModal >= 0 ? (
					<div className="modal-bg" id="review-pop-up">
						<div className="modal-container bg-pink">
							<div
								className="modal-close"
								onClick={() => {
									setReviewModal(-1)
									setStarHover(0)
								}}
							>
								x
							</div>
							<div className="text-xl font-bold">Share Your Feedback</div>
							<div className="text-lg font-bold text-secondary my-4">Rate your Instructor</div>
							<div className="my-2">
								<div className="flex">
									{[...Array(5)].map((s, i) => (
										<div
											key={i}
											className="relative mx-1 pointer"
											onMouseEnter={() => {
												setStarHover(i)
											}}
										>
											{i > starHover ? (
												<i className="fas fa-star star-in absolute text-white" style={{ margin: '0.25rem' }}></i>
											) : (
												''
											)}
											<i className="fas fa-star star-out text-yellow"></i>
										</div>
									))}
								</div>
							</div>
							<textarea
								cols="50"
								rows="10"
								placeholder="How is your experience"
								style={{ resize: 'none' }}
								className="outline-none my-4 rounded-sm px-4 py-4 text-md"
								onChange={(e) => {
									setDesc(e.target.value)
								}}
							></textarea>
							<div
								id="submit-rating-btn"
								className={`px-8 py-3 rounded-sm bg-navy text-md font-bold text-white ${
									!desc ? 'disabled' : 'pointer'
								} `}
								onClick={() => {
									if (!desc) return
									// POST /api/tutor/appointment/review
									post(starHover + 1, desc)
									// console.log(starHover + 1)
									// console.log(desc)
									// Reload
									location.reload()
								}}
							>
								Submit
							</div>
						</div>
					</div>
				) : null}
				<div className="bg-tutor">
					<div className="container">
						<Header />
						<div className="text-lg font-bold text-secondary spacing-md my-2">MY APPOINTMENTS</div>
						<div className=" text-secondary text-lg my-4">Latest Request</div>
						<div className="flex">
							{requestModeHeader.map((r, i) => (
								<div
									key={i}
									className={`border-secondary text-secondary rounded-md py-1 text-center mx-4 text-md pointer ${
										requestMode == i ? 'bg-navy text-white' : 'bg-white-faded'
									}`}
									style={{ width: '7rem' }}
									onClick={() => {
										setRequestMode(i)
									}}
								>
									{r}
								</div>
							))}
						</div>
						{appointments &&
							appointments[requestMode].map((e, index) => (
								<div key={index} className="appointment-info-list">
									<div
										className={`px-8 py-4 my-8 shadow bg-white-faded rounded-md flex items-center justify-between animation ${
											hoverIns == index ? 'bigger' : ''
										}`}
										onPointerEnter={() => {
											setHoverIns(index)
										}}
										onPointerLeave={() => {
											setHoverIns(-1)
										}}
									>
										<div className="grid w-full">
											<div className="flex">
												<div
													className="rounded-full bg-yellow"
													style={{
														width: 4 + 'rem',
														height: 4 + 'rem',
														backgroundImage: 'url(' + e.avatar + ')',
														backgroundSize: 'cover',
													}}
												></div>
												<div className="my-auto mx-4">
													<div className="flex flex-col">
														<div className="font-lato font-bold text-xl text-primary">{e.name}</div>
														<div className="font-lato font-bold text-md text-secondary">{e.info}</div>
													</div>
												</div>
											</div>
											<div className="flex items-center justify-center text-lg text-secondary font-bold">{e.date}</div>
											<div className="flex flex-col justify-center" style={{ alignItems: 'flex-end' }}>
												<div className="flex">
													<span
														className={`status ${
															e.isAgree == 'Approved' || e.isAgree == 'Rejected'
																? e.isAgree == 'Rejected'
																	? 'bg-error'
																	: 'bg-navy'
																: 'bg-yellow'
														}`}
													></span>
													<div
														className={`text-md font-bold ${
															e.isAgree == 'Approved' || e.isAgree == 'Rejected'
																? e.isAgree == 'Rejected'
																	? 'text-error '
																	: 'text-navy '
																: 'text-yellow '
														}`}
													>
														{e.isAgree}
													</div>
												</div>
												<div className="text-lg text-secondary font-bold my-1">
													{e.starttime} - {e.endtime}
												</div>
												{e.isAgree == 'Approved' && e.sorted < now && !e.score ? (
													<div
														className={`rating-btn text-sm px-3 py-1 border rounded-md opacity-50 pointer animation ${
															hoverReview == index ? 'bg-secondary text-white' : ''
														}`}
														onPointerEnter={() => {
															setHoverReview(index)
														}}
														onPointerLeave={() => {
															setHoverReview(-1)
														}}
														onClick={() => {
															// console.log(e.id)
															setReviewModal(e.id)
														}}
													>
														Leave Review
													</div>
												) : (
													''
												)}
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
				<style jsx>{utils}</style>
				<style jsx>{`
					.grid {
						display: grid;
						grid-template-columns: 2.5fr 1fr 1fr;
						gap: 10px;
					}
					.status {
						margin: auto 0.2rem;
						width: 0.5rem;
						height: 0.5rem;
						border-radius: 50%;
					}
					.star-out {
						font-size: 2.5rem;
					}
					.star-in {
						font-size: 2rem;
					}
				`}</style>
			</GeneralNoNav>
		</Fragment>
	)
}

export default Appointment
