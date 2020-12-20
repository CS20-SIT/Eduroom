import { Fragment } from 'react'
import General from '../../../components/template/general'
import api from '../../../api'
const NodeExercise = ({ id, nodeID }) => {
	const [learningPath,setLearningPath] = useState(null)
	const fetchLearningPath = async () =>{
		try{
			const res = await api.get('/api/test');
		}catch(err){

		}
	}
	const renderPage = () =>{
		if(!learningPath) return null
	}
	return (
		<Fragment>
			<General>
				<div>
					<h1>
						This is exercise {id} {nodeID}
					</h1>
				</div>
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
