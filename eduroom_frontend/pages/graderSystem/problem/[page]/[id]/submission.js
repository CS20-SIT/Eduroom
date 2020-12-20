import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../../../../../components/graderSubmit/Layout'
import Box from '../../../../../components/graderSubmit/Box'
import style from '../../../../../styles/graderSubmit/submissions/questionSubmission'
import QuestionSubmissionList from '../../../../../components/graderSubmit/problems/QuestionSubmissionList'
import api from '../../../../../api'
import ProblemNav from '../../../../../components/graderSubmit/problems/ProblemNav'

const Submission = ({ id, page }) => {
	const [data, setdata] = useState([])
	const [userData, setUserData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const userQuery = await api.get('/api/auth/profile')
			setUserData(userQuery.data)

			const result = await api.get('/api/grader/getQuestionSubmission', {
				params: { questionId: id, userId: userQuery.data.userid },
			})
			setdata(result.data)
		}
		GetData()
	}, [])
	return (
		<Fragment>
			<Layout page="problem">
				<div className="main">
					<div className="size">
						<Box>
							<ProblemNav page="submission" pageId={page} id={id} />
							<center>
								<h2>SUBMISSIONS</h2>
							</center>
							<div className="submission-list">
								<div className="flex-container">
									<div className="flex-item" style={{ flexBasis: '20%' }}>
										Submit At
									</div>
									<div className="flex-item" style={{ flexBasis: '30%' }}>
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
										Momory
									</div>
								</div>
								<div className="submission-list-box">
									{data != null ? (
										data.map((element, key) => {
											return (
												<QuestionSubmissionList
													submitTime={element.whentime}
													status={element.status}
													score={element.score}
													time={element.time}
													memory={element.memory}
													author={element.displayname}
													key={key}
												/>
											)
										})
									) : (
										<div className="none">None</div>
									)}
								</div>
							</div>
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
		const page = ctx.query.page
		return { props: { id, page } }
	} catch (err) {
		return { props: { id: '', page: '' } }
	}
}

export default Submission

// {JSON.stringify(props.query.id)}
// export async function getServerSideProps(ctx) {
//   return { props: { query: ctx.query } }
// }
