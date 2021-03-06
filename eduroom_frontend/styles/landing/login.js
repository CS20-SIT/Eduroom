import css from 'styled-jsx/css'
export default css`
	.login {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 2% 5% 0% 5%;
		cursor: default;
	}
	.login-textfield {
		background: #eff0f6;
		border-radius: 10px;
		width: 100%;
		padding: 5%;
		border: none;
		font-size: 1.1em;
		color: #3d467f;
		margin-top: 16px;
	}
	.login-textfield ::placeholder {
		color: #3d467f;
		opacity: 0.75;
	}
	.login-page-img {
		width: 50%;
	}
	.login-content {
		width: 25vw;
		position: absolute;
		right: 12%;
		top: 24%;
		font-family: 'Quicksand', sans-serif;
	}
	.register-link {
		font-size: 1em;
		font-family: 'Quicksand', sans-serif;
		font-weight: bold;
		color: #fe75b7;
		padding-left: 2%;
		text-decoration-line: underline;
		cursor: pointer;
		margin-left: 5px;
	}
	.striaght-line {
		border-bottom: 1px solid rgba(71, 63, 71, 0.6);
		width: 45%;
		height: 12px;
	}
	.login-header {
		font-size: 2.4em;
		font-family: 'Quicksand', sans-serif;
		font-weight: bold;
		color: #3d467f;
	}
	.login-form {
		text-align: center;
	}
	.login-description {
		padding: 5% 0% 0 0%;
		font-size: 1em;
		font-family: 'Quicksand', sans-serif;
		font-weight: normal;
		color: #3d467f;
	}
	.error {
		color: red;
		display: flex;
		font-size: .8em;
		margin: 4px 0 4px 0;
	}
	.login-button {
		background: #3d467f;
		border-radius: 25px;
		padding: 0.75rem 5.3rem;
		margin-bottom: 5%;
		border: none;
		transition: 0.25s;
		outline: none;
		margin-top: 12px;
	}
	.login-button:hover {
		cursor: pointer;
		opacity: 0.9;
		transition: 0.2s;
	}
	.login-button-text {
		color: white;
		font-weight: 700;
		font-size: 1.5em;
		font-family: 'Quicksand', sans-serif;
	}
	.login-google-button {
		background: white;
		border-radius: 25px;
		padding: 0.75rem 2rem;
		border: 2px solid rgba(0, 0, 0, 0.3);
		margin-bottom: 5%;
		transition: 0.25s;
		outline: none;
	}
	.login-google-button:hover {
		cursor: pointer;
		opacity: 0.7;
		transition: 0.25s;
	}
	.or-text {
		color: rgba(71, 63, 71, 0.6);
		margin-bottom: 5%;
		display: flex;
		font-weight: bold;
	}
	.or-text-text {
		margin: 0% 2%;
	}
	.google-logo {
		width: 20px;
		margin-right: 12px;
	}
	.login-google-button-text {
		display: flex;
		align-items: center;
		color: rgba(71, 63, 71, 0.6);
		font-weight: 700;
		font-size: 1em;
		font-family: 'Quicksand', sans-serif;
	}
`
