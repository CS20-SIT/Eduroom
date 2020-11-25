import React, { Fragment, useState, useEffect, useCallback } from 'react'
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
	const [tag, setTag] = useState(null)

	useEffect(() => {
		const GetData = async () => {
			const questionsQuery = await api.get('api/grader/getPreviewQuestion')
			const tagsQuery = await api.get('api/grader/getQuestionTag')
			setQuestionsData(questionsQuery.data)
			setTagsData(tagsQuery.data)
			console.log(questionsQuery.data.length)
		}
		GetData()
	}, [])

	useEffect(() => {
		api.get(`api/grader/getQuestionByTag?tag=${tag}`).then((res) => {
			console.log(res.data)
			setQuestionsData(res.data)
		})
	}, [tag])

	let content = (
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
									{questionsData != null
										? questionsData.map((element, key) => {
												return (
													<Fragment>
														<ProblemList
															id={element.id}
															title={element.title}
															description={element.description}
															difficulty={element.difficulty}
															key={key}
														/>
													</Fragment>
												)
										  })
										: null}
								</div>
							</Box>
							<div className="list-of-pages">
								<div className="button-container">
									<div className="first-button">Prev</div>
									<div className="second-button">2</div>
									<div className="third-button">3</div>
									<div className="forth-button">4</div>
									<div className="fifth-button">Next</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tag">
						<div className="size">
							<Box>
								<h2>Tags</h2>
								<div className="tag-list">
									{tagsData.map((element, key) => {
										return (
											<Tag
												tagName="tag"
												name={element.tagname}
												key={key}
												changeTag={(tag) => setTag(tag)}
												currentTag={tag}
											/>
										)
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
	if (questionsData == null) {
		content = <h1>IS LOADING</h1>
	}

	return <Fragment>{content}</Fragment>
}
export default Problems
