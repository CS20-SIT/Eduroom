import React, { Fragment, useState, useEffect } from 'react'
import GeneralTemplate from '../../../../components/template/generalnonav'
import style from '../../../../styles/package/createpackage'
import CreatePackage from '../../../../components/package/createPackage'
import ConfirmPackage from '../../../../components/package/confirmPackage'
import api from '../../../../api'

const CreatePackagePage = () => {
	const [page, setPage] = useState(1)
	const [myPackage, setMyPackage] = useState({
		pic: '',
		picPath: '',
		name: '',
		discount: 0,
		category: '',
		categoryText: '',
		detail: '',
		selectedCourses: [],
		totalPrice: 0,
	})

	useEffect(() => {
		// console.log(myPackage)
	}, [myPackage])
	const renderPage = () => {
		if (page === 1) {
			return <CreatePackage myPackage={myPackage} setMyPackage={setMyPackage} changePage={(page) => setPage(page)} />
		} else if (page === 2) {
			return <ConfirmPackage myPackage={myPackage} changePage={(page) => setPage(page)} />
		}
	}
	return (
		<Fragment>
			<GeneralTemplate>
				<div className="package-bg">{renderPage()}</div>
				<style jsx>{style}</style>
			</GeneralTemplate>
		</Fragment>
	)
}
export default CreatePackagePage
