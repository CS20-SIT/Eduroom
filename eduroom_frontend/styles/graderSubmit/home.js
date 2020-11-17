import css from 'styled-jsx/css'
export default css`
	.page {
		width: 100%;
		height: 100%;
		display: flex;
		position: fixed;
	}
	.graphic,
	.content {
	}
	.graphic {
		width: 35%;
		display: flex;
		left: 50%;
	}
	img {
		left: 0;
		width: 90%;
		height: fit-content;
		position: relative;
		top: 18%;
		left: 5%;
	}
	.detail {
		width: 83%;
		padding: 0px;
	}
	.content {
		width: 60%;
	}
	.contest-box {
		height: 30%;
	}
	.announcement-box {
		height: 40%;
	}
	::-webkit-scrollbar {
		width: 8px; /* width of the entire scrollbar */
	}
	::-webkit-scrollbar-track {
		background: transparent; /* color of the tracking area */
	}
	::-webkit-scrollbar-thumb {
		background: rgba(91, 91, 91, 0.7); /* color of the scroll thumb */
		border-radius: 50px; /* roundness of the scroll thumb */
	}
`
