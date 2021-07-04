import { Fragment } from 'react'
const Rank = ({ data, mini }) => {
	const specialRank = () => {
		if (data.rank == 1) {
			return 'gold'
		} else if (data.rank == 2) {
			return 'silver'
		} else if (data.rank == 3) {
			return 'bronze'
		} else {
			return data.rank % 2 == 0 ? 'odd' : 'even'
		}
	}
	return (
		<Fragment>
			<div className={'rank ' + specialRank()}>
				<div style={{ width: `${mini ? '30%' : '10%'}` }}>{data.rank}</div>
				<div style={{ width: `${mini ? '70%' : '30%'}` }}>{data.displayname}</div>
				{mini ? null : (
					<Fragment>
						<div>{data.titlename}</div>
						<div>{data.xp}</div>
					</Fragment>
				)}
			</div>
			<style jsx>
				{`
					.rank {
						border-radius: 10px;
						display: flex;
						height: 40px;
						margin: 0.5rem;
						color: #828282;
						padding: 0rem 1rem;
						align-items: center;
						font-weight: bold;
					}
					.rank.gold {
						background: #ffc745;
					}
					.rank.silver {
						background: #e9e9e9;
					}
					.rank.bronze {
						background: #ffac86;
					}
				`}
			</style>
		</Fragment>
	)
}
export default Rank
