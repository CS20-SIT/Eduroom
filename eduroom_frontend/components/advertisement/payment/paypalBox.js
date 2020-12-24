import React, { Fragment } from 'react'
import style from '../../../styles/course/paymentPage'
const paypalBox = () => {
    return (
        <Fragment>
            <div className="purpleBox2" >
                <div>
                <div style={{ color: '#5B5B5B' }} className="paypalText">In order to complete your transaction,
                   we will transfer you over to PayPal’s secure servers.</div>
                   </div>
                   <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 30 }}>
                    <img
                        src="/images/package/newLock.svg"
                        className="google-logo"
                        style={{ width: 35, height: 35, marginRight: 10 }}
                    />
                    <div style={{ color: '#5B5B5B' }}>Secure  <br></br>Connection</div>

                </div>
            </div>
            <style jsx>
                {
                    style
                }
            </style>
        </Fragment>
    )
}
export default paypalBox;