import css from 'styled-jsx/css'
export default css`
	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		background-color: white;
		border-radius: 10%;
		width:20vw;
		margin:auto; 
		padding:5%;

	}
	.coin{
		position:relative;
		left:10px;
		top:7px;
	}
	.title{
		color:#14142B;
		font-size:20px
	}
	.coupon{
		background-color:#DED3FF;
		outline: none;
		border: none;
		padding:6px;
		border-radius: 12px;
		color:#2A00A2;
		position:relative;
		top:-45px;
		left:120px;
	}
	.tag{
		position:relative;
		top:4px;
	}
`
