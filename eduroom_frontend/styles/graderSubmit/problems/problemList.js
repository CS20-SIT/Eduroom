import css from 'styled-jsx/css'
export default css`
	.title {
		color: #5b5b5b;
		font-size: 1rem;
		font-weight: bold;
	}
	.box {
		height: 200px;
		display: flex;
		position: relative;
		border: 1px solid #5b5b5b;
		border-radius: 10px;
		padding: 2rem;
		margin-bottom: 2rem;
		margin-right: 0.25rem;
	}
	.box-unhover {
		animation: down 0.2s forwards;
	}
	.box:hover {
		animation: up 0.2s forwards ease-out;
	}

	.left,
	.right {
		height: 100%;
	}
	.left {
		width: 70%;
	}
	.right {
		width: 30%;
	}
	p {
		font-size: 0.93rem;
		color: #5b5b5b;
		height: 72%;
		overflow: auto;
		margin-bottom: 0;
	}
	.right-top,
	.right-bottom {
		height: 50%;
		display: flex;
		justify-content: flex-end;
	}
	.right-bottom {
		align-items: flex-end;
	}
	.difficulty,
	button {
		height: fit-content;
	}
	.difficulty {
		margin: 0;
		color: #a27cef;
		font-weight: bold;
	}
	button {
		font-size: 1.125rem;
		color: #ffffff;
		padding: 0 3.5rem 0 3.5rem;
		background-color: #eb7db1;
		border: 1px solid #eb7db1;
		border-radius: 5px;
	}
	button:hover {
		color: #eb7db1;
		cursor: pointer;
		background-color: #ffffff;
	}

	::-webkit-scrollbar {
		width: 6px; /* width of the entire scrollbar */
	}
	::-webkit-scrollbar-track {
		background: transparent; /* color of the tracking area */
	}
	::-webkit-scrollbar-thumb {
		background: rgba(91, 91, 91, 0.3); /* color of the scroll thumb */
		border-radius: 50px; /* roundness of the scroll thumb */
	}

	@keyframes up {
		0% {
			transform: translateY(0);
		}
		60% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(-10px);
			box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
		}
	}

	@keyframes down {
		0% {
			transform: translateY(-10px);
			box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
		}
		100% {
			transform: translateY(0px);
			box-shadow: 0 10px 10px rgba(0, 0, 0, 0);
		}
	}
`
