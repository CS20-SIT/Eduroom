import css from 'styled-jsx/css'
export default css`
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.size {
		width: 100%;
		height: 80%;
	}
	.main {
		width: 70%;
		display: inherit;
		margin-right: 1.5rem;
	}
	.tag {
		width: 23%;
	}
	.problem-list {
		height: 90%;
		overflow: auto;
		padding-top: 10px;
	}
	.tag-list {
		width: 100%;
		height: 90%;
		overflow: auto;
	}
	.list-of-pages {
		display: flex;
		justify-content: center;
	}

	.button-container {
		width: fit-content;
		color: #a27cef;
		margin-top: 30px;
		display: inherit;
		justify-content: space-evenly;
	}

	::-webkit-scrollbar {
		width: 4px; /* width of the entire scrollbar */
	}
	::-webkit-scrollbar-track {
		background: transparent; /* color of the tracking area */
	}
	::-webkit-scrollbar-thumb {
		background: rgba(91, 91, 91, 0.3); /* color of the scroll thumb */
		border-radius: 50px; /* roundness of the scroll thumb */
	}
`
