import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/course/paymentPage'
import Grid from '@material-ui/core/Grid'
import OrderDetail from './orderDetail'
import CreditBox from './creditBox'
import PaypalBox from './paypalBox'
import Button from '@material-ui/core/Button'
import Country from '../../components/payment/country'

const Checkout = () => {
	const [open, setOpen] = useState(false)
	const [type, setType] = useState('credit')
	const handleOpenDialog = (e) => {
		e.preventDefault()
		setOpen(true)
		handleSubmit()
	}
	const handleCloseDialog = (e) => {
		e.preventDefault()
		setOpen(false)
	}
	const handleSubmit = () => {
		console.log(type)
	}
	useEffect(() => {
		console.log(type)
	}, [type])

	return (
		<Fragment>
			<div className="BG" img={'/images/package/payment.svg'}>
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
											{type == 'credit' ? <CreditBox /> : <PaypalBox />}
										</div>
									</div>
								</Grid>

								<Grid item xs={6} style={{ paddingTop: 30 }}>
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<div className="whitebox">
											<h1
												style={{
													fontSize: 20,
													marginLeft: 20,
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
											>
												<div style={{ marginRight: 95 }} className="col-6">
													Original Price
												</div>
												<div className="col-6">฿900</div>
											</div>

											<div
												style={{
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'center',
												}}
											>
												<input
													type="text"
													className="whiteboxInput"
													placeholder="Enter coupon code"
													style={{
														border: '1.5px solid',
														borderColor: '#FB9CCB',
														fontSize: 16,
													}}
													name="secure"
													type={'text'}
												/>
												<Button
													variant="contained"
													style={{
														backgroundColor: '#FB9CCB',
														color: 'white',
														width: 80,
														borderRadius: 0,
													}}
												>
													Apply
												</Button>
											</div>
											<div
												style={{
													display: 'flex',
													justifyContent: 'flex-start',
													fontWeight: 500,
													margin: '10px 0px 5px 50px',
												}}
											>
												<div style={{ marginRight: 132 }} className="col-6">
													Coupon
												</div>
												<div style={{ color: '#9593A0' }} className="col-6">
													-10%
												</div>
											</div>

											<div
												style={{
													display: 'flex',
													justifyContent: 'flex-start',
													fontWeight: 500,
													margin: '10px 0px 10px 50px',
												}}
											>
												<div style={{ marginRight: 57 }} className="col-6">
													Coupon discounts
												</div>
												<div style={{ color: '#9593A0' }} className="col-6">
													-฿850
												</div>
											</div>

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
													฿500
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
			</div>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Checkout
