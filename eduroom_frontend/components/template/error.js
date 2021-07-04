import { Fragment } from 'react'
import Header from '../layouts/header'
import Head from 'next/head'
import ErrorContent from '../layouts/error'
const Error = () => {
	return (
		<Fragment>
			<Header />
			<Head>
				<title>404: Not Found</title>
			</Head>
			<ErrorContent />
		</Fragment>
	)
}
export default Error
