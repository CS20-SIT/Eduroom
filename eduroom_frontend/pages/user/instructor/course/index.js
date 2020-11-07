import React, { Fragment } from 'react'
import General from '../../../../components/template/general'
import style from '../../../../styles/package/content'
import Link from 'next/link'
import Ownpackage from '../../../../components/package/ownpackage'

const Index = () => {

    return (
        <Fragment>
            <General>
                <div style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="package-header">Package Management</div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="container" >
                            {/* <div className="package-content">You Have Not Create Package Yet</div> */}
                            <Ownpackage />
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Link href="/user/instructor/course/createpackage">
                                    <button className="addpackbutton">
                                        <i className="fas fa-plus-circle"></i>
                                        <br></br>
            Add new package
          </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{style}</style>
            </General>
        </Fragment>
    )
}
export default Index