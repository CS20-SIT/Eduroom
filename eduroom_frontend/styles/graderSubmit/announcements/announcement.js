import css from 'styled-jsx/css'
export default css`
	.list {
		display: flex;
		color: #bdbdbd;
		padding: 0.7rem 0 0.7rem 0;
		margin: 0 0.5rem;
		transition: transform 0.2s;
	}
	.title {
		width: 60%;
		padding-left: 0.5rem;
	}
	.status {
		width: 40%;
	}
	.admin {
		width: 30%;
	}
	.time {
		width: 70%;
	}
	.status {
		display: flex;
		justify-content: space-between;
	}
	.click {
		cursor: pointer;
	}
	.list:hover {
		transform: translateY(-4px);
		color: #f39ac4;
	}
`
