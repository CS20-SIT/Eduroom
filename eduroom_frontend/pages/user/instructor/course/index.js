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
                            <Ownpackage id={'b7c2c25b-01e4-43e4-a72d-739d194a5bcd'} />
                            <Ownpackage id={'0bd06850-0ab6-4912-8c1c-4d802c8724cb'} />
                        </div>
                        <div>
                            <Link href="/user/instructor/course/createpackage">
                                <button id="add-pack-button" className="addpackbutton">
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

