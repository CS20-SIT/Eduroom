import React, { Fragment, useEffect, useState } from 'react'
import GeneralTemplate from '../../../../components/template/generalnonav'
import style from '../../../../styles/package/content'
import Link from 'next/link'
import OwnPackages from '../../../../components/package/ownPackages'
import api from '../../../../api'

const Index = () => {
<<<<<<< HEAD
	const [packages, setPackages] = useState(null)
	const fetchPackages = async () => {
		const res = await api.get('/api/package/getInstructorPackage')
		setPackages(res.data)
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
							<Link href="/user/instructor/course/package/createpackage">
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
=======
    return (
        <Fragment>
            <GeneralTemplate>
                <div className={"package-bg"}>
                    <div className="package-header">PACKAGE MANAGEMENT</div>
                    <div className="container">
                        {/* <div className="package-content">You Have Not Create Package Yet</div> */}
                        <div>
                            <Ownpackage id={'b7c2c25b-01e4-43e4-a72d-739d194a5bcd'} />
                            <Ownpackage id={'0bd06850-0ab6-4912-8c1c-4d802c8724cb'} />
                        </div>
                        <div>
                            <Link href="/user/instructor/course/createpackage">
                                <button id="add-pack-button" className="addpackbutton">
                                    <div><i className="fas fa-plus-circle"></i></div>
                                    <div>add new package</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <style jsx>{style}</style>
            </GeneralTemplate>
        </Fragment>
    )
>>>>>>> cf9aef62a90b052c775f64a70db3d471cc10d932
}

export default Index
