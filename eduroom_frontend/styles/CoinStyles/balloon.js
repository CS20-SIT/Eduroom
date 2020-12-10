import css from 'styled-jsx/css'
export default css`
	@keyframes float {
		0% {
			transform: translateY(100vh);
			opacity: 1;
		}
		100% {
			transform: translateY(-400vh);
			opacity: 0;
		}
	}

	.balloon {
		height: 125px;
		width: 105px;
		border-radius: 75% 75% 70% 70%;
		position: absolute;
		background-color: #ffd9f7;
		color: #d5c1fc;
		box-shadow: inset -7px -3px 10px pink;
		margin: 50px 0 0 100px;
		left: 950px;
		top: 75vh;
		animation: float infinite;
		animation-timing-function: ease-in;
	}
	.balloon:after {
		content: '▲';
		text-align: center;
		display: block;
		position: absolute;
		color: inherit;
		top: 120px;
		left: 0;
		right: 0;
		margin: auto;
	}
	.balloon:before {
		content: '';
		height: 75px;
		width: 1px;
		padding: 1px;
		background-color: #d5c1fc;
		display: block;
		position: absolute;
		top: 135px;
		left: 0;
		right: 0;
		margin: auto;
	}
`
