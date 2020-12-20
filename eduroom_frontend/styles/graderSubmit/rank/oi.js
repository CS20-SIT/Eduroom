import css from 'styled-jsx/css'
export default css`
	.main {
		width: 100%;
		height: 100%;
		padding: 0 10%;
	}
	.title {
		font-size: 2rem;
		color: #3d467f;
	}
	.top-three {
		display: flex;
		justify-content: space-between;
	}
	.box-size {
		width: 31%;
		height: 35vh;
	}
	.box {
		width: 100%;
		height: 100%;
		align-content: center;
		background-color: #ffffff;
		box-shadow: 0px 4px 6px rgba(189, 189, 189, 0.7);
	}
	.profile {
		margin-top: 2rem;
		border-radius: 50%;
		object-fit: cover;
		object-position: 50% 50%;
	}
	.name {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		display: flex;
		font-size: 1.5rem;
		font-weight: bold;
		justify-content: center;
		align-text: center;
	}
	.name-box {
		width: 25vh;
		text-align: center;
	}
	.topBox {
		display: flex;
	}
	.medal {
		padding-top: 1.5rem;
		padding-left: 1.5rem;
		position: absolute;
	}
	.score {
		display: flex;
		justify-content: center;
	}
	.centerScore {
		font-weight: bold;
		size: 1.25rem;
		color: #fb9ccb;
		margin-top: 0.5rem;
		border-radius: 15px;
		padding: 0.125rem 3rem;
		background-color: rgba(251, 156, 203, 0.15);
	}
	.running-ups {
		margin-top: 2rem;
	}
	.tool-bar {
		display: flex;
		margin-bottom: 2rem;
	}
	.search,
	.scoreTitle {
		color: #a27cef;
		font-weight: bold;
	}
	.forth,
	.fifth,
	.sixth {
		display: flex;
		width: 100%;
		height: 8vh;
		margin-bottom: 2rem;
		border-radius: 5px;
		align-content: center;
		background-color: #ffffff;
		box-shadow: 0px 4px 6px rgba(189, 189, 189, 0.6);
	}
	.running-ups-rank,
	.running-ups-name,
	.running-ups-score {
		font-size: 1.25rem;
		font-weight: 500;
		color: #5b5b5b;
		align-self: center;
	}
	.running-ups-rank {
		text-align: center;
	}
	.running-ups-score {
		color: #fb9ccb;
	}
	.score-border {
		width: fit-content;
		background-color: rgba(251, 156, 203, 0.15);
		border-radius: 15px;
		padding: 0.125rem 2.5rem;
	}
	.top-panel,
	.nav {
		display: flex;
	}
	.top-panel {
		justify-content: space-between;
	}
	.nav {
		align-self: center;
		width: fit-content;
		border: solid 1px #3d467f;
		border-radius: 20px;
	}
	.oi-nav,
	.acm-nav {
		width: 5rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: #3d467f;
		cursor: pointer;
	}
	.active {
		color: #ffffff;
		border-radius: 15px;
		background-color: #3d467f;
		border: solid 1px #3d467f;
	}
`
