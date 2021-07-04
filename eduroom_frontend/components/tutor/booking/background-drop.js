import { Fragment, useState } from 'react'
import utils from '../../../styles/tutor/utils'

const BookingSection = ({ focus, setFocus }) => {
	return (
		<Fragment>
			{focus ? (
				<div
					className="fixed top-0 left-0 right-0 bottom-0 z-5"
					onClick={() => {
						setFocus(false)
					}}
				></div>
			) : (
				''
			)}
			<style jsx>{utils}</style>
			<style jsx>{``}</style>
		</Fragment>
	)
}

export default BookingSection
