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

	const renderButtons = () => {
		if (correct === true) {
		} else {
		}
	}
	const renderPage = () => {
		if (!learningPath) return null
		return (
			<Fragment>
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
								<div style={{ width: '300px' }}>
									<input
										type="text"
										className="textField"
										placeholder="Your answer"
										value={text}
										onChange={(e) => setText(e.target.value)}
									></input>
								</div>
								<div>{renderButtons()}</div>
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
