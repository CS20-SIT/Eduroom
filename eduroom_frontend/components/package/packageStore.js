import { useEffect, useState } from 'react'
import ListOfPackage from './listOfPackage'
import api from '../../api'
import Styles from '../../styles/package/pShop'

const packages = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const res = await api.get('/api/package/getAllPackage')
			setData(res.data)
		}
		fetchData()
	}, [])

	return (
		<div className="package">
			<div className="packageLanding">Package in Eduroom</div>
			<ListOfPackage item={data}></ListOfPackage>
			<style jsx>{Styles}</style>
		</div>
	)
}

export default packages
