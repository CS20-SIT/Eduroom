import Styles from '../../styles/coupon/MyCoupon.module.css'
import General from '../../components/template/general'
import { useRouter } from 'next/router'
const temp = () => {
	const router = useRouter()
	

	return (
		<div>
			<General>
				<div className={Styles.container}>
					<h1 onClick={() => router.push('/user/MyCoupon')}>MYCOUPON</h1>
					<h1 onClick={() => router.push('./CouponHistory')}>HISTORY</h1>
					<h1>EXPIRE</h1>
				</div>
                <div className={Styles.line}><div className={Styles.box3}></div></div>
				<div className={Styles.card}></div>
				<button className={Styles.btn} onClick={() => router.push('/user/coupon')}>
					back
				</button>
			</General>
		</div>
	)
}
export default temp
