import React, { Fragment } from 'react'
import General from '../../../components/template/general'
import PackageHead from '../../../components/package/packageHead'
import PackageDetail from '../../../components/package/packageDetail'
import style from '../../../styles/package/detail'

const Package = () => {
	return (
		<Fragment>
			<General>
				<div style={{ marginBottom: 30 }}>
					<PackageHead />
				</div>
				<div>
					<PackageDetail />
				</div>
			</General>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Package
