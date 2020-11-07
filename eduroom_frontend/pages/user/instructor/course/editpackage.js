import React, { Fragment, useState } from 'react'
import General from '../../../../components/template/general'
import style from '../../../../styles/package/createpackage'
import EditPackage from '../../../../components/package/editPackage';
import ConfirmEdit from '../../../../components/package/editConfirm';
const EditPackagePage = () => {
    const [page,setPage] = useState(1);
    const renderPage = () => {
        if(page === 1){
            return <EditPackage changePage={(page)=>setPage(page)}/>;
        } else if(page === 2){
            return <ConfirmEdit changePage={(page)=>setPage(page)}/>;
        }
    }
    return (
        <Fragment>
            <General>
                {renderPage()}
                <style jsx>{style}</style>
            </General>

        </Fragment>
    )
}
export default EditPackagePage

