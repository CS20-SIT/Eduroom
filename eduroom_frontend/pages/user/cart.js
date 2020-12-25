import { Fragment, useEffect, useState } from 'react'
import General from '../../components/template/general'
import CartElement from '../../components/payment/cart'
import { getItems, removeFromCart } from '../../utils/cart'
import api from '../../api'
import style from '../../styles/course/cartStyle'
import CheckoutDialog from '../../components/payment/checkoutDialog'
const CartPage = () => {
	const [cartCourses, setCartCourses] = useState([])
	const [cartPackages, setCartPackages] = useState([])
	const [courses, setCourses] = useState([])
	const [packages, setPackages] = useState([])
	const [dialog, setDialog] = useState(false)
	const fetchCourse = async () => {
		try {
			const courses = getItems('course')
			const res = await api.get('/api/package/coursesFromIds', {
				params: { ids: courses },
			})
			setCourses(res.data)
		} catch (err) {}
	}
	const fetchPackages = async () => {
		try {
			const packages = getItems('package')
			const res = await api.get('/api/package/packagesFromIds', {
				params: { ids: packages },
			})
			setPackages(res.data)
		} catch (err) {}
	}
	const updateCart = () => {
		const courses = getItems('course')
		const packages = getItems('package')
		setCartCourses(courses)
		setCartPackages(packages)
	}
	useEffect(() => {
		updateCart()
	}, [])

	useEffect(() => {
		fetchCourse()
	}, [cartCourses])

	useEffect(() => {
		fetchPackages()
	}, [cartPackages])

	const removeElement = (type, id) => {
		removeFromCart(type, id)
		updateCart()
	}

	const renderCourses = () => {
		const arr = courses.map((course, idx) => {
			return <CartElement data={course} key={idx} type="course" handleRemove={removeElement}></CartElement>
		})
		return arr
	}
	const renderPackages = () => {
		const arr = packages.map((myPackage, idx) => {
			return <CartElement data={myPackage} key={idx} type="package" handleRemove={removeElement}></CartElement>
		})
		return arr
	}
	const handleCheckout = () => {
		setDialog(true)
	}
	return (
		<Fragment>
			<General>
				{dialog ? (
					<CheckoutDialog
						handleClick={() => {
							setDialog(false)
						}}
						courseList={courses}
						packageList={packages}
					/>
				) : null}
				<div className="cart">
					<h1 className="header">Eduroom Cart</h1>
					<div className="container">
						<div className="element">
							<p className="blue">{courses.length} courses in cart</p>
							{renderCourses()}
							<p className="blue">{packages.length} packages in cart</p>
							{renderPackages()}
						</div>
					</div>
					<div className="chk-btn">
						<div className="chk-btn-in" onClick={handleCheckout}>
							Checkout
						</div>
					</div>
				</div>
			</General>
			<style jsx>{`
				.chk-btn {
					display: flex;
					justify-content: flex-end;
					padding: 0rem 5rem;
				}
				.chk-btn-in {
					background: #fb9ccb;
					min-width: 150px;
					padding: 0.75rem;
					border-radius: 25px;
					color: #fff;
					font-weight: bold;
					display: flex;
					justify-content: center;
					cursor: pointer;
					text-transform: uppercase;
				}
				.cart {
					display: flex;
					flex-flow: column;
				}
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
					padding: 2rem 5rem;
				}
				.element {
					width: 100%;
				}
			`}</style>
		</Fragment>
	)
}
export default CartPage
