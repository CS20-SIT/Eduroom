import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../components/graderSubmit/Box'
import Layout from '../../../../components/graderSubmit/Layout'
import style from '../../../../styles/graderSubmit/contests/contestPage/announcement/contestAnnouncementPage'
import ContestLayout from '../../../../components/graderSubmit/contests/ContestLayout'
import ContestAnnouncementList from '../../../../components/graderSubmit/contests/allList/ContestAnnouncementList'
import api from '../../../../api'

const contestAnnouncement = ({ contestId }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('/api/grader/getContestAnnouncement', {
				params: { contestId },
			})
			setData(result.data)
		}
		GetData()
	}, [])

	return (
		<Fragment>
			<Layout page="contest">
				<div className="main">
					<div className="size">
						<Box>
							<ContestLayout page="announcement" id={contestId}>
								<center>
									<h2>CONTEST ANNOUNCEMENTS</h2>
								</center>
								<div className="announcement-list">
									<div className="flex-container">
										<div className="flex-item" style={{ flexBasis: '20%' }}>
											Admin
										</div>
										<div className="flex-item" style={{ flexBasis: '20%' }}>
											Title
										</div>
										<div className="flex-item" style={{ flexBasis: '40%' }}>
											Description
										</div>
										<div className="flex-item" style={{ flexBasis: '20%' }}>
											Date
										</div>
									</div>
									{data.map((element, key) => {
										return (
											<ContestAnnouncementList
												id={element.coannno}
												title={element.title}
												contestID={contestId}
												description={element.description}
												name={element.displayname}
												time={element.time}
												key={key}
											/>
										)
									})}
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

export default contestAnnouncement
