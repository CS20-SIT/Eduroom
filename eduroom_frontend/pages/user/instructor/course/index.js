import React, { Fragment, useState } from 'react'
import GeneralTemplate from '../../../../components/template/generalnonav'
import style from '../../../../styles/package/content'
import Link from 'next/link'
import Ownpackage from '../../../../components/package/ownpackage'

const Index = () => {
    return (
        <Fragment>
            <GeneralTemplate>
                <div className={"package-bg"}>
                    <div className="package-header">PACKAGE MANAGEMENT</div>
                    <div className="container">
                        {/* <div className="package-content">You Have Not Create Package Yet</div> */}
                        <div>
                            <Ownpackage id={11111111100} />
                            <Ownpackage id={22525} />
                        </div>
                        <div>
                            <Link href="/user/instructor/course/createpackage">
                                <button className="addpackbutton">
                                    <div><i className="fas fa-plus-circle"></i></div>
                                    <div>add new package</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <style jsx>{style}</style>
            </GeneralTemplate>
        </Fragment>
    )
}


export default Index

