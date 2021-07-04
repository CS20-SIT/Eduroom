import { Fragment, useEffect, useState } from 'react'
import api from '../../api'
import GeneralTemplate from '../../components/template/general'
import VerificationSuccess from '../../components/verify/verifySuccess'
import VerificationFail from '../../components/verify/verifyFail'
const Token = ({ token }) => {
	const [status, setStatus] = useState('')
	useEffect(() => {
		api
			.get(`/api/auth/verify/${token}`)
			.then((res) => {
				if (res.data.success) {
					setStatus('Verification Success')
				}
			})
			.catch((err) => {
				setStatus(err.response.data.error)
			})
	}, [])
	return (
		<Fragment>
			<GeneralTemplate>
				{status == 'Verification Success' ? <VerificationSuccess /> : <VerificationFail />}
			</GeneralTemplate>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	const token = ctx.query.token
	return { props: { token } }
}
export default Token
