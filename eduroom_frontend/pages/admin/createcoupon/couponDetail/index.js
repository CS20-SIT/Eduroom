import React, { Fragment } from 'react'
import GeneralTemplate from '../../../../components/template/general'
import CouponDetail from '../../../../components/coupon/couponDetail'
const coupondetailPage = () => {
  return (
    <Fragment>
      <GeneralTemplate>
          <CouponDetail />
      </GeneralTemplate>
    </Fragment>
  )
}
export default coupondetailPage