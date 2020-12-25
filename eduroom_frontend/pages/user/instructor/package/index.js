import React, { Fragment, useEffect, useState } from 'react'
import GeneralTemplate from '../../../../components/template/general'
import style from '../../../../styles/package/content'
import Link from 'next/link'
import OwnPackages from '../../../../components/package/ownPackages'
import api from '../../../../api'

const Index = () => {
	const [packages, setPackages] = useState(null)
	const fetchPackages = async () => {
		try {
			const res = await api.get('/api/package/getInstructorPackage')
			setPackages(res.data)
		} catch (err) {}
	}
	useEffect(() => {
		fetchPackages()
	}, [])
	const renderPackages = () => {
		if (packages !== null) {
			if (packages.length === 0) {
				return <div className="package-content">You Have Not Create Package Yet</div>
			} else {
				return <OwnPackages fetchPackages={fetchPackages} packages={packages}></OwnPackages>
			}
		}
	}
	return (
		<Fragment>
			<GeneralTemplate>
				<div className={'package-bg'}>
					<div className="package-header">PACKAGE MANAGEMENT</div>
					<div className="container">
						{renderPackages()}
						<div>
							<Link href="/user/instructor/package/createpackage">
								<button className="addpackbutton">
									<div>
										<i className="fas fa-plus-circle"></i>
									</div>
									<div>Add new package</div>
								</button>
							</Link>
						</div>
					</div>
				</div>
				<style jsx>{style}</style>
			</GeneralTemplate>
		</Fragment>
	)
}

export default Index
