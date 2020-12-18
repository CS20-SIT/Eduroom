import css from 'styled-jsx/css'
export default css`
	.header {
		position: absolute;
		top: 0;
		width: 100%;
		height: 130px;
		background: linear-gradient(323.28deg, rgba(213, 138, 187, 0.8) 0.2%, rgba(129, 127, 188, 0.8) 99.77%);
	}
	.container {
		margin-top: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box {
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 15px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		padding: 50px;
		width: 75%;
		margin-bottom: 100px;
	}
	.action {
		margin-top: 50px;
		display: flex;
		justify-content: flex-end;
	}
	.btn {
		margin-left: 20px;
		border: 2px solid #f39ac4;
		color: #f39ac4;
		font-size: 16px;
		box-sizing: border-box;
		border-radius: 30px;
		background-color: white;
		padding: 6px 25px;
		opacity: 1;
		transition: 0.25s;
	}
	.btn:hover {
		cursor: pointer;
		opacity: 0.75;
		transition: 0.25s;
	}
	.materialCard {
		background: #ffffff;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	.addContainer {
		background: #ffffff;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 20px 10px;
		margin-bottom: 20px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: 0.3s;
	}
	.addContainer:hover {
		opacity: 0.7;
		transition: 0.3s;
		cursor: pointer;
	}

	.addMaterialContainer {
		background: #ffffff;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 10px 5px;
		margin-bottom: 20px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: 0.3s;
	}
	.addMaterialContainer:hover {
		opacity: 0.7;
		transition: 0.3s;
		cursor: pointer;
	}
	.plus {
		font-size: 40px;
		padding: 0 0 10px 0;
		color: #3d467f;
	}
	.circle {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
		width: 45px;
		height: 45px;
		border: 1px solid #3d467f;
		box-sizing: border-box;
		border-radius: 100px;
	}
	.textfield {
		background: #eff0f6;
		border-radius: 10px;
		max-width: 100%;
		border: none;
		font-size: 1.1em;
		color: #3d467f;
		padding: 14px;
	}
	.textfield.error {
		border: 1px solid #ed3f14;
	}
	.textfield ::placeholder {
		color: #3d467f;
		opacity: 0.75;
	}
	.camera {
		opacity: 1;
		transition: 0.3s;
	}
	.camera:hover {
		opacity: 0.75;
		transition: 0.3s;
		cursor: pointer;
	}
	.title {
		color: #353e6c;
	}
	.icon {
		margin-left: 10px;
		opacity: 0.6;
		transition: 0.25s;
	}
	.icon:hover {
		opacity: 0.9;
		transition: 0.25s;
		cursor: pointer;
	}
`
