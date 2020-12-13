import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../../components/graderSubmit/Box'
import Layout from '../../../../../components/graderSubmit/Layout'
import style from '../../../../../styles/graderSubmit/contests/contestPage/problem/contestProblemPage'
import ContestLayout from '../../../../../components/graderSubmit/contests/ContestLayout'
import ContestProblemList from '../../../../../components/graderSubmit/contests/allList/ContestProblemList'
import api from '../../../../../api'

const contestProblemOverview = ({ contestId }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('api/grader/getContestProblem', {
				params: { contestId },
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
							<ContestLayout page="problem" id={contestId}>
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
												contestID={contestId}
												id={element.id}
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
		const contestId = ctx.query.contestId
		return { props: { contestId } }
	} catch (err) {
		return { props: { contestId: '' } }
	}
}

export default contestProblemOverview
