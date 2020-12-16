import css from 'styled-jsx/css'
export default css`
	#div {
		background-color: rgba(0, 0, 0, 0.4);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 100vw;
		height: 1000vh;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000000;
	}
	#balloon-container {
		width: 182.5vh;
		height: 90vh;
		padding: 1em;
		box-sizing: border-box;
		overflow: hidden;
		position: absolute;
		z-index:-1;
		
	}
	#test{
		z-index:100;
	}
`
