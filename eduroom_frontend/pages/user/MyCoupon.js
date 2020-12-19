import React, { Fragment } from 'react'
import GeneralTemplate from '../../components/template/general'
import MyCoupon from '../../components/coupon/Mycoupon'
const MyCouponPage = () => {
	return (
	  <Fragment>
		<GeneralTemplate>
			<MyCoupon />
		</GeneralTemplate>
	  </Fragment>
	)
  }
export default MyCouponPage
