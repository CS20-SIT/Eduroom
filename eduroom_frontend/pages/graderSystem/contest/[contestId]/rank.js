import { Fragment, useEffect, useState } from 'react'
import Box from '../../../../components/graderSubmit/Box'
import Layout from '../../../../components/graderSubmit/Layout'
import style from '../../../../styles/graderSubmit/contests/contestPage/rank/contestRankPage'
import ContestLayout from '../../../../components/graderSubmit/contests/ContestLayout'
import ContestRankList from '../../../../components/graderSubmit/contests/allList/ContestRankList'
import api from '../../../../api'

const contestRank = ({ contestId }) => {
	const [data, setData] = useState([])
	let [countRank, setCountRank] = useState(1)
	useEffect(() => {
		const GetData = async () => {
			try {
				const res = await api.get('/api/grader/getContestRanking', { params: { contestId: contestId } })
				setData(res.data)
				setCountRank(res.data.length)
			} catch (e) {
				return console.log(e.data)
			}
		}
		GetData()
	}, [])

	return (
		<Fragment>
			<Layout page="contest">
				<div className="main">
					<div className="size">
						<Box>
							<ContestLayout page="rank" id={contestId}>
								<center>
									<h2>Ranks</h2>
								</center>
								<div className="graphics">
									<img src="../../../../images/graderSubmit/report_analysis.svg" />
									<div className="graph-box">
										<div className="actual-graph">
											<div className="legend">
												<div className="max">
													<p>MAX</p>
												</div>
												<div className="line"></div>
												<div className="min">
													<p>0</p>
												</div>
											</div>
											<div className="graph">
												{data.map((element) => {
													{
														return (
															<div
																className="eachBar"
																style={{ height: `${countRank == 1 ? `100%` : element.totalscore + `%`}` }}
															>
																{element.displayname.split(' ')[0]}
															</div>
														)
													}
												})}
											</div>
										</div>
									</div>
								</div>
								<div className="submission-list">
									<div className="flex-container">
										<div className="flex-item" style={{ flexBasis: '10%' }}>
											Rank
										</div>
										<div className="flex-item" style={{ flexBasis: '60%' }}>
											Name
										</div>
										<div className="flex-item" style={{ flexBasis: '30%' }}>
											Total Score
										</div>
									</div>
									<div className="rank-list">
										{data != null ? (
											data.map((element, index, key) => {
												return (
													<ContestRankList rank={index + 1} name={element.displayname} score={element.totalscore} />
												)
											})
										) : (
											<div>None</div>
										)}
									</div>
								</div>
							</ContestLayout>
						</Box>
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const contestId = ctx.query.contestId
		return { props: { contestId } }
	} catch (err) {
		return { props: { contestId: '' } }
	}
}

export default contestRank
