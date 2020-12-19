import { Fragment, useEffect, useState } from 'react'
import Cart from '../../components/payment/cart'
import General from '../../components/template/general'
import api from '../../api'
import style from '../../styles/course/cartStyle'

const CartPage = () => {
	const [cartCourses, setCartCourses] = useState([])
	const [cartPackages, setCartPackages] = useState([])
	const [courses, setCourses] = useState([])
	const fetchCourse = async () => {
		const res = await api.get('/api/package/coursesFromIds', {
			params: { ids: ['425efbde-1c10-7c45-e321-b1d2adb47c1d', '78abe059-19a3-272e-3a32-bf1f12965c13'] },
		})
		console.log(res.data)
	}
	useEffect(() => {
		fetchCourse()
	}, [])
	return (
		<Fragment>
			<General>
				<div>Hello</div>
			</General>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default CartPage
