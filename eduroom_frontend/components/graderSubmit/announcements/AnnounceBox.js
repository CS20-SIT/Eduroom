import { Fragment, useState, useEffect } from 'react'
import Announcements from './Announcements'
import style from '../../../styles/graderSubmit/announcements/announceBox'
import api from '../../../api'

const AnnounceBox = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		const GetData = async () => {
			try {
				const result = await api.get('/api/grader/getAnnouncement')
				setData(result.data)
			} catch (e) {
				return console.log(e.data)
			}
		}
		GetData()
	}, [])

	return (
		<Fragment>
			<h2 style={{ color: '#5B5B5B', paddingTop: '20px', paddingLeft: '10px' }}>ANNOUNCEMENTS</h2>
			<div className="box">
				<div className="title">
					<div className="left">
						<p>ANNOUNCEMENTS</p>
					</div>
					<div className="right">
						<p className="times">TIMES</p>
						<p className="admins">ADMIN</p>
					</div>
				</div>
				<div className="announceList">
					{data.map((element, key) => {
						return data ? (
							<Announcements
								annID={element.id}
								title={element.title}
								time={element.time}
								admin={element.displayname}
								key={key}
							/>
						) : null
					})}
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default AnnounceBox
