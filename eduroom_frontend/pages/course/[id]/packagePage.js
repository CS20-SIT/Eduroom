import React, { Fragment } from 'react'
import General from '../../../components/template/general'
import PackageHead from '../../../components/package/packageHead'
import PackageDetail from '../../../components/package/packageDetail'
import style from '../../../styles/package/detail'

const Package = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> cf9aef62a90b052c775f64a70db3d471cc10d932
}
export default Package
