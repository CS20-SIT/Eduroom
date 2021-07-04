import { Fragment, useState, useEffect } from 'react'
import style from '../../styles/package/detail'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'
import api from '../../api'
import { getItems, isInCart, addToCart, removeFromCart } from '../../utils/cart'
const Package = (props) => {
	const router = useRouter()
	const [cart, setCart] = useState([])
	useEffect(() => {
		setCart(getItems('package'))
	}, [])
	const clickAddToCart = () => {
		addToCart('package', props.packages.packageid)
		setCart(getItems('package'))
	}
	const clickRemoveFromCart = () => {
		removeFromCart('package', props.packages.packageid)
		setCart(getItems('package'))
	}
	const renderButton = () => {
		const inCart = isInCart('package', props.packages.packageid)
		if (inCart) {
			return (
				<Button
					id="addtocart-btn"
					style={{ marginRight: 10, backgroundColor: '#3D467F', color: 'white', borderRadius: 10 }}
					onClick={clickRemoveFromCart}
				>
					{' '}
					Remove from cart
					<img
						src="/images/package/addToCart.svg"
						style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
					/>
				</Button>
			)
		} else {
			return (
				<Button
					id="addtocart-btn"
					style={{ marginRight: 10, backgroundColor: '#3D467F', color: 'white', borderRadius: 10 }}
					onClick={clickAddToCart}
				>
					{' '}
					Add to cart
					<img
						src="/images/package/addToCart.svg"
						style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
					/>
				</Button>
			)
		}
	}

	return (
		<Fragment>
			<div className="center">
				<div className="card">
					<div style={{ display: 'flex' }}>
						<div className="incard">
							<h1 className="title">{props.packages?.packagename}</h1>
							<div className="text2">{props.courseCount} courses in this package</div>

							<div className="instructor">
								<div style={{ marginRight: 10 }}>Instructor</div>
								<div>{`${props.packages?.firstname}` + '  ' + `${props.packages?.lastname}`}</div>
							</div>
							<div className="last-update">
								<div style={{ paddingBottom: 10 }}></div>
							</div>
							<div className="price">
								<div className="old-price">{parseFloat(props.packages?.price).toFixed(2)}</div>
								<div className="new-price">{props.packages?.oldprice}</div>
							</div>
							{renderButton()}
						</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<img
								src={props.packages?.image}
								style={{ marginLeft: '40px', width: '20vw', height: '23vh', borderRadius: '10px' }}
							/>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Package
