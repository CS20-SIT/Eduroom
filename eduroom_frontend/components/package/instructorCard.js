import React, { Fragment } from 'react'
import style from '../../styles/package/detail'

const instructor = () => {
    return (
        <Fragment>

            <div className="bigDiv">
                <div style={{ fontSize: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col-6" >
                            <img
                                src={course.avatar}
                                className="google-logo"
                                style={{ width: 100, height: 100, marginRight: 40 }}
                            />

                        </div>
                        <div>
                            <div className="instname">{`${course.firstname}` + "  " + `${course.lastname}`}</div>
                            <div style={{ fontSize: 15, marginBottom: 15 }}>Massachusetts Institute of Technology</div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className="col-6" >
                                    <img
                                        src="/images/package/book.svg"
                                        className="google-logo"
                                        style={{ width: 25, height: 30, margin: '0 10px 5px 0' }}
                                    />
                                </div>
                                <div className="col-6" style={{ display: 'flex', fontSize: 13, paddingTop: 7 }}>{courseInstructor.courses} courses</div>
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