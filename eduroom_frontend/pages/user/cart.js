import { Fragment, useEffect, useState } from 'react'
import General from '../../components/template/general'
import CartElement from '../../components/payment/cart'
import { getItems } from '../../utils/cart'
import api from '../../api'
import style from '../../styles/course/cartStyle'

const CartPage = () => {
	const [cartCourses, setCartCourses] = useState([])
	const [cartPackages, setCartPackages] = useState([])
	const [courses, setCourses] = useState([])
	const [packages, setPackages] = useState([])
	const fetchCourse = async () => {
		const res = await api.get('/api/package/coursesFromIds', {
			params: { ids: cartCourses },
		})
		setCourses(res.data)
	}
	const fetchPackages = async () => {
		const res = await api.get('/api/package/packagesFromIds', {
			params: { ids: cartPackages },
		})
		setPackages(res.data)
	}
	useEffect(() => {
		const courses = getItems('course')
		const packages = getItems('package')
		setCartCourses(courses)
		setCartPackages(packages)
	}, [])

	useEffect(() => {
		fetchCourse()
	}, [courses])

	useEffect(() => {
		fetchPackages()
	}, [packages])
	const renderCourses = () => {
		const arr = courses.map((course, idx) => {
			return <CartElement data={course} key={idx}></CartElement>
		})
		return arr
	}
	const renderPackages = () => {
		const arr = packages.map((myPackage, idx) => {
			return <CartElement data={myPackage} key={idx}></CartElement>
		})
		return arr
	}
	return (
		<Fragment>
			<General>
				<div>
					<h1 className="header">Eduroom Cart</h1>
					<div className="container">
						<div className="element">
							<p className="blue">{courses.length} courses in cart</p>
							{renderCourses()}
							<p className="blue">{packages.length} packages in cart</p>
							{renderPackages()}
						</div>
					</div>
				</div>
			</General>
			<style jsx>{`
				.header {
					text-align: center;
					color: #3d467f;
				}
				.blue {
					color: #3d467f;
				}
				.container {
					display: flex;
					justify-content: center;
				}
				.element {
					width: 80%;
				}
			`}</style>
		</Fragment>
	)
}
export default CartPage
