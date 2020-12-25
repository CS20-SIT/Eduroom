import React, { Fragment, useEffect, useState, useContext } from 'react'
import style from '../../../styles/forum/showForum'
import GeneralNoNav from '../../../components/template/generalnonav'
import ForumBox from '../../../components/forum/layout/forumBox'
import api from '../../../api'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import BackForRoom from '../../../components/forum/BackForRoom'
import ForumNav from '../../../components/forum/layout/forumNav'
import UserContext from '../../../contexts/user/userContext'
const roomID = (props) => {
	const [data, setData] = useState([])
	const userContext = useContext(UserContext)
	const { user } = userContext
	const GetData = async () => {
		try {
			const result = await api.get(`/api/forum/room/${props.room}`)
			setData(result.data.data)
		} catch (err) {}
	}
	useEffect(() => {
		GetData()
	}, [])
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
			alert('Please Login Before Like na ja')
		}
	}
	const router = useRouter()
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flexStart',
			margin: '15px',
			color: theme.palette.text.secondary,
		},
	}))
	const classes = useStyles()
	return (
		<Fragment>
			<GeneralNoNav>
				<div
					style={{
						display: 'flex',
						flex: '1 1 auto',
						justifyContent: 'space-between',
						background: '#EFF0F6',
						minHeight: '100vh',
					}}
				>
					<div id="nav">
						<ForumNav />
						<div className="backforroom">
							<BackForRoom row={data} />
						</div>
						<div className="forumblock">
							{data.map((el, index) => {
								return (
									<Fragment key={index}>
										<ForumBox data={el} onLike={handleLike} />
									</Fragment>
								)
							})}
						</div>
					</div>
					<style jsx>{style}</style>
					<style jsx>
						{`
							#nav {
								width: 100%;
								height: 100%;
							}
							.background-img {
								position: absolute;
								bottom: 0;
								width: 100%;
								height: 100%;
							}
						`}
					</style>
				</div>
			</GeneralNoNav>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const room = ctx.query.room
		return { props: { room } }
	} catch (err) {
		return { props: { room: '' } }
	}
}
export default roomID
