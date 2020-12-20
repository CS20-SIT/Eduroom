import css from 'styled-jsx/css'
export default css`
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
	.nodes-path {
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
	.disable {
		opacity: 0.5;
	}
	.disable:hover {
	}
	.active {
		opacity: 1;
	}
	.active:hover {
		cursor: pointer;
	}
	.temp {
		background-color: red;
	}
`
