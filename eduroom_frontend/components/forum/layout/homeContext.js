import React, { Fragment, useEffect, useState, useContext } from 'react'
import CategoriesSet from './categoriesSet'
import api from '../../../api'
import AuthDialog from '../../landing/authDialog'
import ForumBox from './forumBox'
import UserContext from '../../../contexts/user/userContext'
const HomeContent = () => {
	const [dialog, setDialog] = useState(false)
	const [forums, setForums] = useState([])
	const userContext = useContext(UserContext)
	const { user } = userContext
	useEffect(() => {
		getData()
	}, [])
	const getData = () => {
		api
			.get('/api/forum')
			.then((res) => {
				setForums(res.data.data)
			})
			.catch((err) => {})
	}
	const handleLike = (id, callback) => {
		if (user) {
			api
				.post(`/api/forum/like/${id}`)
				.then((res) => {
					getData()
					callback()
				})
				.catch((err) => {})
		} else {
			setDialog(!dialog)
		}
	}
	return (
		<Fragment>
			{dialog ? (
				<AuthDialog
					handleClick={() => {
						setDialog(false)
					}}
					path={'/forum'}
				/>
			) : null}
			<div className="forum-home">
				<div className="home-title">CHOOSE ROOM</div>
				<CategoriesSet />
				{forums.map((el, index) => {
					return (
						<Fragment key={index}>
							<ForumBox data={el} onLike={handleLike} />
						</Fragment>
					)
				})}
			</div>
			<style jsx>
				{`
					.forum-home {
						display: flex;
						flex-flow: column;
						justify-content: center;
						align-items: center;
						padding: 1.5rem 5rem;
					}
					.home-title {
						color: #3d467f;
						font-size: 2rem;
						font-weight: bold;
					}
				`}
			</style>
		</Fragment>
	)
}
export default HomeContent
