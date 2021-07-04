import { Fragment } from 'react'
import Payment from '../../components/payment/paymentDetail'
import General from '../../components/template/generalnonav'
import style from '../../styles/course/paymentPage'

const checkout = () => {
	return (
		<Fragment>
			<General>
				<Payment />
				<img alt="background-img" src="/images/package/payment.svg" className="background-img" />
			</General>
			<style jsx>{style}</style>
			<style jsx>
				{`
					.background-img {
						position: fixed;
						bottom: 0;
						width: 100vw;
						z-index: 0;
					}
				`}
			</style>
		</Fragment>
	)
}
export default checkout
