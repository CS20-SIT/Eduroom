import css from 'styled-jsx/css'
export default css`
	textarea {
		font-family: monospace;
		width: 39vw;
		height: 60vh;
		border: none;
		resize: none;
		padding-left: 35px;
		padding-top: 10px;
		background: url(http://i.imgur.com/2cOaJ.png);
		background-attachment: local;
		background-repeat: no-repeat;
		line-height: 120%;
		border-right: 2px solid rgba(91, 91, 91, 0.1);
		border-bottom: 2px solid rgba(91, 91, 91, 0.1);
	}
	.box {
		text-align: center;
	}
	.lower-panel {
		height: 5%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.butt {
		height: 1.5rem;
		margin-top: 1rem;
		padding: 0 0.75rem;
		background-color: #a27cef;
		border: none;
		color: #ffffff;
		font-weight: bold;
		font-size: 0.875rem;
		border-radius: 5px;
	}
	.butt:hover {
		color: #a27cef;
		background-color: #ffffff;
		border: solid 1px #a27cef;
	}
	.status {
		margin-top: 1rem;
		margin-left: 0.75rem;
		font-weight: bold;
		padding: 6px;
	}
	.a {
		color: #6fcf97;
	}
	.pa {
		color: #a27cef;
	}
	.re,
	.wa {
		color: #eb5757;
	}
	.tle,
	.mle,
	.ce {
		color: #f3b496;
	}
	.pending {
		width: 20px;
		height: 20px;
	}
	.block {
		height: 1.5rem;
		margin-top: 1rem;
		padding: 0 0.75rem;
		background-color: #828282;
		border: none;
		color: #ffffff;
		font-weight: bold;
		font-size: 0.875rem;
		border-radius: 5px;
	}

	// Animation
	@keyframes anima1 {
		0% {
			top: 0;
			left: 0;
		}
		25% {
			top: 0;
			left: calc(100% - 20px);
		}
		50% {
			top: calc(100% - 20px);
			left: calc(100% - 20px);
		}
		75% {
			top: calc(100% - 20px);
			left: 0;
		}
		100% {
			top: 0;
			left: 0;
		}
	}
	@keyframes anima2 {
		0% {
			top: 0;
			left: calc(100% - 20px);
		}
		25% {
			top: calc(100% - 20px);
			left: calc(100% - 20px);
		}
		50% {
			top: calc(100% - 20px);
			left: 0;
		}
		75% {
			top: 0;
			left: 0;
		}
		100% {
			top: 0;
			left: calc(100% - 20px);
		}
	}
	@keyframes anima3 {
		0% {
			top: calc(100% - 20px);
			left: calc(100% - 20px);
		}
		25% {
			top: calc(100% - 20px);
			left: 0;
		}
		50% {
			top: 0;
			left: 0;
		}
		75% {
			top: 0;
			left: calc(100% - 20px);
		}
		100% {
			top: calc(100% - 20px);
			left: calc(100% - 20px);
		}
	}
	@keyframes anima4 {
		0% {
			top: calc(100% - 20px);
			left: 0;
		}
		25% {
			top: 0;
			left: 0;
		}
		50% {
			top: 0;
			left: calc(100% - 20px);
		}
		75% {
			top: calc(100% - 20px);
			left: calc(100% - 20px);
		}
		100% {
			top: calc(100% - 20px);
			left: 0;
		}
	}
	body {
		margin: 0;
	}
	.container {
		height: 10px;
		width: 10px;
		margin: 20px 20px;
		position: relative;
	}
	.item {
		position: absolute;
		border-radius: 50%;
		height: 5px;
		width: 5px;
	}
	.item:nth-child(1) {
		background-color: #6fcf97;
		top: 0;
		left: 0;
		animation: anima1 2s ease infinite;
	}
	.item:nth-child(2) {
		background-color: #a27cef;
		top: 0;
		right: 0;
		animation: anima2 2s ease infinite;
	}
	.item:nth-child(3) {
		background-color: #eb5757;
		bottom: 0;
		left: 0;
		animation: anima3 2s ease infinite;
	}
	.item:nth-child(4) {
		background-color: #f3b496;
		bottom: 0;
		right: 0;
		animation: anima4 2s ease infinite;
	}
`
