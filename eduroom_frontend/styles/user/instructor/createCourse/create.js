import css from 'styled-jsx/css'
export default css`
	.header {
		position: absolute;
		top: 0;
		width: 100%;
		height: 130px;
		background: linear-gradient(323.28deg, rgba(213, 138, 187, 0.8) 0.2%, rgba(129, 127, 188, 0.8) 99.77%);
	}
	.container {
		margin-top: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box {
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 15px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		padding: 50px;
		width: 75%;
		margin-bottom: 100px;
	}
	.action {
		margin-top: 50px;
		display: flex;
		justify-content: flex-end;
	}
	.btn {
		margin-left: 20px;
		border: 2px solid #f39ac4;
		color: #f39ac4;
		font-size: 16px;
		box-sizing: border-box;
		border-radius: 30px;
		background-color: white;
		padding: 6px 25px;
		opacity: 1;
		transition: 0.25s;
	}
	.btn:hover {
		cursor: pointer;
		opacity: 0.75;
		transition: 0.25s;
	}
`
