import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../../../components/graderSubmit/Layout'
import style from '../../../../styles/graderSubmit/rank/oi'
import { useRouter } from 'next/router'
import api from '../../../../api'

const OI = ({ type }) => {
	const router = useRouter()
	const [Data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			try {
				let result = []
				if (type === 'oi') {
					result = await api.get('/api/grader/getOIRankingTopSix')
					setData(result.data)
				} else if (type === 'acm') {
					result = await api.get('/api/grader/getACMRankingTopSix')
					setData(result.data)
				}
			} catch (e) {
				return console.log(e.data)
			}
		}
		GetData()
	}, [type])

	return (
		<Fragment>
			<Head>
				<title>OI Ranks</title>
				<meta property="og:title" content="Ranks" key="Ranks" />
			</Head>
			<Layout page="rank">
				<div className="main">
					<div className="top-panel">
						<h2 className="title">OI RANKING</h2>
						<div className="nav">
							<div
								className={`${type == 'oi' ? 'oi-nav active' : 'oi-nav'}`}
								onClick={(e) => {
									router.push('/graderSystem/rank/oi')
								}}
							>
								OI
							</div>
							<div
								className={`${type == 'acm' ? 'acm-nav active' : 'acm-nav'}`}
								onClick={(e) => {
									router.push('/graderSystem/rank/acm')
								}}
							>
								ACM
							</div>
						</div>
					</div>
					{Data && Data[0] ? (
						<Fragment>
							<div className="top-three">
								<div className="box-size">
									<div className="box">
										<img className="medal" src="/images/graderSubmit/1.svg"></img>
										<center>
											<img
												className="profile"
												src={Data[0].avatar}
												style={{ height: '149px', width: '149px', radius: '10px' }}
											></img>
										</center>
										<div className="name">
											<div className="name-box">{Data[0].name}</div>
										</div>
										<div className="score">
											<div className="centerScore">{Data[0].totalcorrect}</div>
										</div>
									</div>
								</div>
								<div className="box-size">
									<div className="box">
										<img className="medal" src="/images/graderSubmit/2.svg"></img>

										<center>
											<img
												className="profile"
												src={Data[1].avatar}
												style={{ height: '149px', width: '149px', radius: '10px' }}
											></img>
										</center>
										<div className="name">
											<div className="name-box">{Data[1].name}</div>
										</div>
										<div className="score">
											<div className="centerScore">{Data[1].totalcorrect}</div>
										</div>
									</div>
								</div>
								<div className="box-size">
									<div className="box">
										<img className="medal" src="/images/graderSubmit/3.svg"></img>

										<center>
											<img
												className="profile"
												src={Data[2].avatar}
												style={{ height: '149px', width: '149px', radius: '10px' }}
											></img>
										</center>
										<div className="name">
											<div className="name-box">{Data[2].name}</div>
										</div>
										<div className="score">
											<div className="centerScore">{Data[2].totalcorrect}</div>
										</div>
									</div>
								</div>
							</div>
							<div className="running-ups">
								<div className="tool-bar">
									<div className="search" style={{ flexBasis: '70%' }}>
										Search Bar
									</div>
									<div className="scoreTitle" style={{ flexBasis: '30%' }}>
										Score
									</div>
								</div>
								<div className="running-ups-ranking">
									<div className="forth">
										<div className="running-ups-rank" style={{ flexBasis: '10%' }}>
											4th
										</div>
										<div className="running-ups-name" style={{ flexBasis: '60%' }}>
											{Data[3].name}
										</div>
										<div className="running-ups-score" style={{ flexBasis: '30%' }}>
											<div className="score-border">{Data[3].totalcorrect}</div>
										</div>
									</div>
									<div className="fifth">
										<div className="running-ups-rank" style={{ flexBasis: '10%' }}>
											5th
										</div>
										<div className="running-ups-name" style={{ flexBasis: '60%' }}>
											{Data[4].name}
										</div>
										<div className="running-ups-score" style={{ flexBasis: '30%' }}>
											<div className="score-border">{Data[4].totalcorrect}</div>
										</div>
									</div>
									<div className="sixth">
										<div className="running-ups-rank" style={{ flexBasis: '10%' }}>
											6th
										</div>
										<div className="running-ups-name" style={{ flexBasis: '60%' }}>
											{Data[5].name}
										</div>
										<div className="running-ups-score" style={{ flexBasis: '30%' }}>
											<div className="score-border">{Data[5].totalcorrect}</div>
										</div>
									</div>
								</div>
							</div>
						</Fragment>
					) : null}
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const type = ctx.query.type
		return { props: { type } }
	} catch (err) {
		return { props: { type: '' } }
	}
}

export default OI
