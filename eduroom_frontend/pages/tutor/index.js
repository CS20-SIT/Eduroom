import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

import utils from '../../styles/tutor/utils'

import Header from '../../components/tutor/main-header'

import GeneralNoNav from '../../components/template/generalnonav'

import api from '../../api'

const Tutor = () => {
	const [hoverIns, setHoverIns] = useState(-1)

	const [instructors, setInstructors] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			const res = await api.get('/api/tutor/instructor/list')
			setInstructors(res.data)
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
								<Link href={`/tutor/${e.instructorid}`} key={index}>
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
											<div className="rounded-full bg-yellow" style={{ width: 4 + 'rem', height: 4 + 'rem' }}></div>
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

export async function getServerSideProps(ctx) {
	// GET /tutor/instructor/list
	const instructors = [
		{
			id: 1,
			name: 'Thanawat Benjachatriroj',
			info: 'Frontend Developer',
			rating: 4.5,
			ratingCount: 2000,
		},
		{
			id: 2,
			name: 'Passawat Wetchasart',
			info: 'Web Disigner',
			rating: 3.7,
			ratingCount: 1800,
		},
		{
			id: 3,
			name: 'Thanaphong phatthanaphaisarnsin',
			info: 'Backend Developer',
			rating: 3.5,
			ratingCount: 1200,
		},
	]
	return {
		props: {
			instructors,
		},
	}
}

export default Tutor
