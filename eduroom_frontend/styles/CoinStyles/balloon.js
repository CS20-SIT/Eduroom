import css from 'styled-jsx/css'
export default css`
	@keyframes float {
		0% {
			transform: translateY(300vh);
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
		opacity:60%;
		color:#d5c1fc;
		margin: 50px 0 0 100px;
		left: 950px;
		top: 75vh;
		animation: float ;
		animation-timing-function: ease-in;
	}

	.balloon:before {
		content: '';
		height: 75px;
		width: 1px;
		padding: 1px;
		background-color: #d5c1fc;
		display: block;
		position: absolute;
		top: 125px;
		left: 0;
		right: 0;
		margin: auto;
	}
	.box{
		position:relative;
		top:-150vh;
	}
`
