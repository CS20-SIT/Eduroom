import React, { Fragment, useEffect, useState } from 'react'
import IdBlock from '../../../components/support/adminsupport/requestform'
import style from '../../../styles/forum/showForum'
import General from '../../../components/template/general'
import BackButton from '../../../components/support/adminsupport/BackButton'
import api from '../../../api'
import ProtectedAdminRoute from '../../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../../components/admin/template/default'
import CreateAnswer from '../../../components/support/adminsupport/answer'
const AdminSupportID = (props) => {
	console.log(props)
	const GetData = async () => {
		try {
			const result = await api.get(`/api/support/${props.id}`)
		} catch (err) {}
	}
	useEffect(() => {
		GetData()
	}, [])

	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
					<div
						style={{
							display: 'flex',
							flex: '1 1 auto',
							justifyContent: 'space-between',
							background: '#EFF0F6',
							minHeight: '100vh',
						}}
					>
						<div id="nav">
							<div className="idblock">
								<div className="backtoforum">
									<BackButton />
								</div>
								<IdBlock />
								<CreateAnswer GetData={GetData} id={props.id} />
							</div>
						</div>
						<style jsx>{style}</style>
						<style jsx>
							{`
								#nav {
									width: 100%;
									height: 100%;
								}
							`}
						</style>
					</div>
				</AdminTemplate>
			</ProtectedAdminRoute>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}

export default AdminSupportID
