import React, { Fragment } from 'react'
import GeneralTemplate from '../../components/template/general'
import VerifyAccount from '../../components/verify/verifyAccount'
import Image from 'next/image'
const Verify = () => {
	return (
		<Fragment>
			<GeneralTemplate>
				<VerifyAccount />
			</GeneralTemplate>
        <div style={{backgroundImage:'url(/images/verify/verify-bg.svg)',width:'100vw',height:'100vh',position:'absolute',top:'0',left:'0',backgroundPosition:'center',backgroundSize:'auto',backgroundRepeat:'no-repeat'}}/>
		</Fragment>
	)
}
export default Verify
