import React, { Fragment, useState } from 'react'
const Node = ({ node, isLeft }) => {
	const [show, setShow] = useState(false)
	return (
		<Fragment>
			<div
				className="nodes-path"
				style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative' }}
				onClick={()=>console.log(node)}
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
			<style jsx>
				{`
					.content {
						width: 45%;
						display: flex;
						align-items: center;
						padding: 0rem 1rem;
						position: relative;
					}
					.content.left {
						justify-content: flex-end;
					}
					.content.right {
						justify-content: flex-start;
					}
					.node-title {
						font-size: 1.1em;
						font-weight: 600;
						color: #ffffff;
					}
					.node-desc {
						font-size: 0.9em;
						color: #eeeeee;
					}
					.node-description {
						width: 70%;
						position: absolute;
						top: -25px;
						background: white;
						border-radius: 10px;
						height: 100px;
						padding: 1rem;
						background: #828282ee;
					}
					.node {
						background: #d5c1fc;
						width: 50px;
						height: 50px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 25px;
						position: relative;
						z-index: 25;
						margin-bottom: 50px;
					}
					.nodes-path:first-child .node {
						background: #fb9ccb;
					}
					.nodes-path:last-child .node {
						background: #fb9ccb;
					}
					.nodes-path:not(:last-child) .node::after {
						content: '';
						position: absolute;
						text-align: center;
						display: block;
						width: 2px;
						height: 50px;
						background: #3d467f;
						top: 50px;
						z-index: 0;
						left: 0;
						right: 0;
						margin: auto;
					}
				`}
			</style>
		</Fragment>
	)
}
export default Node
