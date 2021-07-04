import { Fragment, useState } from 'react'
import Certificate from './certificate'
import api from '../../api'
const CourseCert = (props) => {
	const formatDate = (date) => {
		const d = new Date(date)
		return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
	}
	const handleDownload = (courseid) => {
		try {
			api.post('/api/user/certificate', { courseid }).then((res) => {
				let link = document.createElement('a')
				link.href = res.data
				link.download = `${props.data.coursename}-certificate.png`
				link.click()
			})
		} catch (err) {}
	}
	return (
		<Fragment>
			<div className="course-cert">
				<div className="course-content">
					<div style={{ paddingBottom: '1rem' }}>
						<b>Course Name:</b> {props.data.coursename}
					</div>
					<div style={{ paddingBottom: '1rem' }}>
						<b>Receive Date:</b> {formatDate(props.data.finishdate)}
					</div>
					<div className="download" onClick={() => handleDownload(props.data.courseid)}>
						Download
					</div>
				</div>
				<div className="cert">
					<Certificate data={props.data} />
				</div>
			</div>
			<style jsx>
				{`
					.course-cert {
						display: flex;
						background: white;
						border-radius: 2rem;
						margin-bottom: 2.5rem;
					}
					.download {
						background: #3d467f;
						border-radius: 25px;
						color: #fff;
						font-weight: bold;
						text-align: center;
						width: fit-content;
						padding: 0.5rem 2rem;
						cursor: pointer;
					}
					.course-content {
						width: 50%;
						font-size: 1.5em;
						display: flex;
						justify-content: center;
						flex-flow: column;
						padding: 3rem;
					}
					.cert {
						width: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CourseCert
