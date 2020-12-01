import React, { Fragment } from 'react'
import style from '../../../styles/graderSubmit/announcements/announcement'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

const Announcements = (props) => {
	const router = useRouter()
	return (
		<Fragment>
			{props.admin ? (
				<div className="click" onClick={() => router.push('/graderSystem/announcement')}>
					<div className="list">
						<div className="title">{props.title}</div>
						<div className="status">
							<div className="time">
								{format(Date.parse(props.time), 'P') + ' ' + format(Date.parse(props.time), 'pp')}
							</div>
							<div className="admin">by {props.admin.charAt(0).toUpperCase() + props.admin.slice(1)}</div>
						</div>
					</div>
				</div>
			) : null}
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Announcements
