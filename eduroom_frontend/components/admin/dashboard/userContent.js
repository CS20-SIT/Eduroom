import React, { Fragment, useState, useEffect } from 'react'
import api from '../../../api'
import { useRouter } from 'next/router'
const UserContent = () => {
	const router = useRouter()
	const [user, setUser] = useState({ avatar: '', displayname: '' })
	useEffect(() => {
		api.get('/api/auth/admin/profile').then((res) => {
			setUser(res.data)
		})
	}, [])
	return (
		<Fragment>
			<div className="user-content">
				<div className="setting">
					<i className="fas fa-cog" style={{ cursor: 'pointer' }} onClick={() => router.push('/admin/edit')} />
				</div>
				<div className="user-detail">
					<div id="user-avatar"></div>
					<div className="user-displayname">{user.displayname}</div>
					<div className="user-admin">Admin</div>
				</div>
				<div className="event">
					<div onClick={() => router.push('/admin/calendar')}>
						<i className="fas fa-calendar-alt" />
						<span>Create Event</span>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.user-content {
						display: flex;
						flex-flow: column;
						width: 100%;
						height: 100vh;
						top: 0;
						position: sticky;
					}
					.setting {
						width: 100%;
						height: 100px;
						color: #f89ccb;
						font-size: 2em;
						display: flex;
						justify-content: flex-end;
						padding: 1.5rem;
					}
					.user-detail {
						flex: 1;
						width: 100%;
						display: flex;
						padding-top: 1rem;
						align-items: center;
                        flex-flow: column;
                        cursor: default;
					}
					.user-displayname {
						font-size: 1.3em;
						font-weight: bold;
						padding-top: 1rem;
						color: #3d467f;
					}
					.user-admin {
						color: #a7abc5;
						padding-top: 0.5rem;
					}
					#user-avatar {
						width: 150px;
						height: 150px;
						border-radius: 75px;
						background-position: center;
						background-size: contain;
						background-repeat: no-repeat;
						background-image: url(${user.avatar});
					}
					.event {
						height: 120px;
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.event div {
						background: #f89ccb;
						color: #fff;
						font-size: 1.2em;
						padding: 0.5rem 1rem;
						font-weight: 600;
						width: 80%;
						border-radius: 25px;
                        text-align: center;
                        cursor:pointer;
					}
					.event div span {
						margin-left: 8px;
					}
				`}
			</style>
		</Fragment>
	)
}
export default UserContent
