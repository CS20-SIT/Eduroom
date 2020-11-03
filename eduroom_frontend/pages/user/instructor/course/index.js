import React, { Fragment } from 'react'
import General from '../../../../components/template/general'
import style from '../../../../styles/package/content'
import Addpackage from '../../../../components/package/addpackage'
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
                            <Addpackage />
                        </div>
                    </div>
                </div>
                <style jsx>{style}</style>
            </General>
        </Fragment>
    )
}
export default Index