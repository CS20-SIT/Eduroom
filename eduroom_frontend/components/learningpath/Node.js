import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/learningPathStyles/nodeStyle'

const Node = ({ node, isLeft }) => {
	const [show, setShow] = useState(false)
	const router = useRouter()
	const getNodeClass = () => {
		return node.parent_complete ? 'active' : 'disable'
	}
	const handleClick = () => {
		if (node.parent_complete) {
			router.push(`/learningpath/${node.pathid}/${node.nodeid}`)
		}
	}
	return (
		<Fragment>
			{node ? (
				<div
					className={`nodes-path ${getNodeClass()}`}
					style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative' }}
					onClick={handleClick}
				>
					<div
						className="content left"
						onMouseEnter={() => {
							if (isLeft) {
								setShow(true)
							}
						}}
						onMouseLeave={() => {
							if (isLeft) {
								setShow(false)
							}
						}}
					>
						{isLeft && show ? (
							<div className="node-description">
								<div className="node-title">{node.node_name}</div>
								<div className="node-desc">{node.node_desc}</div>
							</div>
						) : null}
					</div>
					<div
						className="node"
						onMouseEnter={() => {
							setShow(true)
						}}
						onMouseLeave={() => {
							setShow(false)
						}}
					></div>
					<div
						className="content right"
						onMouseEnter={() => {
							if (!isLeft) {
								setShow(true)
							}
						}}
						onMouseLeave={() => {
							if (!isLeft) {
								setShow(false)
							}
						}}
					>
						{!isLeft && show ? (
							<div className="node-description">
								<div className="node-title">{node.node_name}</div>
								<div className="node-desc">{node.node_desc}</div>
							</div>
						) : null}
					</div>
				</div>
			) : null}
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Node
