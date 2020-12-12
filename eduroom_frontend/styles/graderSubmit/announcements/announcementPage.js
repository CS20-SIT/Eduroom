import css from 'styled-jsx/css'
export default css`
	.main {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.size {
		width: 90%;
		height: 80%;
	}
	.announcement {
		width: 100%;
		color: #f39ac4;
		text-align: center;
	}
	.title {
		margin-top: 0;
		color: #3d467f;
	}
	p {
		height: 57vh;
		color: #828282;
		margin-bottom: 0;
		padding: 0 2rem;
	}

	.items {
		display: flex;
	}
	.left,
	.right {
		height: 62vh;
	}
	.left {
		width: 80%;
	}
	.right {
		text-align: end;
		color: #828282;
		width: 20%;
		font-weight: bold;
	}
`
