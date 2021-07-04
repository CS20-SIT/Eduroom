import { Fragment, useState } from 'react'
import api from '../../api'
import Rank from './rank'
import { useRouter } from 'next/router'
const LeaderBoard = ({ mini }) => {
	const [data, setData] = useState([])
	const router = useRouter()
	useState(() => {
		api
			.get('/api/leaderboard')
			.then((res) => {
				if (mini) {
					setData(res.data.slice(0, 6))
				} else {
					setData(res.data)
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	return (
		<Fragment>
			<div className="leader-title">
				<span style={{ marginRight: '.3rem' }}>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M33.9316 28.9044V31.5909C33.9316 32.2415 33.4043 32.7689 32.7537 32.7689H7.24585C6.59521 32.7689 6.06787 32.2415 6.06787 31.5909V28.9044H33.9316Z"
							fill="black"
						/>
						<path
							d="M0 13.931C0 11.8323 1.70746 10.1248 3.80615 10.1248C5.90485 10.1248 7.612 11.8323 7.612 13.931C7.612 14.9399 7.2168 15.8578 6.57349 16.5396C7.71759 17.8195 9.37897 18.6273 11.2265 18.6273C14.2172 18.6273 16.7221 16.5131 17.3282 13.7012C16.6284 13.0106 16.1938 12.052 16.1938 10.9937C16.1938 8.89496 17.9013 7.1875 20 7.1875C22.0987 7.1875 23.8062 8.89496 23.8062 10.9937C23.8062 12.052 23.3713 13.0106 22.6718 13.7012C23.2779 16.5131 25.7828 18.6273 28.7735 18.6273C30.621 18.6273 32.2824 17.8195 33.4265 16.5396C32.7832 15.8578 32.3877 14.9399 32.3877 13.931C32.3877 11.8323 34.0952 10.1248 36.1938 10.1248C38.2925 10.1248 40 11.8323 40 13.931C40 15.7498 38.7173 17.2739 37.0093 17.648C36.6714 20.4361 36.0187 23.833 34.7583 26.5485H5.2417C3.98132 23.833 3.32855 20.4361 2.99072 17.648C1.28265 17.2736 0 15.7498 0 13.931Z"
							fill="black"
						/>
					</svg>
				</span>
				<span style={{ marginLeft: '.3rem' }}>LEADERBOARD</span>
			</div>
			{data.map((el, index) => {
				return <Rank key={index + 1} mini={mini} data={{ ...el, rank: index + 1 }} />
			})}
			<div
				style={{
					color: '#E5E5E5',
					fontWeight: 'bold',
					textDecorationLine: 'underline',
					cursor: 'pointer',
					textAlign: 'center',
				}}
				onClick={() => router.push('/leaderboard')}
			>
				View All
			</div>
			<style jsx>
				{`
					.leader-title {
						display: flex;
						align-items: center;
						justify-content: center;
					}
				`}
			</style>
		</Fragment>
	)
}
export default LeaderBoard
