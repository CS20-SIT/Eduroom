import css from 'styled-jsx/css'
export default css`
	.bg {
		background-image: url('/images/cart-bg.svg');
		background-size: cover;
	}
	.box {
		padding: 20px;
		margin-bottom: 20px;
		background: #ffffff;
		border: 1.5px solid #ffffff;
		box-sizing: border-box;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
	}
	.price {
		color: #3d467f;
		margin: 0;
		font-weight: bold;
	}
	.detail {
		margin: 0 0 0 20px;
	}
	.left {
        width: 50%;
		display: flex;
	}
	.right {
		display: flex;
	}
	.remove {
		text-decoration-line: underline;
		color: #3d467f;
    }
    .remove:hover{
        cursor:pointer;
    }
`
