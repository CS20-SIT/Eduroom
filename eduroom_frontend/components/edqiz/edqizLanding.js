import React, { Fragment, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import EdqizText from './edqizText'
import style from '../../styles/edqiz/landing'
import api from '../../api'
import UserContext from '../../contexts/user/userContext'
import AuthDialog from '../../components/landing/authDialog'
const Content = () => {
	const userContext = useContext(UserContext)
	const { user } = userContext
	const [dialog, setDialog] = useState(false)

	const [room, setPinRoom] = useState('')
	const router = useRouter()
	const [data, setData] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/kahoot/roomHistory')
				setData(res.data)
			} catch (err) {}
		}
		fetchData()
	}, [])

	const checkPinIsValid = () => {
		let temp = 0
		for (let i = 0; i < data.length; i++) {
			temp++
			if (data[i].pin == room && data[i].isavailable == true) {
				router.push(`/edqiz/playPinRoomID/${room}`)
				break
			} else if (temp == data.length) {
				console.log('not valid')
				alert('ROOM IS NOT VALID')
				router.push('/edqiz')
			}
		}
	}
	const pinEnter = (e) => {
		if (e.key == 'Enter') {
			if (!user) {
				setDialog(!dialog)
			} else {
				checkPinIsValid()
			}
		}
	}
	const handleLike = (id, callback) => {
		if (!user) {
			setDialog(!dialog)
		} else {
			checkPinIsValid()
			console.log('checkvalid')
		}
	}
	return (
		<Fragment>
			{dialog ? (
				<AuthDialog
					handleClick={() => {
						setDialog(false)
					}}
					path={'/edqiz'}
				/>
			) : null}
			<div className="landing">
				<div className="landing-content">
					<div className="col-12">
						<div className="landing-title">
							<EdqizText type="edqiz" />
						</div>
						<div className="row">
							<input
								type="text"
								id="pinroom"
								value={room}
								onChange={(e) => setPinRoom(e.target.value)}
								onKeyDown={(e) => pinEnter(e)}
								name="firstname"
								placeholder="GAME PIN.."
							/>
						</div>
						<div className="row">
							<button className="landing-button" type="submit" onClick={() => handleLike()}>
								<span className="landing-button-text">ENTER</span>
							</button>
						</div>
					</div>
				</div>
				<div className="footer">
					<span>
						Do your own at <span className="purple">eduroom.me</span>
					</span>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Content
