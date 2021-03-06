import css from 'styled-jsx/css'
export default css`
	.container {
		margin: 2rem;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	}
	.avatar {
		border-radius: 50px;
	}
	.profile-container {
		display: flex;
	}
	.header {
		font-weight: 700;
		margin-bottom: 3px;
	}
	.topic {
		margin-bottom: 15px;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.edit {
		display: flex;
	}
	.edit:hover {
		cursor: pointer;
	}
	.editText {
		margin-bottom: 0;
		color: #f39ac4;
	}
	.btn {
		background: #f39ac4;
		border-radius: 25px;
		padding: 0.75rem 2rem;
		margin-bottom: 5%;
		border: none;
		transition: 0.25s;
		outline: none;
		margin-top: 5px;
		color: white;
		font-size: 16px;
	}

	.btn:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	.edit-icon {
		color: #f39ac4;
		margin-left: 9px;
	}
`
