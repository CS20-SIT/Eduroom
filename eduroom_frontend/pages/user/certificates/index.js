import { Fragment, useContext, useEffect, useState } from 'react'
import GeneralTemplate from '../../../components/template/general'
import UserContext from '../../../contexts/user/userContext'
import api from '../../../api'
import CourseCert from '../../../components/user/courseCert'
import AuthDialog from '../../../components/landing/authDialog'
const Certificates = () => {
	const [dialog, setDialog] = useState(false)
	const userContext = useContext(UserContext)
	const { user } = userContext
	const [cerList, setCerList] = useState([])
	useEffect(() => {
		if (user) {
			api
				.get('/api/user/certificate')
				.then((res) => {
					console.log(res.data)
					setCerList(res.data.data)
				})
				.catch((err) => {})
		} else {
			setDialog(true)
		}
	}, [user])
	return (
		<Fragment>
			{dialog ? (
				<AuthDialog
					handleClick={() => {
						setDialog(false)
					}}
					path={'/user/certificates'}
				/>
			) : null}
			<GeneralTemplate>
				<div className="cert-title">Certificate</div>
				<div className="certificate-list">
					{cerList.map((el, index) => {
						return <CourseCert key={index} ind={index} data={el} />
					})}
				</div>
			</GeneralTemplate>
			<style jsx>
				{`
					.cert-title {
						padding-left: 5rem;
						font-size: 3em;
						font-weight: bold;
						color: #3d467f;
						text-transform: uppercase;
						cursor: default;
					}
					.certificate-list {
						display: flex;
						flex-flow: column;
						width: 100%;
						padding: 2rem 5rem;
					}
				`}
			</style>
		</Fragment>
	)
}
export default Certificates
