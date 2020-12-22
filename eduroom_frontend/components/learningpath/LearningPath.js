import React, { Fragment, useEffect, useState } from 'react'
import UserBar from './Userbar'
import AllPath from './AllPath'
import CurrentPath from './CurrentPath'
import LeaderBoard from '../leaderboard/leaderboard'
import api from '../../api'
import style from '../../styles/leaderboardStyles/learningpath'
import { render } from 'react-dom'
const LearningPath = () => {
	const [user, setUser] = useState(null)
	const [path, setPath] = useState([])
	const [current, setCurrent] = useState(null)
	const fetchUser = async () => {
		try {
			const res = await api.get('/api/leaderboard/userDetail')
			setUser(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	const fetchLearningPath = async () => {
		try {
			const res = await api.get('/api/learningpath')
			setPath(res.data.data)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchUser()
		fetchLearningPath()
	}, [])
	const selectPath = (val) => {
		let current = path.find((el) => el.pathid == val)
		setCurrent(current)
	}
	const back = () => {
		setCurrent(null)
	}
	const renderPage = () => {
		if (!user) return null
		return (
			<Fragment>
				<UserBar
					user={{ level: user.level, trophy: user.rank, exp: user.xp }}
					numUser={user.numUser}
					achievement={user.achievement}
				/>
				<div className="learning-path">
					<div className="learning">
						{current ? <CurrentPath path={current} back={back} /> : <AllPath path={path} selectPath={selectPath} />}
					</div>
					<div className="leader">
						<div style={{ position: 'sticky', top: '85px' }}>
							<div className="leaderboard">
								<LeaderBoard mini={true} />
							</div>
						</div>
					</div>
				</div>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<div>{renderPage()}</div>
		</Fragment>
	)
}
export default LearningPath
