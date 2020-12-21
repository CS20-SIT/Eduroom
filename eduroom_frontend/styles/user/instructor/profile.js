import css from 'styled-jsx/css'
export default css`
	.nav {
		margin: 10px 50px 0 50px;
		display: flex;
	}
	.textNav {
		color: black;
		transition: 0.25s;
		margin: 0 20px 0 0;
	}
	.textNav:hover {
		cursor: pointer;
		color: #3d467f;
		transition: 0.25s;
	}
	.container {
		padding: 30px 50px;
		display: flex;
	}
	.courses {
		width: 60%;
		margin-right: 50px;
	}
	.profile {
		width: 45%;
		margin-right: 50px;
		filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
		display: flex;
		flex-direction: column;
	}
	.header {
		border-radius: 30px 30px 0 0;
		height: 200px;
		background: linear-gradient(323.28deg, rgba(213, 138, 187, 0.8) 0.2%, rgba(129, 127, 188, 0.8) 99.77%);
	}
	.detail {
		margin: 0;
		padding: 0;
		padding-bottom: 30px;
		background: white;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
	}
	.human {
		display: flex;
		justify-content: space-between;
	}
	.img {
		margin-top: -100px;
		margin-left: 50%;
		position: absolute;
	}
	.detailProfile {
		padding: 5px 40px;
	}

	.avatar {
		border-radius: 20px;
	}
	.topic {
		color: #fb9ccb;
		font-weight: 700;
		min-width: 100px;
	}
	.box {
		width: 275px;
		display: flex;
		margin-top: 20px;
	}
	.det {
		color: #858585;
	}

	.boxBio {
		width: 100%;
		display: flex;
		margin-top: 20px;
	}
	.detBio {
		color: #858585;
	}
	.boxPackage {
		margin-top: 50px;
		background: #ffffff;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 20px 10px;
		margin-bottom: 20px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: 0.3s;
	}
	.boxPackage:hover {
		opacity: 0.7;
		transition: 0.3s;
		cursor: pointer;
	}
	.edit:hover {
		cursor: pointer;
	}

	.btn {
		background: #3d467f;
		border-radius: 15px;
		color: white;
		padding: 10px 15px;
	}
	.btn:hover {
		cursor: pointer;
	}

	.textfield {
		background: #eff0f6;
		border-radius: 10px;
		border: none;
		color: #3d467f;
		padding: 14px;
		width: 100%;
	}
`
