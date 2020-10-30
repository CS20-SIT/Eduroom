import React, { Fragment } from 'react'
import Payment from '../../../components/payment/paymentDetail'
import GeneralNoNav from '../../../components/template/generalnonav'



const checkout = () => {
    return(
    <Fragment>
        <GeneralNoNav>     
        <Payment />
        </GeneralNoNav>
    </Fragment>
    )
}
export default checkout