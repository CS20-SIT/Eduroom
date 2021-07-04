import { Fragment, useState, useEffect } from 'react'
import utils from '../../../../styles/tutor/utils'

import { gridSections, gridAreaDays, gridAreaTimes } from '../../../../components/tutor/data/grid-area'

import { defineGridTime } from '../../../../components/tutor/lib/time-availability'

import { timeFormatter } from '../../../../components/tutor/lib/utils'

import api from '../../../../api'

import GeneralNoNav from '../../../../components/template/general'
import AvailabilityEdit from '../../../../components/tutor/instructor-availability/availability-edit'

const Availability = () => {
	const [cost, setCost] = useState(0)
	const [table, setTable] = useState([
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
	])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/tutor/instructor/availabilities')
				setTimeSections(res.data.availabilities)
				setCost(res.data.price)
				let tmp = [...res.data.availabilities]
				let tmpTable = [...table]
				for (let x = 0; x < 5; x++) {
					let c = 0
					if (tmp[x][0] || tmp[x][0] == 0) tmpTable[x][c].push(tmp[x][0])
					for (let y = 0; y < tmp[x].length - 1; y++) {
						if (tmp[x][y] + 1 != tmp[x][y + 1]) {
							c++
						}
						tmpTable[x][c].push(tmp[x][y + 1])
					}
				}
				tmp = [...timeSlots]
				for (let z = 0; z < 5; z++) {
					tmpTable[z].forEach((x, i) => {
						x.forEach((y) => {
							tmp[z][y] = gridSections[z] + i
						})
					})
				}
				setTable(tmpTable)
			} catch (err) {}
		}
		fetchData()
	}, [])
	const [timeSlots, setTimeSlots] = useState(defineGridTime())
	const [timeSections, setTimeSections] = useState(null)

	const updateData = async (availabilities, price) => {
		try {
			const res = await api.post('/api/tutor/instructor/availabilities', { availabilities, price })
			location.reload()
		} catch (err) {}
	}

	const calc = (t) => {
		let c = 0
		t.forEach((x) => {
			if (x.length > 0) c++
		})
		return c
	}
	const render = () => {
		let rendered = []
		for (let x = 0; x < 5; x++) {
			;[...Array(calc(table[x]))].map((e, i) => {
				// console.log(table[x][i]);
				const startTime = table[x][i][0] + 9
				const endTime = table[x][i][table[x][i].length - 1] + 9 + 1

				rendered.push(
					<div
						key={i + '' + x}
						style={{
							gridArea: gridSections[x] + '' + parseInt(i % 4),
							backgroundColor: '#FDECF4',
							borderRadius: '10px',
							boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
							padding: '0.5rem',
							boxSizing: 'border-box',
							fontSize: '0.7rem',
						}}
						className="bg-pink rounded-sm shadow"
					>
						{timeFormatter(startTime)} - {timeFormatter(endTime)}
					</div>
				)
			})
		}
		return rendered
	}

	const [mode, setMode] = useState(true)

	return (
		<Fragment>
			<GeneralNoNav>
				{
					<div className="bg-tutor">
						<div className="container">
							<div className="grid-container">
								<div>
									<div className="text-lg font-bold">Plan Your Time</div>
									<div
										className="text-md font-bold text-secondary px-4 py-1 my-4"
										style={{ borderLeft: '5px solid #fb9ccb' }}
									>
										Setup & Pricing
									</div>
									{!mode ? (
										<div
											id="update-ins-availabilities"
											className="w-full bg-navy text-white py-2 pointer my-2"
											style={{ textAlign: 'center', borderRadius: 4 + 'px' }}
											onClick={() => {
												// POST /api/tutor/instructor/availability
												// console.log(timeSections)
												// console.log(cost)
												updateData(timeSections, cost)
											}}
										>
											Publish
										</div>
									) : (
										<div
											id="edit-ins-availabilities"
											className="w-full bg-navy text-white py-2 pointer my-2"
											style={{ textAlign: 'center', borderRadius: 4 + 'px' }}
											onClick={() => {
												setMode(false)
											}}
										>
											Edit
										</div>
									)}
								</div>
								{mode ? (
									<div>
										<div className="text-lg font-bold">Available Day & Time</div>
										<div className="grid-slots my-2 relative">
											{gridAreaDays.map((d, i) => (
												<div
													key={i}
													style={{ gridArea: d.toLowerCase(), marginTop: 'auto' }}
													className="text-center py-2"
												>
													{d}
												</div>
											))}
											{gridAreaTimes.map((t, i) => (
												<div
													key={i}
													style={{
														gridArea: t.id,
														top: -5 + 'px',
														marginLeft: 'auto',
													}}
													className={`text-sm relative px-2 ${i == 7 ? 'last-slot' : ''}`}
												>
													{timeFormatter(t.time)}
												</div>
											))}
											{[...Array(40)].map((a, i) => (
												<div
													key={i}
													className={` px-4 py-6 shadow ${
														timeSlots[parseInt(i / 8)].includes('q' + i) ? 'bg-yellow-faded' : 'removal'
													}`}
													style={{ gridArea: 'q' + i }}
												></div>
											))}
											{render()}
										</div>
										<div className="flex items-center" style={{ marginTop: '4rem' }}>
											<div className="text-lg font-bold">Price per Hour :</div>
											<div className="text-lg font-bold text-secondary py-1 mx-4">{cost} THB</div>
										</div>
									</div>
								) : (
									<AvailabilityEdit
										cost={cost}
										setCost={setCost}
										timeSections={timeSections}
										setTimeSections={setTimeSections}
										gridAreaDays={gridAreaDays}
										gridAreaTimes={gridAreaTimes}
										setTimeSlots={setTimeSlots}
										timeSlots={timeSlots}
									/>
								)}
							</div>
						</div>
					</div>
				}

				<style jsx>{utils}</style>
				<style jsx>{`
					.bg-yellow-faded {
						background-color: rgba(252, 169, 34, 0.2);
					}
					.grid-container {
						display: grid;
						grid-template-columns: 18% 1fr;
						gap: 1rem;
					}
					.grid-slots {
						display: grid;
						grid-template-columns: 0.6fr repeat(5, 1fr);
						grid-template-rows: repeat(9, 1fr);
						gap: 0.5rem;
						grid-template-areas:
							'x mon tue wed thu fri'
							'Ta ${timeSlots[0][0]} ${timeSlots[1][0]} ${timeSlots[2][0]} ${timeSlots[3][0]} ${timeSlots[4][0]}'
							'Tb ${timeSlots[0][1]} ${timeSlots[1][1]} ${timeSlots[2][1]} ${timeSlots[3][1]} ${timeSlots[4][1]}'
							'Tc ${timeSlots[0][2]} ${timeSlots[1][2]} ${timeSlots[2][2]} ${timeSlots[3][2]} ${timeSlots[4][2]}'
							'Td ${timeSlots[0][3]} ${timeSlots[1][3]} ${timeSlots[2][3]} ${timeSlots[3][3]} ${timeSlots[4][3]}'
							'Te ${timeSlots[0][4]} ${timeSlots[1][4]} ${timeSlots[2][4]} ${timeSlots[3][4]} ${timeSlots[4][4]}'
							'Tf ${timeSlots[0][5]} ${timeSlots[1][5]} ${timeSlots[2][5]} ${timeSlots[3][5]} ${timeSlots[4][5]}'
							'Tg ${timeSlots[0][6]} ${timeSlots[1][6]} ${timeSlots[2][6]} ${timeSlots[3][6]} ${timeSlots[4][6]}'
							'Th ${timeSlots[0][7]} ${timeSlots[1][7]} ${timeSlots[2][7]} ${timeSlots[3][7]} ${timeSlots[4][7]}';
					}
					.last-slot {
						position: relative;
					}
					.last-slot::after {
						content: '05:00 PM';
						position: absolute;
						bottom: -18px;
						right: 0.5rem;
						width: auto;
					}
					.removal {
						display: none;
					}
				`}</style>
			</GeneralNoNav>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	// GET /api/tutor/instructor/availability
	const availabilities = [[0, 1, 2, 3, 4, 5, 6, 7], [], [0, 2, 3, 4, 6], [], [4, 5, 6]]
	const price = 2000

	return { props: { availabilities, price } }
}
export default Availability
