import css from 'styled-jsx/css'
export default css`
	.container {
		margin: 50px;
	}
	.box {
		background: #ffffff;
		box-shadow: 0px 3px 10px #ebebeb;
		border-radius: 20px;
		display: flex;
		padding: 20px;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.approveBtn {
		display: flex;
		background: #3d467f;
		border-radius: 20px;
		padding: 10px 15px;
		opacity: 1;
		color: white;
	}
	.approveBtn:hover {
		opacity: 0.75;
		cursor: pointer;
	}
`
