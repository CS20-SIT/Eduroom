import { Fragment, useState } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'

const UserBar = ({ user, numUser, achievement }) => {
	const [open, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false)
	}
	const renderAchievement = () => {
		const arr = achievement.map((ac, idx) => {
			return (
				<Fragment key={idx}>
					<div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '400px' }}>
						<h4>{ac.detail}</h4>
						{ac.isAchieve ? (
							<h4 style={{ color: 'green' }}>Complete</h4>
						) : (
							<h4 style={{ color: '#ff6961' }}>Not complete</h4>
						)}
					</div>
				</Fragment>
			)
		})
		return arr
	}
	return (
		<Fragment>
			<div className="user-bar">
				<div className="row">
					<div style={{ padding: '.1rem 1rem', fontWeight: '900', marginTop: '2px', fontSize: '20px' }}>
						LV : {user.level}
					</div>
					<div
						style={{
							fontSize: '20px',
							background: '#A27CEF',
							color: 'white',
							padding: '.1rem 1rem',
							borderRadius: '1rem',
							marginRight: '5px',
							fontWeight: '900',
						}}
					>
						{user.exp}/100
					</div>
					<div className="rank" onClick={() => setOpen(true)}>
						{' '}
						&#127942; : {user.trophy}/{numUser}
					</div>
				</div>
			</div>
			<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
				<div className="container">
					<h1 style={{ textAlign: 'center' }}>Achievement</h1>
					{renderAchievement()}
				</div>
			</Dialog>
			<style jsx>
				{`
					.container {
						padding: 30px 50px;
					}
					.rank {
						padding: 0.1rem 1rem;
						font-weight: 900;
						font-size: 20px;
					}
					.rank:hover {
						cursor: pointer;
					}
					.user-bar {
						display: flex;
						flex-flow: column;
						background: white;
						border-radius: 15px;
						padding: 1rem 2rem;
						margin: 1rem 2rem;
					}
					.row {
						display: flex;
						flex: 1;
						width: 100%;
					}
				`}
			</style>
		</Fragment>
	)
}
export default UserBar
