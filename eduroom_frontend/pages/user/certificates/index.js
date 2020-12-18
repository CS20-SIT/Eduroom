import React, { Fragment } from 'react'
import Certificate from '../../../components/user/certificate'
const Certificates = () => {
	return (
		<Fragment>
			<Certificate
				data={{
					finishDate: '16 December 2020',
					firstName: 'Wisarut',
					lastName: 'Kitticharoenphonngam',
					courseName: 'Python for Everybody',
				}}
			/>
		</Fragment>
	)
}
export default Certificates
