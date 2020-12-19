import React, { Fragment, useState, useEffect } from 'react'
import ProductPackage from '../../../components/package/packageStore'
import General from '../../../components/template/general'

const packages = () => {
	const [show, setShow] = useState(false)
	return (
		<Fragment>
			<General>
				<div>
					<div>
						<ProductPackage/>
					</div>
				</div>
			</General>
		</Fragment>
	)
}
export default packages
