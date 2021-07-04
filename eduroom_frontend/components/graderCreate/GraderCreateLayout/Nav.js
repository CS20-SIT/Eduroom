import { Fragment, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Toolbar } from '@material-ui/core'

import style from '../../../styles/graderCreate/gnav'
import AdminContext from '../../../contexts/admin/adminContext'

const Navbar = () => {
	const adminContext = useContext(AdminContext)
	const { admin, logoutAdmin } = adminContext
	const router = useRouter()
	const gotoProfile = () => {
		router.push('/admin/edit')
	}

	return (
		<Fragment>
			<AppBar position="sticky" style={{ background: '#F4F5F7AA' }} elevation={0}>
				<Toolbar>
					<div className="navStyle">
						<div className="navItem">
							<Link href="/admin/grader/">Home</Link>
						</div>

						<div className="navItem">
							<Link href="/admin/grader/adminlog">Admin Log</Link>
						</div>
						<div className="navItem">
							<Link href="/admin/grader/announcement">Announcement</Link>
						</div>
						<div className="navItem">
							<Link href="/admin/grader/contest">Contest</Link>
						</div>

						<div className="navItem">
							<Link href="/admin/grader/question">Question</Link>
						</div>
						<div className="navItem">
							<div onClick={logoutAdmin}>
								<button className="navLogin">
									<span className="navLoginText">Logout</span>
								</button>
							</div>
						</div>
						<div className="navAction">
							<Fragment>
								<img
									className="avatar"
									src={admin == undefined ? 'error' : admin.avatar}
									width="50"
									height="50"
									alt="avatar"
									style={{ borderRadius: '50%' }}
								></img>
								<div className="navItem" onClick={gotoProfile} id="acc-btn"></div>
							</Fragment>
						</div>
					</div>
				</Toolbar>
				<div style={{ height: 10 }}></div>
			</AppBar>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Navbar
