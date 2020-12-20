import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import General from '../../../components/template/general'
import api from '../../../api'
import style from './../../../styles/learningPathStyles/exercise'
const NodeExercise = ({ id, nodeID }) => {
	const [learningPath, setLearningPath] = useState(null)
	const [correct, setCorrect] = useState(null)
	const [text, setText] = useState('')
	const router = useRouter()
	const fetchLearningPath = async () => {
		try {
			const res = await api.get('/api/learningpath/exercise', { params: { nodeID } })
			console.log(res.data)
			setLearningPath(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchLearningPath()
	}, [])
	const getNextClass = () => {
		return correct ? 'active' : 'disable'
	}
	const getText = () => {
		if (correct === true) {
			return <span style={{ color: 'green' }}>Correct!!</span>
		} else if (correct === false) {
			return <span style={{ color: 'red' }}>Wrong!!</span>
		}
	}
	const checkAnswer = () => {
		setCorrect(text.toLowerCase() === learningPath.answer.toLowerCase())
	}
	const renderPage = () => {
		if (!learningPath) return null
		return (
			<Fragment>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div className="container">
						<div className="card">
							<div onClick={() => router.push('/learningpath')}>
								<i className="fas fa-chevron-left back"></i>
							</div>
							<div style={{ margin: '20px' }}>
								<h1 className="blue" style={{ margin: '0' }}>
									{learningPath.path_name} Path
								</h1>
								<h3 style={{ margin: '0' }}>{learningPath.node_name}</h3>
								<h4>Question: {learningPath.question}</h4>
								<div className="form">
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<div style={{ width: '300px' }}>
											<input
												type="text"
												className="textField"
												placeholder="Your answer"
												value={text}
												onChange={(e) => setText(e.target.value)}
											></input>
										</div>
										<div className="check" onClick={checkAnswer}>
											Check answer
										</div>
									</div>
									<div>
										<div style={{ fontSize: '20px' }} className={`${getNextClass()}`}>
											Next <i className={`fas fa-chevron-right `} style={{ fontSize: '20px' }}></i>
										</div>
									</div>
								</div>
								<div>{getText()}</div>
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
			<General>
				<div>{renderPage()}</div>
			</General>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		const nodeID = ctx.query.nodeID
		return { props: { id, nodeID } }
	} catch (err) {
		return { props: { id: '', nodeID: '' } }
	}
}
export default NodeExercise
