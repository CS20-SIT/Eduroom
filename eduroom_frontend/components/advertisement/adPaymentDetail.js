import { Fragment, useState, useEffect } from 'react'
import style from '../../styles/course/paymentPage'
import Grid from '@material-ui/core/Grid'
import OrderDetail from './payment/orderDetail'
import CreditBox from './payment/creditBox'
import PaypalBox from './payment/paypalBox'
import Button from '@material-ui/core/Button'
import Country from '../../components/payment/country'
import { getItems, isInCart, addToCart, removeFromCart } from '../../utils/cart'
import api from '../../api'

const AdList = (props) => {
	return (
		<div>
			<div style={{ marginLeft: '10%', marginBottom: '15px' }} className="col-6">
				adid#{props.adid} <a style={{ marginLeft: '46%' }}></a>฿{props.amount}{' '}
			</div>

			<style jsx>{style}</style>
		</div>
	)
}

const Checkout = () => {
	const [open, setOpen] = useState(false)
	const [type, setType] = useState('credit')
	const [courseCart, setCourseCart] = useState([])
	const [packageCart, setPackageCart] = useState([])
	useEffect(() => {
		const courseInCart = getItems('course')
		const packageInCart = getItems('package')
		console.log('course', courseInCart)
		console.log('package', packageInCart)
		setCourseCart(courseInCart)
		setPackageCart(packageInCart)
	}, [])
	const handleOpenDialog = (e) => {
		e.preventDefault()
		setOpen(true)
		handleSubmit()
	}
	const handleCloseDialog = (e) => {
		e.preventDefault()
		setOpen(false)
	}
	const handleSubmit = async () => {}
	const [data, setData] = useState([])
	const [total, setTotal] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/ads/getAdsToBills')
				setData(res.data)
				const res2 = await api.get('/api/ads/getBillAdsTotal')
				setTotal(res2.data[0].totalprice)
			} catch (err) {}
		}
		fetchData()
	}, [])
	const arr = data.map((data, index) => {
		return (
			<div key={data.adid}>
				<AdList adid={data.adid} amount={data.amount} index={index}></AdList>
			</div>
		)
	})

	return (
		<Fragment>
			<div
				style={{
					backgroundImage: `url('/images/big-bg.svg')`,
					backgroundSize: 'cover',
					paddingTop: '3%',
					height: '100%',
				}}
			>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div className="checkout">Checkout</div>
				</div>

				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div>
						<div className="card">
							<Grid container className="test">
								<Grid item xs={6} className="divleft">
									<div style={{ paddingLeft: 40 }}>
										<div style={{ marginLeft: 15, marginTop: 20 }}>
											<h1 className="billDiv">Billing Address</h1>

											<div className="col-6">
												<Country />
												<div onChange={(event) => setType(event.target.value)}>
													<div>
														<input
															type="radio"
															name="Transaction"
															value="credit"
															checked={type === 'credit'}
															style={{
																cursor: 'pointer',
																height: 18,
																width: 18,
															}}
														></input>
														<label
															for="credit"
															style={{
																fontWeight: 550,
																fontSize: 18,
																paddingBottom: 20,
															}}
														>
															Credit or Debit
															<img
																src="/images/package/vesa.svg"
																className="vesa"
																style={{
																	width: 50,
																	height: 50,
																	paddingTop: 30,
																	marginLeft: 10,
																}}
															/>
															<img
																src="/images/package/masterCard.svg"
																className="masterCard"
																style={{
																	width: 50,
																	height: 50,
																	marginLeft: 5,
																	paddingTop: 30,
																}}
															/>
														</label>
													</div>
													<div style={{ marginBottom: 30 }}>
														<input
															type="radio"
															name="Transaction"
															value="paypal"
															checked={type == 'paypal'}
															style={{
																cursor: 'pointer',
																height: 18,
																width: 18,
															}}
														/>
														<label
															for="paypal"
															style={{
																fontWeight: 550,
																fontSize: 18,
																marginRight: 20,
															}}
														>
															Paypal
															<img
																src="/images/package/paypal.svg"
																className="paypal"
																style={{
																	width: 80,
																	height: 20,
																	marginLeft: 10,
																}}
															/>
														</label>
													</div>
												</div>
											</div>
										</div>

										<div style={{ display: 'flex', justifyContent: 'center' }}>
											{type == 'credit' ? <CreditBox data={data} /> : <PaypalBox />}
										</div>
									</div>
								</Grid>

								<Grid item xs={6} style={{ paddingTop: 30 }}>
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<div className="whitebox-ad">
											<h1
												style={{
													fontSize: 20,
													marginLeft: '36%',
													fontWeight: 700,
												}}
											>
												Summary
											</h1>

											<div
												style={{
													display: 'flex',
													justifyContent: 'flex-start',
													fontWeight: 500,
													margin: '10px 0px 10px 50px',
												}}
											></div>

											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'center',
												}}
											></div>
											{arr}

											<hr style={{ width: 300, marginBottom: 10 }}></hr>

											<div
												style={{
													display: 'flex',
													justifyContent: 'flex-start',
													fontWeight: 500,
													margin: '10px 0px 20px 50px',
												}}
											>
												<div style={{ marginRight: 160 }} className="col-6">
													Total
												</div>
												<div style={{ color: 'black' }} className="col-6">
													฿{total}
												</div>
											</div>
											<div className="text">
												Eduroom is required by law to collect applicable transaction taxes for purchases made in certain
												tax jurisdictions.
											</div>
										</div>
									</div>
								</Grid>
							</Grid>

							{/* <div style={{ display: 'flex', flexDirection: 'row' }}>
								<div className="col-6" style={{ marginTop: 50, width: 550 }}>
									<OrderDetail />
								</div>

								<div className="col-6" style={{}}></div>
							</div> */}
						</div>
					</div>
				</div>

				<style jsx>{style}</style>
			</div>
		</Fragment>
	)
}
export default Checkout
