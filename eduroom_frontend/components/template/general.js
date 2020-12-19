import React, { Fragment } from 'react'
import Navbar from '../layouts/navbar'
import Header from '../layouts/header'
import SideNav from '../layouts/sidenav/sidenav'

const General = (props) => {
	return (
		<Fragment>
			<Header />
			<div>
				<SideNav />
				<div id="content">
					<Navbar isProtected={props.isProtected ?? false}/>
					<div style={{ paddingLeft: '5%' }}>
						<main>{props.children}</main>
					</div>
				</div>
				{props.img ? <img alt="background-img" src={props.img} className="background-img" /> : null}
			</div>
			<style jsx>
				{`
					#content {
						width: 100%;
						top: 0;
						z-index: 20;
						min-height: 100vh;
						background: none;
					}
					.background-img {
						position: fixed;
						bottom: 0;
						width: 100vw;
						z-index: 5;
					}
				`}
			</style>
		</Fragment>
	)
}
export default General
