import React, { Fragment, useState } from 'react'
import General from '../../../../components/template/general'
import style from '../../../../styles/package/createpackage'
import CreatePackage from '../../../../components/package/createPackage';
import ConfirmPackage from '../../../../components/package/confirmPackage';
const CreatePackagePage = () => {
    const [page,setPage] = useState(1);
    const renderPage = () => {
        if(page === 1){
            return <CreatePackage changePage={(page)=>setPage(page)}/>;
        } else if(page === 2){
            return <ConfirmPackage changePage={(page)=>setPage(page)}/>;
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
export default CreatePackagePage

