import React, { Fragment, useState } from 'react'
const Node = ({ node, isLeft }) => {
	const [show, setShow] = useState(false)
	return (
		<Fragment>
			<div
				className="nodes-path"
				style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative' }}
			>
				{isLeft ? (
					<Fragment>
						<div className="content left"
							onMouseEnter={() => {
								setShow(true)
							}}
							onMouseLeave={() => {
								setShow(false)
							}}>
							{show ? (
								<div className="node-description">
									<div className="node-title">{node.name}</div>
									<div className="node-desc">{node.descriptions}</div>
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
						>
							{node.nodeid}
						</div>
						<div className="content right"></div>
					</Fragment>
				) : (
					<Fragment>
						<div className="content left"></div>
						<div
							className="node"
							onMouseEnter={() => {
								setShow(true)
							}}
							onMouseLeave={() => {
								setShow(false)
							}}
						>
							{node.nodeid}
						</div>
						<div className="content right"
							onMouseEnter={() => {
								setShow(true)
							}}
							onMouseLeave={() => {
								setShow(false)
							}}>
							{show ? (
								<div className="node-description">
									<div className="node-title">{node.name}</div>
									<div className="node-desc">{node.descriptions}</div>
								</div>
							) : null}
						</div>
					</Fragment>
				)}
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
                    }
                    .node-desc {
                        font-size: 0.9em;
                        color:#333333;
                    }
					.node-description {
						width: 70%;
						position: absolute;
						top: -25px;
						background: white;
						border-radius: 10px;
						height: 100px;
						padding: 1rem;
					}
					.node {
						background: #ee223344;
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
					.nodes-path:not(:last-child) .node::after {
						content: '';
						position: absolute;
						text-align: center;
						display: block;
						width: 2px;
						height: 50px;
						background: black;
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
