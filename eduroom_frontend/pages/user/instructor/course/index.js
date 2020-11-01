import React, { Fragment } from 'react'
import GeneralNoNav from '../../../../components/template/generalnonav'
import style from '../../../../styles/package/content'
import Addpackage from '../../../../components/package/addpackage'

const Index = () => {
    return (
        <Fragment>
            <GeneralNoNav>
                <div style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="package-header">Package Management</div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="container" >
                            <div className="package-content">You Have Not Create Package Yet</div>
                            <Addpackage />
                        </div>
                    </div>
                </div>
                <style jsx>{style}</style>
            </GeneralNoNav>
        </Fragment>
    )
}
export default Index