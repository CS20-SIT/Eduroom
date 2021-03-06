import css from 'styled-jsx/css'
export default css`
	.content {
		width: 100%;
		margin-top: 2%;
		height: 86.6%;
		display: flex;
		justify-content: center;
	}
	.question,
	.code-box {
		width: 50%;
		overflow: hidden;
	}
	.question {
		border-right: 2px solid rgba(91, 91, 91, 0.1);
		border-bottom: 2px solid rgba(91, 91, 91, 0.1);
	}

	.code-box {
		height: 108%;
	}
`
