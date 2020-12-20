import React, { Fragment, useState, useEffect } from 'react'
import style from '../../../styles/graderSubmit/problems/problemQuestion'
import api from '../../../api'

const ProblemQuestion = (props) => {
	const [data, setData] = useState(null)
	const [testCaseData, setTestCaseData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			if (props.contestID === undefined) {
				const result = await api.get('/api/grader/getQuestionDetail', {
					params: { id: props.questionId },
				})
				setData(result.data[0])
			} else {
				const result = await api.get('/api/grader/getContestQuestionDetail', {
					params: { id: props.questionId, contestId: props.contestID },
				})

				setData(result.data[0])
			}
			const testCaseResult = await api.get('/api/grader/getQuestionTestCase', {
				params: { id: props.questionId },
			})
			setTestCaseData(testCaseResult.data)
		}
		GetData()
	}, [])
	console.log(testCaseData)
	return (
		<Fragment>
			{data ? (
				<Fragment>
					<div className="box">
						<div className="title" style={{ flex: '1' }}>
							<div>{`${data.conquestionno != null ? data.conquestionno + `.` : ''} ${data.title}`}</div>
							<div className="admin-name">by {data.displayname}</div>
						</div>
						<div className="tag" style={{ flex: '0.5' }}>
							{data.difficulty}
						</div>
					</div>
					<div className="description-box">
						<div className="text">
							<div className="constraints">
								<div className="constraints-title">
									<div className="c1" style={{ flexBasis: '33%' }}>
										Time Limit
									</div>
									<div className="c2" style={{ flexBasis: '33%' }}>
										Memory Limit
									</div>
									<div className="c3" style={{ flexBasis: '33%' }}>
										Rule Type
									</div>
								</div>
								<div className="constraints-limit">
									<div className="a1" style={{ flexBasis: '33%' }}>
										{data.timelimit} ms
									</div>
									<div className="a2" style={{ flexBasis: '33%' }}>
										{data.memorylimit} MB
									</div>
									<div className="a3" style={{ flexBasis: '33%' }}>
										{data.ruletype.toUpperCase()}
									</div>
								</div>
							</div>
							<div className="sub-box description">
								<div className="des-title">Description</div>
								<div className="des-data">{data.description}</div>
							</div>
							<div className="sub-box input">
								<div className="des-title">Input description</div>
								<div className="des-data">{data.intputdes}</div>
							</div>
							<div className="sub-box output">
								<div className="des-title">Out description</div>
								<div className="des-data">{data.outputdes}</div>
							</div>
							<div className="sub-box hint">
								<div className="des-title">Hints</div>
								<div className="des-data">{data.hint}</div>
							</div>
							<div className="sub-box testcases">
								<div className="des-title">Test cases</div>
								<div className="input-wrap">
									<div className="input-title">Input:</div>
									<div className="input-box">
										{testCaseData.map((element, key) => {
											return (
												<div className="input-data" key={key}>
													{element.intput}
												</div>
											)
										})}
									</div>
								</div>
								<div className="output-wrap">
									<div className="output-title">Output:</div>
									<div className="output-box">
										{testCaseData.map((element, key) => {
											return (
												<div className="output-data" style={{ whiteSpace: 'pre' }} key={key}>
													{element.output}
												</div>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			) : null}
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ProblemQuestion
