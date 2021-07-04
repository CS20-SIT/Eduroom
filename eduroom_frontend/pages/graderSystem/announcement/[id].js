import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Box from '../../../components/graderSubmit/Box'
import Layout from '../../../components/graderSubmit/Layout'
import style from '../../../styles/graderSubmit/announcements/announcementPage'
import api from '../../../api'
import { format } from 'date-fns'

const Announcement = ({ id }) => {
	const [data, setData] = useState(null)
	useEffect(() => {
		const GetData = async () => {
			try {
				const result = await api.get('/api/grader/getAnnouncementById', { params: { id } })
				setData(result.data[0])
			} catch (e) {
				return console.log(e.data)
			}
		}
		GetData()
	}, [])

	return (
		<Fragment>
			<Head>
				<title>Announcements</title>
				<meta property="og:title" content="Announcements" key="Announcements" />
			</Head>
			<Layout page={'announcement'}>
				<div className="main">
					<div className="size">
						{data != null ? (
							<Box>
								<h2 className="announcement">ANNOUNCEMENT</h2>
								<div className="items">
									<div className="left">
										<h2 className="title">{data.title}</h2>
										<p>{data.description}</p>
									</div>
									<div className="right">
										<div className="date">
											{format(new Date(data.time.toString()), 'P') + format(new Date(data.time.toString()), 'pp')}
										</div>
										<div className="admin">By {data.displayname}</div>
									</div>
								</div>
							</Box>
						) : null}
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}
export default Announcement
