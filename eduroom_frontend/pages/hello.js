import React, { Fragment } from 'react'
import GeneralTemplate from '../components/template/general'
import api from '../api'
const Hello = () => {
	return (
		<Fragment>
			<GeneralTemplate>
				<div style={{backgroundColor:'pink'}}>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
				</div>
			</GeneralTemplate>
		</Fragment>
	)
}
export async function getServerSideProps(ctx) {
	try {
		const res = await api.get('/api/test');
		console.log(res)
	} catch (err) {
		console.log(err)
	}
	return { props: {} }
}
export default Hello
