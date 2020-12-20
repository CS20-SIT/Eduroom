import React, { Fragment, useContext, useEffect, useState } from 'react'
import GeneralTemplate from '../../../components/template/general'
import UserContext from '../../../contexts/user/userContext'
import api from '../../../api'
import CourseCert from '../../../components/user/courseCert'
const Certificates = () => {
	const userContext = useContext(UserContext)
	const {user} = userContext
	const [cerList, setCerList] = useState([])
	useEffect(()=>{
		if(user){
			api.get('/api/user/certificate').then(res=>{
				console.log(res.data)
				setCerList(res.data.data)
			})
		}
	},[user])
	return (
		<Fragment>
			<GeneralTemplate>
				<div className="cert-title">Certificate</div>
				<div className="certificate-list">
				{
					cerList.map((el,index)=>{
						return <CourseCert key={index} ind={index} data={el}/>
					})
				}</div>
			</GeneralTemplate>
			<style jsx>
				{
					`
					.cert-title{
						padding-left: 5rem;
						font-size: 3em;
						font-weight:bold;
						color: #3D467F;
						text-transform: uppercase;
						cursor: default;
					}
					.certificate-list{
						display:flex;
						flex-flow:column;
						width: 100%;
						padding:2rem 5rem;
					}`
				}
			</style>
		</Fragment>
	)
}
export default Certificates
