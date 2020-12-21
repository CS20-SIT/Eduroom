import React, { Fragment, useState, useEffect } from 'react'
import ProductPackage from '../../../components/package/packageStore'
import ProductCourse from '../../../components/course/courseStore'
import General from '../../../components/template/general'
const packages = () => {
	const [show, setShow] = useState(false)
	return (
		<Fragment>
			<General>
				<div>
					<div>
						<ProductPackage/>
						<ProductCourse/>
					</div>
				</div>
			</General>
		</Fragment>
	)
}
export default packages
