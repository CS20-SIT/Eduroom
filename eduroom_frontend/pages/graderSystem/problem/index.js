import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../../components/graderSubmit/Layout'
import Box from '../../../components/graderSubmit/Box'
import style from '../../../styles/graderSubmit/problems/problems'
import Tag from '../../../components/graderSubmit/problems/ProblemTag'
import ProblemList from '../../../components/graderSubmit/problems/ProblemList'
import api from '../../../api'

const Problems = () => {
	const [questionsData, setQuestionsData] = useState([])
	const [tagsData, setTagsData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const questionsQuery = await api.get('api/grader/getPreviewQuestion')
			const tagsQuery = await api.get('api/grader/getQuestionTag')
			console.log(questionsQuery.questionsData)
			setQuestionsData(questionsQuery.questionsData)
			setTagsData(tagsQuery.tagsData)
		}
		GetData()
	}, [])

	return (
		<Fragment>
			<Head>
				<title>Problems</title>
				<meta property="og:title" content="Problems" key="Problems" />
			</Head>
			<Layout page="problem">
				<div className="container">
					<div className="main">
						<div className="size">
							<Box>
								<h2>Problem List</h2>
								<div className="problem-list">
									{questionsData.map((element, key) => {
										return (
											<ProblemList
												id={element.id}
												title={element.title}
												description={element.description}
												difficulty={element.difficulty}
												key={key}
											/>
										)
									})}
								</div>
							</Box>
						</div>
					</div>
					<div className="tag">
						<div className="size">
							<Box>
								<h2>Tags</h2>
								<div className="tag-list">
									{tagsData.map((element, key) => {
										return <Tag name={element.tagname} key={key} />
									})}
								</div>
							</Box>
						</div>
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Problems
