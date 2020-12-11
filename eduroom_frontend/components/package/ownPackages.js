import { Fragment } from 'react'
import Ownpackage from './ownpackage'
import style from '../../styles/package/content'

const ownPakages = ({ packages }) => {
	const renderPackages = () => {
		const arr = packages.map((ownPackage, idx) => {
			return <Ownpackage ownPackage={ownPackage} key={ownPackage.packageid}></Ownpackage>
		})
		return arr
	}
	return (
		<Fragment>
			<div>{renderPackages()}</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ownPakages
