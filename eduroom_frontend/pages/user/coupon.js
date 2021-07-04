import { Fragment } from 'react'
import GeneralTemplate from '../../components/template/general'
import CouponShop from '../../components/coupon/couponshop'
const CouponPage = () => {
	return (
		<Fragment>
			<GeneralTemplate>
				<CouponShop />
			</GeneralTemplate>
		</Fragment>
	)
}
export default CouponPage
