import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Quiz from './Quiz'
import api from '../../api'
import style from '../../styles/learningPathStyles/quiz'

const Quizs = ({ id, nodeID }) => {
	const [detail, setDetail] = useState(null)
	const [questions, setQuestions] = useState(null)
	const [current, setCurrent] = useState(0)
	const [num, setNum] = useState(null)
	const [selected, setSelected] = useState([])
	const [submit, setSubmit] = useState(false)
	const router = useRouter()
	const fetchData = async () => {
		try {
			const res = await api.get('/api/learningpath/quizByNodeId', { params: { nodeID } })
			let q = res.data.questions
			const temp = new Array(q.length).fill(null)
			setSelected(temp)
			setDetail(res.data.nodeDetail)
			setQuestions(q)
			setNum(q.length)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchData()
	}, [])
	const changeSelected = (newSelected) => {
		setSelected([...newSelected])
	}
	const renderQuestion = () => {
		return (
			<div style={{ minHeight: '240px' }}>
				<Quiz id={current} data={questions[current]} selected={selected} changeSelected={changeSelected}></Quiz>
			</div>
		)
	}
	const handleLeft = () => {
		if (current !== 0) {
			setCurrent(current - 1)
		}
	}
	const getScore = () => {
		let sum = 0
		for (let i = 0; i < questions.length; i++) {
			for (let j = 0; j < questions[i].choices.length; j++) {
				const c = questions[i].choices[j]
				if (c.iscorrect && selected[i] === j) {
					sum++
					break
				}
			}
		}
		return sum
	}
	const handleSubmit = async () => {
		try {
			setSubmit(true)
			const body = { score: getScore(), nodeid: nodeID, type: 'quiz' }
			await api.post('/api/learningpath/completeNode', body)
		} catch (err) {
			console.log(err)
		}
	}
	const renderButton = () => {
		let rightButton = (
			<Fragment>
				<div onClick={() => setCurrent(current + 1)} className="goQuestion">
					<div style={{ marginRight: '5px' }}>Next Question</div>
					<i className={`fas fa-chevron-right `}></i>
				</div>
				<style jsx>{style}</style>
			</Fragment>
		)
		if (current === num - 1) {
			rightButton = (
				<Fragment>
					<div className="submitBtn" onClick={handleSubmit}>
						Submit
					</div>
					<style jsx>{style}</style>
				</Fragment>
			)
		}
		return (
			<Fragment>
				<div className="action">
					<div className={`goQuestion ${current === 0 ? 'disable' : ''}`} onClick={handleLeft}>
						<i className={`fas fa-chevron-left `}></i>
						<div style={{ marginLeft: '5px' }}>Previous Question</div>
					</div>
					{rightButton}
				</div>
				<style jsx>{style}</style>
			</Fragment>
		)
	}

	const renderContent = () => {
		if (submit) {
			return (
				<Fragment>
					<h4 style={{ textAlign: 'center' }}>
						Your score: {getScore()}/{num}
					</h4>
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					{renderQuestion()}
					{renderButton()}
				</Fragment>
			)
		}
	}
	const renderPage = () => {
		if (!questions || !detail) return null
		return (
			<Fragment>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div className="container">
						<div className="card">
							<div className="back" onClick={() => router.push('/learningpath')}>
								<i className="fas fa-chevron-left"></i>
								{'  Back'}
							</div>
							<div style={{ margin: '30px' }}>
								<h1 className="blue" style={{ margin: '0' }}>
									{detail.path_name} Path
								</h1>
								<h3 style={{ margin: '0' }}>{detail.node_name}</h3>
								{renderContent()}
							</div>
						</div>
					</div>
				</div>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<div>{renderPage()}</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Quizs
