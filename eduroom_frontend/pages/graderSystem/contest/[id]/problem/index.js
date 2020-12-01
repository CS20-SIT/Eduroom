import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../../components/graderSubmit/Box'
import Layout from '../../../../../components/graderSubmit/Layout'
import style from '../../../../../styles/graderSubmit/contests/contestPage/problem/contestProblemPage'
import ContestLayout from '../../../../../components/graderSubmit/contests/ContestLayout'
import ContestProblemList from '../../../../../components/graderSubmit/contests/allList/ContestProblemList'
import { compareAsc, parseISO } from 'date-fns'
import api from '../../../../../api'

const contestProblemOverview = ({ id }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('api/grader/getContestProblem', {
				params: { id },
			})
			setData(result.data)
		}
		GetData()
	}, [])

	return (
		<Fragment>
			<Layout page="contest">
				<div className="main">
					<div className="size">
						<Box>
							<ContestLayout page="problem" id={id}>
								<center>
									<h2>PROBLEM LIST</h2>
								</center>
								<div className="problem-list">
									<div className="flex-container">
										<div className="flex-item" style={{ flexBasis: '15%' }}>
											No
										</div>
										<div className="flex-item" style={{ flexBasis: '15%' }}>
											Title
										</div>
										<div className="flex-item" style={{ flexBasis: '50%' }}>
											Description
										</div>
										<div className="flex-item" style={{ flexBasis: '20%' }}>
											Difficulty
										</div>
									</div>
									{data.map((element, key) => {
										return (
											<ContestProblemList
												number={element.conquestionno}
												title={element.title}
												description={element.description}
												difficulty={element.difficulty}
												key={key}
											/>
										)
									})}
								</div>
							</ContestLayout>
						</Box>
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}

export default contestProblemOverview
