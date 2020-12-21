import { Fragment } from 'react'
const UserBar = ({ user, numUser }) => {
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
					<div style={{ padding: '.1rem 1rem', fontWeight: '900', fontSize: '20px' }}>
						{' '}
						&#127942; : {user.trophy}/{numUser}
					</div>
				</div>
			</div>
			<style jsx>
				{`
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
