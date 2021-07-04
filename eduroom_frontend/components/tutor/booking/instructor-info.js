import { Fragment, useState } from 'react'
import utils from '../../../styles/tutor/utils'

const InstructorInfo = ({ instructor }) => {
	return (
		<Fragment>
			{instructor && (
				<div className="flex">
					<div>
						<div
							className="rounded-full bg-yellow"
							style={{
								width: 4 + 'rem',
								height: 4 + 'rem',
								backgroundImage: 'url(' + instructor.avatar + ')',
								backgroundSize: 'cover',
							}}
						></div>
					</div>
					<div className="flex flex-col mx-3">
						<div className="flex">
							<div className="font-lato font-bold text-xl text-primary">{instructor.name}</div>
							<div className="mx-2 flex items-center text-yellow">
								<i className="fas fa-star"></i>
								<div className="text-sm mx-1 text-yellow">{instructor.rating}</div>
								<div className="text-sm text-secondary">
									({instructor.ratingCount > 1000 ? instructor.ratingCount / 1000 + 'k' : instructor.ratingCount})
								</div>
							</div>
						</div>
						<div className="font-lato font-bold text-md text-secondary mx-1">{instructor.info}</div>
						<div className="font-lato font-bold text-md mx-1 my-2">{instructor.text}</div>
					</div>
				</div>
			)}
			<style jsx>{utils}</style>
			<style jsx>{``}</style>
		</Fragment>
	)
}

export default InstructorInfo
