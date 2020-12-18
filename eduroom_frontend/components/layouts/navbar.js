import React, { Fragment, useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Toolbar } from '@material-ui/core'
import style from '../../styles/layout/navbar'
import UserContext from '../../contexts/user/userContext'
import NavContext from '../../contexts/landing/navContext'

const Navbar = ({ children, isProtected = false }) => {
	const userContext = useContext(UserContext)
	const navContext = useContext(NavContext)
	const { getUser, logoutUser } = userContext
	const user = userContext.user
	const y = navContext.y
	const router = useRouter()

	useEffect(() => {
		getUser(router,isProtected)
	}, [])

	const getOp = () => {
		return y >= 30 ? 1 : y * 0.033333333333
	}

	const handleLogout = async () => {
		logoutUser(router)
	}
	const gotoProfile = () => {
		router.push('/user')
	}

	return (
		<Fragment>
			<AppBar position="sticky" style={{ background: `rgba(245, 245, 245, ${getOp()})`,zIndex:0 }} elevation={0}>
				<Toolbar>
					<div className="navStyle">
						<div style={{width:'50%'}}>{children}</div>
						<div className="navDefault">
							{user ? (
								<div className="navItem" id="fav-btn">
									<i className="fas fa-heart"></i>
								</div>
							) : null}
							<div className="navItem" id="cart-btn">
								<i className="fas fa-shopping-cart" />
							</div>
							{user ? (
								<Fragment>
									<div className="navItem" onClick={gotoProfile}>
										<span style={{ color: '#3d467f' }}>{user.firstname}</span>
									</div>
									<div className="navItem" onClick={handleLogout}>
										<span style={{ color: '#3d467f' }}>Logout</span>
									</div>
									<div className="navItem" onClick={gotoProfile} id="acc-btn">
										<img className="avatar" src={user.avatar} width="40" height="40" alt="avatar"></img>
									</div>
								</Fragment>
							) : (
								<Fragment>
									<div className="navItem" id="login-btn">
										<Link href="/login">Login</Link>
									</div>
									<div className="navAction" id="signup-btn">
										<Link href="/register">
											<button className="navLogin">
												<span className="navLoginText">Sign Up</span>
											</button>
										</Link>
									</div>
								</Fragment>
							)}
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Navbar
