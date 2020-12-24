import React, { Fragment, useEffect, useState } from 'react'
import { Link, Paper, Typography } from '@material-ui/core'
import style from '../../../styles/forum/showForum'
import Index from '../../../components/support/coursebuilding/index'
import { useRouter } from 'next/router'
import GeneralNonav from '../../../components/template/generalnonav'
import General from '../../../components/template/general'

const create = () => {
	const router = useRouter()

	return (
		<Fragment>
			<General>
				<div
					style={{
						display: 'flex',
						flex: '1 1 auto',
						justifyContent: 'space-between',
					}}
					className="background"
				>
					<div id="nav">
						<div className="top">
							<Index />
						</div>
					</div>
					<style jsx>{style}</style>
					<style jsx>
						{`
							#nav {
								width: 100%;
							}
							.form {
								display: flex;
								text-align: center;
							}
							.sub {
								display: flex;
								width: 100%;
								justify-content: center;
							}
							.inner {
								width: 25%;
							}
							.paper {
								margin: 5%;
							}
							.top {
								padding: 50px 70px 0px 70px;
							}
						`}
					</style>
				</div>
			</General>
		</Fragment>
	)
}
export default create
