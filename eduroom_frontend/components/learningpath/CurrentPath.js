import React, { Fragment, useState } from 'react'
import NodeList from './NodeList'
import api from '../../api'
const CurrentPath = ({ path, back }) => {
	const [nodes, setNodes] = useState([])
	const fetchDetail = async () => {
		try {
			const res = await api.get('/api/learningpath/path', { params: { pathid: path.pathid } })
			console.log(res.data.data)
			setNodes(res.data.data)
		} catch (err) {
			console.log(err)
		}
	}
	useState(() => {
		fetchDetail()
	}, [])
	return (
		<Fragment>
			<div className="current-path">
				<div onClick={back} style={{ cursor: 'pointer' }}>
					<i className="fas fa-chevron-left" /> <span> back</span>
				</div>
				<div className="path-name-title">{path.path_name} Path</div>
				<div>
					<NodeList nodes={nodes} />
				</div>
			</div>
			<style jsx>
				{`
					.path-name-title {
						font-size: 1.4rem;
						font-weight: 700;
						text-align: center;
						padding: 1rem 2rem 2rem;
					}
					.current-path {
						display: flex;
						flex-flow: column;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CurrentPath
