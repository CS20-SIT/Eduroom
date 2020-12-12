import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../../../components/graderSubmit/Layout'
import Box from '../../../../components/graderSubmit/Box'
import style from '../../../../styles/graderSubmit/problems/problems'
import Tag from '../../../../components/graderSubmit/problems/ProblemTag'
import ProblemList from '../../../../components/graderSubmit/problems/ProblemList'
import PageSelectionButton from '../../../../components/graderSubmit/PageSelectionButton'
import api from '../../../../api'

const Problems = ({ page }) => {
	const [questionsData, setQuestionsData] = useState([])
	const [tagsData, setTagsData] = useState([])
	const [countData, setCountData] = useState([])
	const [tag, setTag] = useState(null)

	useEffect(() => {
		const GetData = async () => {
			const questionsQuery = await api.get('api/grader/getPreviewQuestion', { params: { offset: page - 1 } })
			const countQuery = await api.get('api/grader/CountAllQuestion')
			const tagsQuery = await api.get('api/grader/getQuestionTag')
			setQuestionsData(questionsQuery.data)
			setCountData(countQuery.data.count)
			setTagsData(tagsQuery.data)
		}
		GetData()
	}, [page])

	const renderButton = (page) => {
		const arr = []
		let overflow = parseInt(0)
		const pages = Math.ceil(countData)

		// if (pages >= 4) {
		// 	if (page % 5 != 0) {
		// 		for (let i = 1; i <= 5; i++) {
		// 			if (i == 5) {
		// 				arr.push(<PageSelectionButton page={overflow * 4 + i} current={page} last={'Next'} />)
		// 				overflow++
		// 			} else {
		// 				arr.push(<PageSelectionButton page={overflow * 4 + i} current={page} />)
		// 			}
		// 		}
		// 	} else {
		// 		for (let i = 1; i <= 4; i++) {
		// 			arr.push(<PageSelectionButton page={overflow * 4 + i} current={page} />)
		// 		}
		// 	}
		// } else {
		// 	for (let i = 1; i <= pages; i++) {
		// 		arr.push(<PageSelectionButton page={i} current={page} />)
		// 	}
		// }

		return <Fragment>{arr}</Fragment>
	}

	useEffect(() => {
		api.get(`api/grader/getQuestionByTag?tag=${tag}`).then((res) => {
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
															pageID={page}
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
								<div className="button-container">{renderButton(page)}</div>
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
												key={key}
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

export async function getServerSideProps(ctx) {
	try {
		const page = ctx.query.page
		return { props: { page } }
	} catch (err) {
		return { props: { page: '' } }
	}
}

export default Problems
