import React, { Fragment } from 'react'
import Node from './Node'
const NodeList = ({ nodes }) => {
	const renderNode = () => {
		let sortedNodes = sortNode(nodes)
		return sortedNodes.map((el, index) => {
			return <Node key={index} node={el} isLeft={index % 2 == 0} />
		})
	}
	const sortNode = (nodes) => {
		let nodeList = []
		let root = nodes.find((el) => el.parent_node_id == null)
		nodeList.push(root)
		while (nodeList.length < nodes.length) {
			nodeList.push(nodes.find((el) => el.parent_node_id == nodeList[nodeList.length - 1].nodeid))
		}
		return nodeList
	}
	return (
		<Fragment>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderNode()}</div>
		</Fragment>
	)
}
export default NodeList
