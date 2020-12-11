import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Box from '../../../components/graderSubmit/Box'
import Layout from '../../../components/graderSubmit/Layout'
import style from '../../../styles/graderSubmit/announcements/announcementPage'
import api from '../../../api'
import { useRouter } from 'next/router'

const Announcement = ({ id }) => {
	const [data, setData] = useState([])
	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('api/grader/getAnnouncementById', { params: { id } })
			setData(result.data[0])
		}
		GetData()
	}, [])
	console.log(data)
	return (
		<Fragment>
			<Head>
				<title>Announcements</title>
				<meta property="og:title" content="Announcements" key="Announcements" />
			</Head>
			<Layout page={'announcement'}>
				<div className="main">
					<div className="size">
						<Box>
							<h2 className="announcement">ANNOUNCEMENT</h2>
							<h2 className="title">{data.title.toUpperCase()}</h2>
							<div className="description">Description: {data.description}</div>
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
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}
export default Announcement
