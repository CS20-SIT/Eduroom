import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Box from '../../../../components/graderSubmit/Box'
import Layout from '../../../../components/graderSubmit/Layout'
import style from '../../../../styles/graderSubmit/contests/contestPage/overview/contestHomePage'
import ContestLayout from '../../../../components/graderSubmit/contests/ContestLayout'
import ContestOverviewList from '../../../../components/graderSubmit/contests/allList/ContestOverviewList'
import { compareAsc, parseISO } from 'date-fns'
import api from '../../../../api'

const contestOverview = ({ contestId }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			try {
				const result = await api.get('/api/grader/getContestDetail', {
					params: { contestId },
				})
				setData(result.data[0])
			} catch (e) {
				return console.log(e.data)
			}
		}
		GetData()
	}, [])

	const contestStatus = (props) => {
		let presentTime = compareAsc(parseISO(props.endtime), new Date())

		if (presentTime == 1) {
			return (
				<div
					style={{
						display: 'flex',
						height: 'fit-content',
						margin: '8px 8px 0 0',
						padding: '0.25rem 0.75rem',
						border: '1px solid #3d467f',
						borderRadius: '100px',
					}}
				>
					<img src="../../../images/graderSubmit/statusTrue.svg" style={{ marginRight: '10px' }} />
					<div
						style={{
							fontSize: '0.875rem',
							fontWeight: '500',
							color: '#3d467f',
						}}
					>
						Underway
					</div>
				</div>
			)
		} else {
			return (
				<div
					style={{
						display: 'flex',
						height: 'fit-content',
						margin: '8px 8px 0 0',
						padding: '0.25rem 0.75rem',
						border: '1px solid #f39ac4',
						borderRadius: '100px',
					}}
				>
					<img src="../../../images/graderSubmit/statusFalse.svg" style={{ marginRight: '10px' }} />
					<div
						style={{
							fontSize: '0.875rem',
							fontWeight: '500',
							color: '#f39ac4',
						}}
					>
						Ended
					</div>
				</div>
			)
		}
	}

	return (
		<Fragment>
			<Layout page="contest">
				<div className="main">
					<div className="size">
						<Box>
							<ContestLayout page="overview" id={contestId}>
								<div className="overview-info">
									<div className="overview-info-detail">
										<p className="overview-title">{data.title}</p>
										<div className="overview-title-detail">{data.description}</div>
									</div>
									<div className="overview-info-status">{contestStatus(data)}</div>
								</div>
								<div className="overview-detail">
									<div className="flex-container">
										<div className="flex-item" style={{ flexBasis: '25%' }}>
											StartAt
										</div>
										<div className="flex-item" style={{ flexBasis: '25%' }}>
											EndAt
										</div>
										<div className="flex-item" style={{ flexBasis: '25%' }}>
											Rule
										</div>
										<div className="flex-item" style={{ flexBasis: '25%' }}>
											Creator
										</div>
									</div>
									{data ? (
										<ContestOverviewList
											starttime={data.starttime}
											endtime={data.endtime}
											conruletype={data.conruletype}
											creator={data.displayname}
										/>
									) : null}
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
export default contestOverview
