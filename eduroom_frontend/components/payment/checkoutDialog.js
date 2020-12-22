import React, { Fragment, useEffect, useState } from 'react'
import Country from './country'
import CreditBox from './creditBox'
import SummaryBox from './summaryBox'
import api from '../../api'
const CheckoutDialog = ({ handleClick, courseList, packageList }) => {
	const [country, setCountry] = useState('')
	const [prices, setPrice] = useState(0)
	const [discount, setDiscount] = useState(0)
	const [coupon,setCoupon] = useState('')
	useEffect(() => {
		if (courseList && packageList) {
			let price = 0
			for (let i of courseList) {
				price += i.price
			}
			for (let i of packageList) {
				price += i.price
			}
			setPrice(price)
			console.log(price)
		}
	}, [courseList, packageList])
	const handleAddCoupon = (coupon) => {
		api
			.get('/api/coupon/GetDiscountFromCoupon?pcode=' + coupon)
			.then((res) => {
				console.log(res.data)
				setDiscount(res.data.discount[0].discountamount)
				setCoupon(coupon)
			})
			.catch((err) => {
				alert(err.response.data.error)
			})
	}
	const handleSubmit = () => {
		const newPrice = prices * (100-discount)/100
		api.post('/api/user/checkout',{course:cartCourses,packages:cartPackages,price:newPrice,coupon:coupon}).then(
			res=>{
				console.log(res.data)
			}
		)
	}
	return (
		<Fragment>
			<div className="modal">
				<div className="modal-content">
					<div className="paymentbox">
						<div className="paymentleft">
							<div style={{ fontSize: '1.4em', fontWeight: '600', color: '#5B5B5B' }}>Billing Address</div>
							<div style={{ width: '100%', paddingTop: '1rem' }}>
								<Country handleChange={(e) => setCountry(e.target.value)} />
							</div>
							<div style={{ width: '100%', paddingTop: '1rem' }}>
								<CreditBox />
							</div>
						</div>
						<div className="paymentright">
							<div>
								<SummaryBox addCoupon={handleAddCoupon} price={prices} discount={discount} />
							</div>
						</div>
					</div>
				</div>
				<div className="modal-overlay" onClick={handleClick} />
			</div>
			<style jsx>
				{`
					.modal {
						position: fixed;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						display: flex;
						justify-content: center;
						align-items: center;
						z-index: 10;
					}
					.modal-overlay {
						position: absolute;
						left: 0;
						top: 0;
						width: 100vw;
						height: 100vh;
						background: #00000040;
						display: flex;
						justify-content: center;
						align-items: center;
						z-index: 4;
					}
					.paymentbox {
						width: 100%;
						display: flex;
					}
					.paymentleft {
						width: 50%;
						padding-right: 1rem;
					}
					.paymentright {
						width: 50%;
						padding-left: 1rem;
						height: 100%;
						padding-top: 1rem;
						padding-bottom: 1rem;
					}
					.modal-content {
						background: white;
						min-width: 1000px;
						height: auto;
						border-radius: 10px;
						z-index: 5;
						padding: 2.5%;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CheckoutDialog
