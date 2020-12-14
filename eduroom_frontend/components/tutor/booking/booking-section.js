import React, { Fragment, useState } from 'react'
import utils from '../../../styles/tutor/utils'

const BookingSection = ({ booking, setBooking }) => {
	const section = ['Booking', 'Reviews']

	return (
		<Fragment>
			<div className="flex my-4">
				{section.map((s, i) => (
					<div
						key={i}
						id={s.toLowerCase + '-section'}
						className={`mx-2 text-md font-bold pointer ${booking == i ? 'text-navy text-underline' : 'text-secondary'}`}
						onClick={() => {
							setBooking(i)
						}}
					>
						{s}
					</div>
				))}
			</div>
			<style jsx>{utils}</style>
			<style jsx>{``}</style>
		</Fragment>
	)
}

export default BookingSection
