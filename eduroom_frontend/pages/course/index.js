import React, { Fragment, useState, useEffect } from 'react'
import ProductCourse from '../../components/course/courseStore'
import ProductPackage from '../../components/package/packageStore'
import Styles from '../../styles/course/cShop'
import General from '../../components/template/general'
import Carousel from '../../components/course/testCarouselAuto'

const packages = () => {
	const [show, setShow] = useState(false)
	return (
		<Fragment>
			<General>
				<Carousel></Carousel>

				<div>
					<h1>Test</h1>
				</div>
				<div>
					<div style={{ margin: '10' }}>
						<ProductCourse></ProductCourse>
					</div>
					<div>
						<ProductPackage></ProductPackage>
					</div>
				</div>
			</General>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}
export default packages
