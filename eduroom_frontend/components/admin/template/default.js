import React, { Fragment } from 'react'
import Header from '../../layouts/header'
import AdminSideNav from '../layout/sidenav'
const AdminTemplate = (props) => {
	return (
		<Fragment>
			<Header />
			<AdminSideNav />
			<div className="content">
				<main>{props.children}</main>
			</div>
			<style jsx>
				{`
					.content {
						background: #f4f5f7;
						position: fixed;
						overflow: auto;
						top: 0;
						left: 5%;
						height: 100vh;
                        width: 95vw;
                        padding-left: 3%;
					}
				`}
			</style>
		</Fragment>
	)
}
export default AdminTemplate
