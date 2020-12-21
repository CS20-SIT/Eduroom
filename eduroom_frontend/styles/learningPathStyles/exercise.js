import css from 'styled-jsx/css'
export default css`
	.container {
    padding: 20px;
    width: 60%;
	}
	.blue {
		color: #3d467f;
		display: flex;
	}
	.card {
		background: #ffffff;
		padding: 25px;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}

	.textField {
		background: #eff0f6;
		border-radius: 10px;
		width: 100%;
		padding: 5%;
		border: none;
		font-size: 1.1em;
		color: #3d467f;
	}

	.form {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.back {
		font-size: 20px;
	}
	.back:hover {
		cursor: pointer;
	}
	.active {
		opacity: 1;
	}
	.active:hover {
		cursor: pointer;
	}
	.disable {
		opacity: 0.5;
	}
	.disable:hover {
		cursor: default;
  }
  
  .error{
    
  }

	.check {
		padding: 10px;
		background: #3d467f;
    border-radius: 10px;
    color: white;
    margin-left: 20px;
  }
  .check:hover{
    cursor: pointer;
  }
`
