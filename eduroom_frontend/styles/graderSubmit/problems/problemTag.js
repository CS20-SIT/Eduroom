import css from 'styled-jsx/css'
export default css`
	button {
		color: #3d467f;
		margin: 4px 2px;
		font-weight: bold;
		padding: 0.2rem 0.5rem;
		width: fit-content;
		align-self: center;
		border-radius: 50px;
		border: 1px solid #d5c1fc;
		background-color: transparent;
		outline: none;
		transition: transform 0.2s;
	}
	button:hover,
	.active {
		color: #ffffff;
		background-color: #3d467f;
	}
	button:hover {
		transform: translateY(-4px);
		box-shadow: 0px 4px 12px #bdbdbd;
	}
`
