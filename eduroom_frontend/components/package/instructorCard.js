import React, { Fragment } from 'react'
import style from '../../styles/package/detail'

const instructor = () => {
    return (
        <Fragment>

            <div className="bigDiv">
                <div style={{ fontSize: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                        <div className="col-6" >
                            <img
                                src="/images/package/somsri.svg"
                                className="google-logo"
                                style={{ width: 130, height: 130, marginRight: 40 }}
                            />

                        </div>
                        <div className="col-6">
                            <h1>Savannah Nguyen</h1>
                            <div style={{ fontSize: 15, marginBottom: 25 }}>Massachusetts Institute of Technology</div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <div className="col-6" >
                                    <img
                                        src="/images/package/book.svg"
                                        className="google-logo"
                                        style={{ width: 30, height: 30, marginRight: 10 }}
                                    />
                                </div>

                                <div className="col-6" style={{display:'flex',fontSize: 13, paddingTop:10}}>5 courses</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{style}</style>
        </Fragment>
    )
}
export default instructor