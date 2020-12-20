import { Fragment, useState, useEffect } from 'react'
import General from '../../../components/template/general'
import api from '../../../api'
import Exercise from '../../../components/learningpath/Exercise'
import Quizs from '../../../components/learningpath/Quizs'
const NodeQuestion = ({ id, nodeID }) => {
	const [type, setType] = useState(null)
	const fetchType = async () => {
		try {
			const res = await api.get('/api/learningpath/nodeType', { params: { nodeID: nodeID } })
			setType(res.data.type)
		} catch (err) {
			console.log(err.data)
		}
	}
	useEffect(() => {
		fetchType()
	}, [nodeID])
	const renderPage = () => {
		if (type === 'exercise') {
			return <Exercise id={id} nodeID={nodeID}></Exercise>
		} else if (type === 'quiz') {
			return <Quizs id={id} nodeID={nodeID}></Quizs>
		}
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
export default NodeQuestion
