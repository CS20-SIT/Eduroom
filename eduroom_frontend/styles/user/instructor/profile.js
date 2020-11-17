import css from 'styled-jsx/css'
export default css`
	.container {
		padding: 30px 50px;
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
		width: 100px;
  }
  .box {
    width: 275px;
    display: flex;
		margin-top: 20px;
  }
  .det {
		color: #858585;
	}
	
	.boxBio{
    display: flex;
    margin-top: 20px;
	}
	.detBio{
		color: #858585;
	}
`
