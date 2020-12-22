import React, { Fragment, useState } from 'react'

const SumamryBox = ({discount,price,addCoupon}) => {
	const [coupon,setCoupon] = useState('')

	return (
		<Fragment>
			<div className="summaryBox">
				<div style={{ fontSize: '1.2em', fontWeight: '600' }}>Summary</div>
				<div style={{ padding: '.5rem' }}>
					<div style={{ display: 'flex', width: '100%', paddingBottom:'1rem' }}>
						<div style={{ width: '80%' }}>Original Price</div>
						<div style={{ width: '20%' }}>{price}</div>
					</div>
					<div style={{ display: 'flex', width: '100%',height:'100%', paddingBottom:'1rem' }}>
						<div style={{ width: '80%' }}>
							<input
								style={{
									width: '100%',
									padding: '.5rem',
									border: '1px solid #FB9CCB',
									color: 'rgba(17, 17, 17, 0.48)',
								}}
								type="text"
								placeholder="Enter coupon code"
								onChange={(e)=>{setCoupon(e.target.value)}}
							/>
						</div>
						<div style={{ width: '20%' }}>
							<div
								style={{
									background: '#FB9CCB',
									color: '#fff',
									padding: '.25rem',
									height: '100%',
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								onClick={()=>{addCoupon(coupon)}}
							>
								Apply
							</div>
						</div>
					</div>
					<div style={{ display: 'flex', width: '100%', paddingBottom:'1rem' }}>
						<div style={{ width: '80%' }}>Coupon</div>
						<div style={{ width: '20%' }}>-{discount}%</div>
					</div>
					<div style={{ display: 'flex', width: '100%', paddingBottom:'1rem' }}>
						<div style={{ width: '80%' }}>Coupon Discount</div>
						<div style={{ width: '20%' }}>{price*discount/100}</div>
					</div>
                    <hr/>
					<div style={{ display: 'flex', width: '100%', paddingBottom:'1rem' }}>
						<div style={{ width: '80%' }}>Total</div>
						<div style={{ width: '20%' }}>{price-price*(100-discount)/100}</div>
					</div>
                    <div style={{wordWrap:'break-word'}}>Eduroom is required by law to collect applicable<br/> transaction taxesfor purchases made in certain<br/>  tax jurisdictions.</div>
				</div>
			</div>
			<style jsx>
				{`
					.summaryBox {
						box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
						width: 100%;
						height: 100%;
						background: #fff;
						display: flex;
						padding: 1rem;
						flex-flow: column;
					}
				`}
			</style>
		</Fragment>
	)
}

export default SumamryBox
