import { Fragment, useState, useContext, useEffect } from 'react'
import style from '../../styles/landing/login'
import Image from 'next/image'
import LoginBox from './loginBox'
const Content = () => {
	return (
		<Fragment>
			<div className="login">
				<div className="login-content">
					<LoginBox />
				</div>
				<div style={{ marginLeft: '5%' }}>
					<Image className="login-page-img" alt="login-page-img" src="/images/login-img.svg" width="544" height="450" />
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(context) {
	console.log(context.req.headers.referer)
}

export default Content
