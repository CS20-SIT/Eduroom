import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../../../../../components/graderSubmit/Layout'
import Box from '../../../../../components/graderSubmit/Box'
import style from '../../../../../styles/graderSubmit/submissions/questionSubmission'
import ContestSubmissionList from '../../../../../components/graderSubmit/contests/allList/ContestSubmissionList'
import api from '../../../../../api'

const Submission = ({ id }) => {
	const [data, setdata] = useState([])
	const [userData, setUserData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const userQuery = await api.get('/api/auth/profile')
			setUserData(userQuery.data.userid)
			const result = await api.get('/api/grader/getQuestionSubmission', {
				params: { questionId: id, userId: userData },
			})
			setdata(result.data)
		}
		GetData()
	}, [userData])
	return (
		<Fragment>
			<Layout page="problem">
				<div className="main">
					<div className="size">
						<Box>
							<center>
								<h2>SUBMISSIONS</h2>
							</center>
							<div className="submission-list">
								<div className="flex-container">
									<div className="flex-item" style={{ flexBasis: '20%' }}>
										Time
									</div>
									<div className="flex-item" style={{ flexBasis: '20%' }}>
										Author
									</div>
									<div className="flex-item" style={{ flexBasis: '20%' }}>
										Status
									</div>
									<div className="flex-item" style={{ flexBasis: '20%' }}>
										Problem
									</div>
									<div className="flex-item" style={{ flexBasis: '20%' }}>
										Language
									</div>
								</div>
								{data != '' ? (
									data.map((element, key) => {
										return (
											<ContestSubmissionList
												time={element.whentime}
												author={element.displayname}
												status={element.status}
												problem={element.conquestionno}
												language={element.language}
												key={key}
											/>
										)
									})
								) : (
									<div className="none">None</div>
								)}
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
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}

export default Submission

// {JSON.stringify(props.query.id)}
// export async function getServerSideProps(ctx) {
//   return { props: { query: ctx.query } }
// }
