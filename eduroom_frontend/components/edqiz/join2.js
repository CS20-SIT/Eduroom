import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/edqiz/landing'
import CircularProgress from '@material-ui/core/CircularProgress'
import socketIOClient from 'socket.io-client'

const Page2 = ({ name }) => {
	const nameUpperCase = name.toUpperCase()
	const router = useRouter()

	let room = router.query.room
	const sentName = () => {
		const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
			path: '/kahoot',
		})
		socket.emit('set-name', name, router.query.room)
		// console.log(name, router.query.room);
	}
	useEffect(() => {
		sentName()
	}, [])

	return (
		<Fragment>
			<div className="landing">
				<div className="landing-content">
					<div className="col-12">
						<div
							style={{
								fontSize: '5rem',
								fontWeight: 600,
								color: '#3D467F',
								display: 'flex',
								justifyContent: 'center',
								padding: '20px',
							}}
						>
							HELLO {nameUpperCase}
						</div>
						<div
							style={{
								fontSize: '2rem',
								fontWeight: 550,
								color: '#3D467F',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							YOUR'RE IN GAME PIN
						</div>
						<div
							className="col-12"
							style={{
								display: 'flex',
								justifyContent: 'center',
								padding: '20px',
							}}
						>
							<div
								style={{
									fontSize: '2.5rem',
									fontWeight: 600,
									color: '#A27CEF',
									display: 'flex',
									justifyContent: 'center',
									backgroundColor: '#EFF0F6',
									width: '20vw',
									alignItems: 'center',
									borderRadius: '5px',
									height: '10vh',
								}}
							>
								{router.query.room}
							</div>
						</div>
						<div
							style={{
								fontSize: '1.3rem',
								fontWeight: 550,
								color: '#3D467F',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							WAITING FOR ANOTHER PLAYERS
						</div>
						<div
							style={{
								fontSize: '1.3rem',
								fontWeight: 550,
								color: '#3D467F',
								display: 'flex',
								justifyContent: 'center',
								padding: '30px',
							}}
						>
							<CircularProgress />
						</div>
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Page2
