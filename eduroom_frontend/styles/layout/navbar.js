import css from 'styled-jsx/css'
export default css`
	.navStyle {
		padding: 1% 4% 0% 4%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		cursor: default;
	}
	.navDefault {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		align-items: center;
	}
	.navHeader {
		color: #3d467f;
		font-size: 2em;
		font-weight: bold;
		font-family: 'Quicksand', sans-serif;
		cursor: pointer;
	}
	.navItem {
		color: #5b5b5b;
		margin-right: 2%;
		font-weight: 500;
		font-size: 1.2em;
		transition: 0.25s;
	}
	.navItem:hover {
		color: black;
		transition: 0.25s;
		cursor: pointer;
	}
	.navLogin {
		background: #fe75b7;
		border-radius: 25px;
		padding: 0.5rem 1.5rem;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.25s;
	}
	.navLogin:hover {
		cursor: pointer;
		opacity: 0.8;
		transition: 0.25s;
	}
	.navLoginText {
		color: white;
		font-weight: 700;
		font-size: 1.2em;
		font-family: 'Quicksand', sans-serif;
	}
	.navforumStyle {
		padding: 1% 4% 0% 4%;
		display: flex;
		flex: 1 0 0;
		align-items: center;
		justify-content: space-between;
		width: auto;
		cursor: default;
	}
	.buttonAdd {
		padding: 1% 4% 0% 4%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		cursor: default;
	}
	.searchBox {
		width: 300px;
		heigh: 500 px;
		padding: 8px 48px 8px 12px;
	}
	.avatar {
		border-radius: 50%;
	}
`
