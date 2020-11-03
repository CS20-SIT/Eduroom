import React, { Fragment } from 'react'
import General from '../../../components/template/general'
import PackageHead from '../../../components/package/packageHead'
import PackageDetail from '../../../components/package/packageDetail'

const Package = () => {
    return(
    <Fragment> 
        <General>
            <div style={{marginBottom:30}}>
            <PackageHead />
            </div>
            <PackageDetail/>
        </General>
    </Fragment>
    )
}
export default Package