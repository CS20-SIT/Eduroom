import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Box from '../../../components/graderSubmit/Box'
import Layout from '../../../components/graderSubmit/Layout'
import style from '../../../styles/graderSubmit/announcements/announcementPage'
import api from '../../../api'
import { useRouter } from 'next/router'

const Announcement = (props) => {
	const router = useRouter()

	// const [data, setData] = useState([])
	// useEffect(() => {
	// 	const GetData = async () => {
	// 		const result = await api.get('api/grader/getAnnouncement')
	// 		setData(result.data)
	// 	}
	// 	GetData()
	// }, [])

	return (
		<Fragment>
			<Head>
				<title>Announcements</title>
				<meta property="og:title" content="Announcements" key="Announcements" />
			</Head>
			<Layout page={'announcement'}>
				<div className="main">
					<div className="size">
						<Box>This is an announcement Page</Box>
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Announcement
