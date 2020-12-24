import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import style from '../../styles/graderSubmit/home'
import AnnounceBox from '../../components/graderSubmit/announcements/AnnounceBox'
import Layout from '../../components/graderSubmit/Layout'
import ContestBox from '../../components/graderSubmit/contests/ContestBox'
import api from '../../api'

const Home = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		try {
			const GetData = async () => {
				const result = await api.get('api/grader/getHomePreviewContest')
				setData(result.data)
			}
			GetData()
		} catch (err) {
			throw err.message
		}
	}, [])

	return (
		<Fragment>
			<Head>
				<title>Home</title>
				<meta property="og:title" content="Home" key="Home" />
			</Head>
			<Layout page="home">
				<div className="page">
					<div className="graphic">
						<img src="/images/graderSubmit/pr_monochromatic.svg" width="479" height="440" />
					</div>
					<div className="content">
						<div className="contest-box">
							<h2 style={{ color: '#5B5B5B', paddingLeft: '10px' }}>CONTESTS</h2>
							<div className="contest-content">
								{data.map((element, key) => {
									return data != null ? (
										<ContestBox
											id={element.conno}
											title={element.title}
											description={element.description}
											rule={element.conruletype}
											starttime={element.starttime}
											endtime={element.endtime}
											key={key}
										/>
									) : null
								})}
							</div>
						</div>
						<AnnounceBox />
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Home
