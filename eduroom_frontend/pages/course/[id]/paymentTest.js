import React, { Fragment } from 'react'
import Payment from '../../../components/payment/paymentDetail'
import General from '../../../components/template/general'



const checkout = () => {
    return(
    <Fragment>
        <General>   
        <Payment />
        </General>
    </Fragment>
    )
}
export default checkout