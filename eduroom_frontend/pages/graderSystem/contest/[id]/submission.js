import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../components/graderSubmit/Box'
import Layout from '../../../../components/graderSubmit/Layout'
import style from '../../../../styles/graderSubmit/contests/contestPage/submission/contestSubmissionPage'
import ContestLayout from '../../../../components/graderSubmit/contests/ContestLayout'
import ContestSubmissionList from '../../../../components/graderSubmit/contests/allList/ContestSubmissionList'
import api from '../../../../api'

const contestSubmission = ({ id }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('api/grader/getContestSubmission', {
				params: { id },
			})
			console.log(result.data)
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
							<ContestLayout page="submission" id={id}>
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
									{data.map((element, key) => {
										return data ? (
											<ContestSubmissionList
												time={element.whentime}
												author={element.displayname}
												status={element.status}
												problem={element.conquestionno}
												language={element.language}
												key={key}
											/>
										) : null
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

export default contestSubmission
