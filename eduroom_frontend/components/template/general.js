import React, { Fragment } from 'react'
import Navbar from '../layouts/navbar'
import Header from '../layouts/header'
import SideNav from '../layouts/sidenav/sidenav'
import Image from 'next/image'
const General = (props) => {
	return (
		<Fragment>
			<Header />
			<div
				style={{
					display: 'flex',
					flex: '1 1 auto',
					justifyContent: 'space-between',
					background: '#F4F5F7',
				}}
			>
				<SideNav />
				<div id="content">
					<Navbar />
					<main>{props.children}</main>
				</div>
				{props.img ? <img alt="background-img" src={props.img} className="background-img" /> : null}
			</div>
			<style jsx>
				{`
					#content {
						width: 95%;
						margin-left: 5%;
						// margin-left: 30px;
						top: 0;
						z-index: 20;
						min-height: 100vh;
						// overflow-y: auto;
						// position:absolute;
					}
					.background-img {
						position: absolute;
						bottom: 0;
						width: 100vw;
						z-index: 5;
						// position:fixed;
					}
				`}
			</style>
		</Fragment>
	)
}
export default General
