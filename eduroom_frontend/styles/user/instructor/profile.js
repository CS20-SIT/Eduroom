import css from 'styled-jsx/css'
export default css`
	.container {
		padding: 50px;
		display: flex;
	}
	.courses {
		width: 50%;
		margin-right: 100px;
	}
	.profile {
		width: 50%;
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
		background: white;
	}
	.human {
		display: flex;
		justify-content: space-between;
	}
	.img {
		margin-top: -100px;
	}
	.detailProfile {
		padding: 5px 20px;
  }
  
  .avatar {
    border-radius: 20px;
  }
  .topic {
    color: #fb9ccb;
    font-weight: 700;
    width: 40%;
  }
  .box {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .det {
    width: 40%;
  }
`
