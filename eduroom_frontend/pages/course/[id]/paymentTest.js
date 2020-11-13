import React, { Fragment } from 'react'
import Payment from '../../../components/payment/paymentDetail'
import General from '../../../components/template/general'


const checkout = () => {
    return(
    <Fragment>
        <General img={'/images/package/payment.svg'}>
        <Payment/>
        </General>
        <style jsx>{`
        img{
            width:100%;
        }
      `}</style>
    </Fragment>
    )
}
export default checkout