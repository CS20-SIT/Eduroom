import { Fragment, useEffect, useState } from 'react'
import Box from '../../../../components/graderSubmit/Box'
import Layout from '../../../../components/graderSubmit/Layout'
import style from '../../../../styles/graderSubmit/contests/contestPage/submission/contestSubmissionPage'
import ContestLayout from '../../../../components/graderSubmit/contests/ContestLayout'
import ContestSubmissionList from '../../../../components/graderSubmit/contests/allList/ContestSubmissionList'
import api from '../../../../api'

const contestSubmission = ({ contestId }) => {
	const [data, setData] = useState([])
	const [userState, setUserState] = useState(false)

	useEffect(() => {
		const GetData = async () => {
			try {
				const userQuery = await api.get('/api/auth/profile')
				setUserState(userQuery.data)
				if (userState != null) {
					setUserState(true)
				}
				const result = await api.get('/api/grader/getContestSubmission', {
					params: { contestId },
				})
				setData(result.data)
			} catch (e) {
				return console.log(e)
			}
		}
		GetData()
	}, [])

	return (
		<Fragment>
			<Layout page="contest">
				<div className="main">
					<div className="size">
						<Box>
							<ContestLayout page="submission" id={contestId}>
								<center>
									<h2>SUBMISSIONS</h2>
								</center>
								<div className="submission-list">
									<div className="flex-container">
										<div className="flex-item" style={{ flexBasis: '20%' }}>
											Time
										</div>
										<div className="flex-item" style={{ flexBasis: '25%' }}>
											Author
										</div>
										<div className="flex-item" style={{ flexBasis: '20%' }}>
											Status
										</div>
										<div className="flex-item" style={{ flexBasis: '10%' }}>
											Score
										</div>
										<div className="flex-item" style={{ flexBasis: '10%' }}>
											Time
										</div>
										<div className="flex-item" style={{ flexBasis: '10%' }}>
											Memory
										</div>
										<div className="flex-item" style={{ flexBasis: '10%' }}>
											Problem
										</div>
									</div>
									<div className="submission-list-box">
										{data ? (
											userState == false ? (
												<div className="none">Please log in before viewing the submissions!!!</div>
											) : (
												data.map((element, key) => {
													return (
														<ContestSubmissionList
															submitTime={element.whentime}
															time={element.time}
															author={element.displayname}
															memory={element.memory}
															score={element.score}
															status={element.status}
															problem={element.conquestionno}
															language={element.language}
															key={key}
														/>
													)
												})
											)
										) : (
											<div className="none">None</div>
										)}
									</div>
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

export default contestSubmission
