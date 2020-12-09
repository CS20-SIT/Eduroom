import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../styles/tutor/utils'
import GeneralNoNav from '../../components/template/general'

import api from '../../api'

import Calendar from '../../components/tutor/booking/calendar'
import Rating from '../../components/tutor/booking/rating'
import GroupBooking from '../../components/tutor/booking/group-booking'
import InstructorInfo from '../../components/tutor/booking/instructor-info'
import BookingSection from '../../components/tutor/booking/booking-section'
import BookingInfo from '../../components/tutor/booking/booking-info'
import BackgroundDrop from '../../components/tutor/booking/background-drop'

const Instructor = ({ id }) => {
	// console.log(id)
	const [instructor, setInstructor] = useState(null)
	const [reviews, setReviews] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			let res = await api.get('/api/tutor/instructor/info', { params: { id } })
			setInstructor(res.data.instructor)
			res = await api.get('/api/tutor/instructor/review', { params: { id } })
			let review = res.data.rating
			var sortable = []
			for (var r in review) {
				sortable.push([r, review[r]])
			}
			sortable.sort(function (a, b) {
				return a[1].score - b[1].score
			})
			const highReview = []
			const lowReview = []
			const latestReview = []
			for (let i = 0; i < sortable.length; i++) {
				lowReview.push(sortable[i][1])
				highReview.push(sortable[sortable.length - i - 1][1])
			}
			sortable.sort(function (a, b) {
				return a[1].date - b[1].date
			})
			for (let i = 0; i < sortable.length; i++) {
				latestReview.push(sortable[sortable.length - i - 1][1])
			}
			const tmp = [highReview, lowReview, latestReview]
			setReviews(tmp)
		}
		fetchData()
	}, [])

	// BOOKING MODE SELECTION
	const [booking, setBooking] = useState(0)

	// DATE & TIME SELECTION
	const now = new Date()
	const [date, setDate] = useState(now.getDate())
	const [month, setMonth] = useState(now.getMonth())
	const [year, setYear] = useState(now.getFullYear())
	const [times, setTimes] = useState([])

	// SET members group
	const [bookingGroup, setBookingGroup] = useState(false)
	const [students, setStudents] = useState([])

	// SET Focus for background-dropdown-list
	const [focus, setFocus] = useState(false)

	return (
		<Fragment>
			<GeneralNoNav>
				<div className="bg-tutor">
					<BackgroundDrop focus={focus} setFocus={setFocus} />
					<div className="container">
						<InstructorInfo instructor={instructor} />
						<BookingSection booking={booking} setBooking={setBooking} />
						{booking == 0 ? (
							<div className="w-full flex justify-between">
								<Calendar
									id={id}
									date={date}
									setDate={setDate}
									month={month}
									setMonth={setMonth}
									year={year}
									setYear={setYear}
									times={times}
									setTimes={setTimes}
								/>
								<div style={{ width: 54 + '%', height: 100 + '%' }}>
									{bookingGroup ? (
										<GroupBooking
											setBookingGroup={setBookingGroup}
											students={students}
											setStudents={setStudents}
											focus={focus}
											setFocus={setFocus}
										/>
									) : null}
									<BookingInfo
										instructor={instructor}
										date={date}
										month={month}
										year={year}
										times={times}
										students={students}
										bookingGroup={bookingGroup}
										setBookingGroup={setBookingGroup}
									/>
								</div>
							</div>
						) : (
							<Rating reviews={reviews} />
						)}
					</div>
				</div>
				<style jsx>{utils}</style>
			</GeneralNoNav>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	// ID for fetching instructor information
	const id = ctx.query.id
	return { props: { id } }
}

export default Instructor
