import React, { Fragment } from 'react'
import style from '../../styles/course/orderDetailSt'
const orderDetail = () => {
    return (
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'start', paddingLeft: 50}}>
                <div className="bigDiv" >
                    <div style={{ fontSize: 10 }}>
                        <h1 style={{ margin: 0, fontSize: 24, color: '#5B5B5B' }}>Order Detail</h1>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                            <div className="col-4" >
                                <img
                                    src="/images/package/packagePic.svg"
                                    className="google-logo"
                                    style={{ width: 100, height: 100, marginRight: 40 }}
                                />

                            </div>
                            <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
                                <div className="col-4" style={{ fontSize: 18, fontWeight: 700, paddingTop: 20, width: '23vw' }}>
                                    Learn to code with Python
                        </div>

                                <div className="col-4" style={{ width: 100, height: 100, width: '23vw', fontSize: 15 }}>
                                    Price(฿50)
                            <div>
                                        Discount(-฿850)
                            </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
export default orderDetail;