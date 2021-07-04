import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

import utils from '../../styles/tutor/utils'

import Header from '../../components/tutor/main-header'

import GeneralNoNav from '../../components/template/general'

import api from '../../api'

const Tutor = () => {
	const [hoverIns, setHoverIns] = useState(-1)

	const [instructors, setInstructors] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/tutor/instructor/list')
				setInstructors(res.data)
			} catch (err) {}
		}
		fetchData()
	}, [])

	return (
		<Fragment>
			<GeneralNoNav>
				<div className="bg-tutor">
					<div className="container">
						<Header />
						<div>
							<div className="text-lg font-bold text-secondary spacing-md">INSTRUCTORS</div>
						</div>
						{instructors &&
							instructors.map((e, index) => (
								<Link href={`/tutor/${e.instructorid}`} key={index} className="instructor-info-list">
									<div>
										<div
											className={`px-8 py-4 my-8 bg-white-faded shadow rounded-md flex pointer animation ${
												hoverIns == index ? 'bigger' : ''
											}`}
											onPointerEnter={() => {
												setHoverIns(index)
											}}
											onPointerLeave={() => {
												setHoverIns(-1)
											}}
										>
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
												<div className="flex">
													<div className="font-lato font-bold text-xl text-primary">{e.name}</div>
													<div className="mx-2 flex items-center text-yellow">
														<i className="fas fa-star"></i>
														<div className="text-sm mx-1 text-yellow">{e.rating}</div>
														<div className="text-sm text-secondary">
															({e.ratingCount > 1000 ? e.ratingCount / 1000 + 'k' : e.ratingCount})
														</div>
													</div>
												</div>
												<div className="font-lato font-bold text-md text-secondary"> {e.subjectname}</div>
											</div>
										</div>
									</div>
								</Link>
							))}
					</div>
				</div>
				<style jsx>{utils}</style>
			</GeneralNoNav>
		</Fragment>
	)
}
export default Tutor
