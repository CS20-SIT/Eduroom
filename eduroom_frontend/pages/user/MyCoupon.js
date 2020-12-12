import Styles from '../../styles/coupon/MyCoupon.module.css'
import General from '../../components/template/general'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
const temp = () => {
	const router = useRouter()
	

	return (
		<div>
			<General>
				<div className={Styles.container}>
					<h1>MYCOUPON</h1>
					<h1 onClick={() => router.push('./CouponHistory')}>HISTORY</h1>
					<h1 onClick={() => router.push('./CouponExpire')}>EXPIRE</h1>
				</div>
                <div className={Styles.line}><div className={Styles.box}></div></div>
				<div className={Styles.card}></div>
				<button className={Styles.btn} onClick={() => router.push('/user/coupon')}>
					back
				</button>
			</General>
		</div>
	)
}
export default temp
